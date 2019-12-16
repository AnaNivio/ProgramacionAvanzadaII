//returns 409 in case of error
//reject(Error("Sorry! It apperes that the email you put into it\'s alredy taken. Try with another one"));
var clientsId=[];

function createPromise(url){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.open('POST',url);
        request.responseType='json';

        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            }
            else{
                reject(Error('HTTP ERROR '+ request.statusText + '. Try again'));
            }
        }

        request.onerror =  function(){
            reject(Error('Network error'));
        }

        request.send();
    });
}

function postClient() {
    createPromise("https://avanzada2-parcial1.herokuapp.com/api/clients?first_name=<value|required>&last_name=<value|required>&email=<value|required>")
    .then((response)=>{
        console.log(response);
        //clientsId.push(response);
    })
    .catch((reason) => {
        console.log(Error(reason));
    })
}