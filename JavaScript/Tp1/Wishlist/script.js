var listaDeseados = [];

function agregarDeseado(productoAagregar){
    if(exists(listaDeseados,productoAagregar) == false){
        listaDeseados.push(productoAagregar);
        alert("Producto agregado!");
        agregarAlista(productoAagregar);
    }else{
        alert("Producto ya agregado");
    }
    

}

function agregarAlista(productoAagregar){
      
    var item = document.createElement("li");
    item.id="productoDeseado" + productoAagregar;

    var itemButton = document.createElement("button");
    itemButton.type = 'button';
    itemButton.id="producto" + productoAagregar + "button";
    itemButton.onclick= function(){
        var productoBorrar= productoAborrar(listaDeseados,productoAagregar);
        if(productoBorrar != null){
            listaDeseados.splice(listaDeseados.indexOf(productoAagregar),1);
            alert("Producto borrado!");
            quitarDeLista(productoBorrar);
        }else{
            alert("Producto no encontrado");
        }
        
    };

    item.innerHTML = "Producto " + productoAagregar;
    itemButton.innerHTML = "Eliminar producto de lista de deseados";
    document.getElementById("listaProductosDeseados").appendChild(item);
    document.getElementById("listaProductosDeseados").appendChild(itemButton);
}

function exists(productos,productoAagregar){
    var exists = false;
    
    productos.forEach(producto => {
        if(producto === productoAagregar){
            exists = true;
        }
    });

    return exists;
}

function quitarDeLista(producto){
    var padre=document.getElementById("listaProductosDeseados");
    var item = document.getElementById("productoDeseado" + producto);
    var itemButton = document.getElementById("producto"+ producto + "button");

    if (padre.hasChildNodes()) {
        var children = padre.childNodes;

        for (var i = 0; i < children.length; i++) {
            //en la primera posicion del arreglo, esta almacenando un text.. por eso no me borra el boton/li
            console.log("Children:"+ children[i]);
          if(children[i] === itemButton|| children[i] === item){
            console.log("Item:"+ item);
            console.log("ItemButton:"+itemButton);

            padre.removeChild(children[i]);
          }
        }

    }
}

function productoAborrar(productos,productoAeliminar){
    var aBorrar = null;
    
    productos.forEach(producto => {
        if(producto === productoAeliminar){
            aBorrar = producto;
        }
    });
    return aBorrar;
}

/*
function quitarDeseado(producto){
    var productoBorrar= productoAborrar(listaDeseados,producto);
    console.log("hola");
    if(productoBorrar != null){
        listaDeseados.splice(listaDeseados.indexOf(producto - 1),1,producto);
        alert("Producto borrado!");
        quitarDeLista(productoBorrar);
    }else{
        alert("Producto no encontrado");
    }
    
}
*/

/*var producto = {id = 1, nombre = "producto"};
var producto2 = {id = 2, nombre = "producto2"}
var productos = [producto,producto2]
*/
