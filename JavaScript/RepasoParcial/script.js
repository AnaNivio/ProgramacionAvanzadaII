// Escriba un programa javascript que borre elementos duplicados de un Array
// Ejemplor:
 var array = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// -> [1, 2, 4, 5, 7, 8, 3, 6]

function eraseDuplicated(){
    console.log("antes de borrar: "+array);
    
    for (let index = 0; index < array.length; index++) {
        if(findElement(array,array[index]) > 1){
            array.splice(index,1);
        }
        
    }

    console.log("despues de borrar: "+array);

}

function findElement(recivedArray,recivedElement){
    var exists = 0;

    recivedArray.forEach(element => {
        if(element == recivedElement){
            exists = exists + 1;
        }
    });

    return exists;
}


// 2. Escriba un programa javascript que dado un array de años verifique si es bisiesto o no.
// Un año es bisiesto cuando
// a. Es divisible por 4
// b. Excepto si es divisible entre 100, entonces no es bisiesto a menos que sea
// también ser divisible por 400
// Ejemplo:
// [1992,2000,1900]
// 1992 Bisiesto
// 2000 Bisiesto
// 1900 NO Bisiesto

var anios= [1992,2000,1900];
function leapYearCheck(){
    
    anios.forEach(element => {
        if(element % 4 == 0 && element % 100 != 0){
            console.log(element+ " Bisiesto");
        }
        else if(element % 400 == 0){
            console.log(element+ " Bisiesto");
        }else{
            console.log(element+ " NO Bisiesto");
        }
    });


}


// 3. Crear el objeto Persona
// {
// "nombre": string,
// "apellido": string,
// "edad": 0
// }
// Deberá crear un array de personas y ordenarlo usando la función sort() teniendo en
// cuenta la edad de la persona, de menor a mayor.

var persons = [];

function sortPersonsByAge(){
    persons.push(new Person("Julian","Gueish",45));
    persons.push(new Person("Keila","Kanoneish",24));
    persons.push(new Person("Lucia","Jilguiero",34));
    persons.push(new Person("Lucia","Jilguiero",10));
    persons.push(new Person("Lucia","Jilguiero",32));

    persons.sort(function (a,b){
        return (b.age < a.age) ? 1 : -1;
    });

    console.log(persons);
}
 

// 4. Crear el objeto Item
// {
// "nombre": string,
// "precio": 0
// }
// Deberá crear también un objeto carrito que contendrá un array de items. Implementar un
// método que devuelva el precio total. Implementar los metodos toString() de los objetos y
// loguearlos por consola.

function fillCart(){
    var cart= new Cart();
    var item1= new Item("Item 1",20.00);
    var item2= new Item("Item 2",20.00);
    var item3= new Item("Item 3",20.00);

    cart.addItem(item1);
    cart.addItem(item2);
    cart.addItem(item3);

    console.log("Cart after fill up: ");
    console.log(cart.toString());

    console.log("Total Cart: "+ cart.totalCart());

}

/*5. Escriba un programa javascript que dado el siguiente HTML capture el valor de cada
input y valide que no esté vacío.
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>form</title>
</head><body>
<form id="form" onsubmit="getFormvalue()">
First name: <input type="text" name="fname"><br>
Last name: <input type="text" name="lname"><br>
<input type="submit" value="Submit">
</form>
</body>
</html> 

*/ 

function getFormvalue(){
    var names = document.getElementsByName("fname");
    var lastNames = document.getElementsByName("lname");
    var rta= document.getElementById("rta");
    var errores = [];

    console.log(names[0]);
    console.log(lastNames[0]);
    //remember! To access to data, we have to put .value!!!!

    if(names[0].value == ""){//we are treating strings, it's better to compare to "" than null
        errores.push("Name missing");
    }

    if(lastNames[0].value == ""){
        errores.push("Lastname missing");
    }

    if(errores.length > 0){
        var mensaje = '';
        for(i=0; i<errores.length; i++){
            mensaje += errores[i]+"<br>";
        }
        rta.innerHTML = mensaje;
        event.preventDefault();
        return false;
    }else{
        rta.innerHTML = "All done!";
    }
}


/*6. Escriba un programa javascript que dado una cantidad de filas y columnas genere una
tabla HTML. Deberá generar los inputs HTML necesarios.*/

function createTable(){

    var rows=[];
    rows.push(new Person("Julian","Gueish",45));
    rows.push(new Person("Keila","Kanoneish",24));
    rows.push(new Person("Lucia","Jilguiero",34));
    rows.push(new Person("Lucia","Jilguiero",10));
    rows.push(new Person("Lucia","Jilguiero",32));

    var divTable =document.getElementById("tableHere");
    var table= document.createElement('table');
    var tableHeader= document.createElement('thead');
    var tableBody= document.createElement('tbody');

    var col1=document.createElement('th');
    var col2=document.createElement('th');
    col1.innerHTML = "Name";
    col2.innerHTML = "Last Name"

    tableHeader.appendChild(col1);
    tableHeader.appendChild(col2);
    table.appendChild(tableHeader);

    rows.forEach(element => {
        var tr=document.createElement('tr');
        var nameTd=document.createElement('td');
        var lastNameTd=document.createElement('td');

        nameTd.innerHTML = element.name;
        lastNameTd.innerHTML= element.lastName;
        tr.appendChild(nameTd);
        tr.appendChild(lastNameTd);
        
        tableBody.appendChild(tr)
    });

    table.appendChild(tableBody);
    table.setAttribute("border", "2");

    divTable.appendChild(table);

}

/*7. Escriba un programa javascript que dado un Array de palabras ponga la primera letra de
cada una en mayúscula y luego las ordene alfabéticamente. Para ello deberá realizar
dos promesas encadenadas, cada operación será una función que retorna una promesa.
Si alguno de los elementos del array no es un string, la promesa deberá devolver error. */

//question: do we have to consider that the promieses will recive an array of string or just one?
//I think that i have to send all the array (being the promieses dependents of one and another)

var strings=["hello","world","computer"];

function arrayReady(){
    promiseUpperCase(strings)
    .then((response) =>{
        console.log(response);
    })

    .catch((reason) => {
        console.log(Error(reason));
    })
}

function promiseUpperCase(arrayStrings){
    var error = false;
    return new Promise((resolve, reject) => {
        arrayStrings.forEach(element => {
             if(typeof element != "string"){
                 error = true;
             }
         });

        if(error){
            reject(Error("There's an element in the array that isn't String"));
        }else{
            
            //for is used for modifications into the array (or at least, that's what works to me)
            //for each is to work with the element but not to modified them

            for (let index = 0; index < arrayStrings.length; index++) {
                arrayStrings[index]=capitalizeFirstLetter(arrayStrings[index]);   
            }

            resolve(promiseSortedList(arrayStrings));
        }
    });
}

function promiseSortedList(messyArray){
    return new Promise((resolve, reject) => {
        resolve(messyArray.sort());
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function integerOrArray(){
    var n=1;
    var s="hola";
    var person=new Person("Julian","Gueish",45);
    var hoi=["hello","World","computer",1];


    hoi.forEach(element => {
        if(typeof element == "string"){
            element=capitalizeFirstLetter(element);
            console.log(element);

        }
        else{
            console.log("false");

        }        
    });


}


