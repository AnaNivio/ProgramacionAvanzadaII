function loadData(url) {
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';

        request.onload = function(){
            if(request.status == 200){
                setTimeout(() => {
                    resolve(request.response);
                }, 10000)  
            }
            else{
                reject(Error("error"));
            }
        }   

        request.onerror = function(){
            reject(Error("error"));
        }
        
        request.send();

    })
}

function apiTable(){

    loadData("http://campus.mdp.utn.edu.ar/pluginfile.php/25143/mod_resource/content/1/MOCK_DATA.json")
    .then((result) => {
        response.forEach(element => {
            var table = $('#dataTable').DataTable();

            table.row.add([
                element.id,
                element.first_name,
                element.last_name,
                element.email,
                element.dni

            ]).draw(false);
        });
    })
    .catch((reason) => {
        console.log(Error(reason));
    });
}