import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const element = document.getElementById('get_repos');
if (typeof(element) != 'undefined' && element != null){
    document.getElementById('get_repos').addEventListener('click', loadRepos, false);

    /* Load all repo(s) from github */
    function loadRepos(){

        const gh_username = 'sillasbernardo';

        const gh_access = new Octokit({
            auth: '',
            userAgent: gh_username,
            baseUrl: 'https://api.github.com'
        });

        gh_access.rest.repos.listForUser({
            username: gh_username
        })
        .then(res => {
            for (let index = 0; index < res.data.length; index++){

                const repo_box = [];
                const repo_title = [];
                const repo_description = [];
                const repo_id = [];
                const exclude_btn = [];
        
                repo_box[index] = document.createElement('div');
                repo_box[index].className = 'repo_box';

                repo_title[index] = document.createElement('h5');
                repo_title[index].textContent = res.data[index].name;

                repo_description[index] = document.createElement('p');
                repo_description[index].textContent = res.data[index].description;

                repo_id[index] = document.createElement('span');
                repo_id[index].textContent = res.data[index].id;

                exclude_btn[index] = document.createElement('button');
                exclude_btn[index].className = 'exclude_btn';
                exclude_btn[index].textContent = 'Exclude';

                document.getElementById('list-repos').appendChild(repo_box[index]);
                repo_box[index].appendChild(repo_title[index]);
                repo_box[index].appendChild(repo_description[index]);
                repo_box[index].appendChild(repo_id[index]);
                repo_box[index].appendChild(exclude_btn[index]);
            }
        })
    }
}

/* Toggle Exclude repo(s) in Dashboard */
var isToggleExcludeRepo = false;
document.getElementById('exclude_repo_link').addEventListener('click', toggleExcludeRepo, false);
function toggleExcludeRepo(){
    if (!isToggleExcludeRepo){
        isToggleExcludeRepo = true;

        var exclude_title = document.createElement('h3');
        exclude_title.textContent = 'Exclude repo(s)';
        
        var get_repos = document.createElement('button');
        get_repos.textContent = 'Get Repos';
        get_repos.id = 'get_repos';
        get_repos.type = 'submit';
    
        document.getElementById('repo_board').appendChild(exclude_title);
        document.getElementById('repo_board').appendChild(get_repos);
    }
}
