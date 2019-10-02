

function greetOrSayBye(){
    var numero= 1;
   var mypromise= new Promise(function(resolve,reject){
    
    if(numero == 1 )
    {
        resolve("Hola");
    }
    else{
        reject("Chau!")
    }

   });
    

   mypromise
    .then((gretting) =>{
        console.log(gretting);
    })

    .catch((reason) =>{
        console.log(reason);
    })
        
}





function loadTable(url){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.open('GET',url);
        request.responseType='json';

        // when it return something
        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            }
            else{
                reject(Error('HTTP ERROR '+ request.statusText + '. Try again'));
            }
        }

        // when that something that return is an error
        request.onerror =  function(){
            reject(Error('Network error'));
        }

        // you have to send it ... how can you know the result if you don't return it?
        request.send();
    });
}

function apiTable(){
    loadTable("https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=0&to=50")
        .then((response) =>{

            response.forEach(element => {
                var table = $('#dataTable').DataTable();

                table.row.add([
                    element.id,
                    element.first_name,
                    element.last_name,
                    element.email,
                    element.gender,
                    element.last_connected_ip

                ]).draw(false);
            });
        })

        .catch((reason) => {
            console.log(Error(reason));
        })
}

    