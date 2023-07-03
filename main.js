$(document).ready(function(){
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

        fetch('https://api.github.com/users/renanpellegrini')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            name.innerHTML = json.name;
            username.innerHTML = json.login;
            avatar.src = json.avatar_url;
            repos.innerHTML = json.public_repos;
            followers.innerHTML = json.followers;
            following.innerHTML = json.following;
            link.href = json.html_url;      
    })
})