function getPosts(userId){
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+userId)
    request.responseType = "json"
    request.send()
    request.onload = ()=>{
        if(request.status >=200 && request.status < 300){
            let posts = request.response 
            document.getElementById("posts").innerHTML = ""
            for(post of posts){
                let content = `
                <div id="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                </div>
                `

                document.getElementById("posts").innerHTML += content
            }
        }else{
            console.log("error")
        }
    }
}


function getUsers(){
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = ()=>{
        if(request.status >=200 && request.status < 300){
            let users = request.response 
            document.getElementById("users").innerHTML = ""
            for( user of users ){
                let content = `
                <div id="user" onclick="userClicked(${user.id},this)">
                    <h3>${user.name}</h3>
                    <h4>${user.email}</h4>
                </div>
                `

                document.getElementById("users").innerHTML += content
            }
        }else{
            console.log("error")
        }
    }
}

function userClicked(id,e){
    getPosts(id)
    let selected = document.getElementsByClassName("selected")
    for(ele of selected){
        ele.classList.remove("selected")
    }
    e.classList.add("selected")
}

getUsers()
getPosts(1)