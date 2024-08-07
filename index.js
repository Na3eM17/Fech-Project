const srch = document.getElementById("icon");
let shw = document.getElementById("nam");

function hid(){
        srch.style.display = "none";
}


async function fetchData(){
    try{
        const name = document.getElementById("nam").value;
        const response = await fetch(`https://api.github.com/users/${name}`);
        if(!response.ok){
            throw new Error("cant find data");
        }
        const data = await response.json();

        console.log(data);
        const imgdata = data.avatar_url;
        const imgElement = document.getElementById("img-div");
        imgElement.src = imgdata;
        const imgShow = document.getElementById("img-div1"); 
        imgShow.style.display = "flex";

        const n = data.login;
        document.getElementById("username").textContent = n;

        const page = data.html_url;
        const aElement = document.getElementById("url-page");
        aElement.href = page;

        const date = data.created_at;
        document.getElementById("date").textContent = date;

        const first = document.getElementById("first"); 
        first.style.display = "flex";

 

        const repo = data.public_repos;
        document.getElementById("repo").textContent = repo;

        const folower = data.followers;
        document.getElementById("folwer").textContent = folower;

        const foloweing = data.following;
        document.getElementById("folowing").textContent = foloweing;

        const contentShow = document.getElementById("p-info"); 
        contentShow.style.display = "flex";

        const pageRepo = `https://github.com/${name}?tab=repositories`;
        const aElement2 = document.getElementById("torepo2");
        aElement2.href = pageRepo;
        
    }catch(error){
        console.log(error);
    }

}
