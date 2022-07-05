/* Github RestAPI - Start*/
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

/* GLOBAL VARIABLES */
const gh_username = 'sillasbernardo';

const gh_access = new Octokit({
    auth: '',
    userAgent: gh_username,
    baseUrl: 'https://api.github.com'
})

gh_access.rest.repos.listForUser({
    username: gh_username
}).then(res => {

    /* Add image */
    const repo_div_title = [];
    const repo_details_title = [];

    /* Add title and details */
    const repo_div_details = [];
    const repo_images = []; // The element 'img' 
    const repo_details_desc = [];
    const view_project_btn = [];

    const images = []; // The image itself

    for (let index = 0; index < res.data.length; index++){
        /* DECLARING VALUES TO ARRAYS - START */

        console.log(res.data[index]);

        images[index] = `https://raw.githubusercontent.com/${res.data[index].owner.login}/${res.data[index].name}/main/img/avatar.jpg`;

        /* div 'title' */
        repo_div_title[index] = document.createElement('div'); // Creates div element
        repo_div_title[index].className = 'title'; // Set the div class name to 'images'
        
        /* h4 element > div 'title' */
        repo_details_title[index] = document.createElement('h4'); // Creates h4 element
        repo_details_title[index].textContent = res.data[index].name; // Set the h4 content text

        /* div 'details' */
        repo_div_details[index] = document.createElement('div'); // Creates div element
        repo_div_details[index].className = 'details'; // Set the div class name to 'details

        /* p element > div 'details' */
        repo_details_desc[index] = document.createElement('p'); // Creates p element
        repo_details_desc[index].textContent = res.data[index].description;

        /* btn element > div 'details' */
        view_project_btn[index] = document.createElement('a'); // Creates button
        view_project_btn[index].className = 'view-more'; // Set the button class name to 'view-more'
        view_project_btn[index].textContent = 'View more'; // Set text content
        view_project_btn[index].setAttribute('href', `${res.data[index].html_url}`);
        
        /* DECLARING VALUES TO ARRAYS - END */


        /* ADDING ELEMENTS TO DIVS - START*/
        document.getElementById('portfolio').appendChild(repo_div_title[index]); // Add div 'images' to existing div
        repo_div_title[index].appendChild(repo_details_title[index]); // Add title to repo_div_details

        document.getElementById('portfolio').appendChild(repo_div_details[index]); // Add div 'details' to existing div      

        /* If no image is found on github, then js won't create 'img' element in the DOM */
        fetch(images[index])
            .then(response => {
                if (response.ok){
                    /* img element > div 'details' */
                    repo_images[index] = document.createElement('img'); // Creates img element
                    repo_images[index].src = images[index];

                    repo_div_details[index].appendChild(repo_images[index]); // Add images to repo_div_images
                    repo_div_details[index].appendChild(repo_details_desc[index]); // Add description to repo_div_details
                }else{
                    repo_div_details[index].appendChild(repo_details_desc[index]); // Add description to repo_div_details
                    throw new Error("Image not found");
                }
                
            }).catch(error => {
                console.log(error);
            })

        
        /* ADDING ELEMENTS TO DIVS - END */
    }
})

/* Github RestAPI - End */