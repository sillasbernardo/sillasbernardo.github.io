import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

function loadRepos(){

    const gh_username = 'sillasbernardo';

    const gh_access = new Octokit({
        auth: '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',
        userAgent: gh_username,
        baseUrl: 'https://api.github.com'
    });

    gh_access.rest.repos.listForUser({
        username: gh_username
    })
    .then(res => {

        for (let index = 0; index < res.data.length; index++){

            const repo_title = [];
            const repo_description = [];
            const repo_id = []
    
            repo_title[index] = document.createElement('h4');
            repo_title[index].textContent = res.data[index].name;

            repo_description[index] = document.createElement('p');
            repo_description[index].textContent = res.data[index].description;

            repo_id[index] = document.createElement('h5');
            repo_id[index].textContent = res.data[index].id;

            document.getElementById('list-repos').appendChild(repo_title[index]);
            document.getElementById('list-repos').appendChild(repo_description[index]);
            document.getElementById('list-repos').appendChild(repo_id[index]);

            /* 
                MUST CREATE AN OPTION TO CHOOSE WHICH REPOS WILL BE DISPLAYED IN THE DOM
                MUST WORK ON THE STYLE OF IT
            */


        }
    })

}

document.getElementById('get-repos').addEventListener('click', loadRepos, false);