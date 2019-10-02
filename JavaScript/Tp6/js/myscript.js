var postArray = [];
function fillUpPosts(){

    createPosts('https://utn2019-avanzada2-tp6.herokuapp.com/posts?title=vacaciones&body=sibuenasvacaciones')
    .then((response) =>{
        console.log("listo");    
    })
    .catch((reason) => {
        console.log(Error(reason));
    })
    
}
function createPosts(url){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.open('POST',url);
        request.responseType='json';

        // when it returns something
        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            }
            else{
                reject(Error('HTTP ERROR '+ request.statusText + '. Try again'));
            }
        }

        // when that something is an error
        request.onerror =  function(){
            reject(Error('Network error'));
        }

        // you have to send it ... how can you know the result if you don't return it?
        request.send();
    });
}

function loadPosts(url){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.open('GET',url);
        request.responseType='json';

        // when it returns something
        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            }
            else{
                reject(Error('HTTP ERROR '+ request.statusText + '. Try again'));
            }
        }

        // when that something is an error
        request.onerror =  function(){
            reject(Error('Network error'));
        }

        // you have to send it ... how can you know the result if you don't return it?
        request.send();
    });
}

/* 
Post Structure

<div class=\"card mb-4\">
<img class=\"card-img-top\" src=\"http://placehold.it/750x300\" alt=\"Card image cap\">
<div class=\"card-body\">
  <h2 class=\"card-title\">Post Title</h2>
  <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
  <a href=\"#\" class=\"btn btn-primary\">Read More &rarr;</a>
</div>
<div class=\"card-footer text-muted\">
  Posted on January 1, 2017 by
  <a href=\"#\">Start Bootstrap</a>
</div>
</div> */

function postsApi(){
    var div = document.getElementById("postsRow");

    loadPosts('https://utn2019-avanzada2-tp6.herokuapp.com/api/posts')
        .then((response) =>{
            console.log(response);
            response.forEach(element => {
                
                let div = document.createElement('div');
                div.innerHTML =  "<div class=\"card mb-4\"\>\
                 <img class=\"card-img-top\" src=\"http://placehold.it/750x300\" alt=\"Card image cap\"\>\
                <div class=\"card-body\"\>\
                  <h2 class=\"card-title\"\>Post Title</h2\>\
                  <p class=\"card-text\"\>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p\>\
                  <a href=\"#\" class=\"btn btn-primary\"\>Read More &rarr;</a\>\
                </div\>\
                <div class=\"card-footer text-muted\"\>\
                  Posted on January 1, 2017 by\
                </div\>\
                </div\> "

                image.src = "http://placehold.it/750x300";
                
                let divPosts = document.getElementById('posts');
                divPosts.appendChild(div);
            });

        })
        .catch((reason) => {
            console.log(Error(reason));
        })
}

