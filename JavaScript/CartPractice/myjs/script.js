// import Product from "myjs/product.js";

var productsList = [];
var mycart = [];

/*
product's structure

<div class="card h-100">
<a href="#"><img class="card-img-top" src="images/product7.jpg" alt=""></a>
<div class="card-body">
    <h4 class="card-title">
    <a href="#">Item One</a>
    </h4>
    <h5>$24.99</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
</div>
<div class="card-footer">
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
</div>
</div>*/

function fillUpMyMerch(){
    productsList.push(new Product(1,'Pretty Dress','A very pretty dress',20.00,100,'images/product7.jpg'));
    productsList.push(new Product(2,'Bunny costume','Halloween is near',20.00,100,'images/product8.jpg'));
    productsList.push(new Product(3,'Pretty Chinese Dress','This is not cultural apropiation, back off.',20.00,100,'images/product9.jpg'));
    productsList.push(new Product(4,'Pretty Shirt','A pretty shirt for your casual jean',20.00,100,'images/product10.jpg'));
    productsList.push(new Product(5,'Casual Jean','A casual jean for your pretty shirt',20.00,100,'images/product11.jpg'));
    productsList.push(new Product(6,'Pretty Shirt','...Yeah,a man\'s shirt can be pretty too. Don\'t judge.',20.00,100,'images/product12.jpg'));

    productsList.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = String.prototype.
        concat('<div id='+ element.id+' class="card h-100"> <a href="#"> <img class="card-img-top" src='+element.image+' alt="">\
        </a> <div class="card-body">\
             <h4 class="card-title">\
             <a href="#">'+element.name+
             '</a>\
             </h4>\
             <h5>'+String.prototype.concat('$',element.price)+'</h5>\
             <p class="card-text">'+element.description+'</p>\
             <button type="button" onclick="addToCart('+element.id+')" class="btn btn-primary">Add to cart</a>\
        </div><div class="card-footer">\
         <p class="card-text">Stock: '+element.stock+'</p>\
         </div>\
         </div>');

        
        let divItems = document.getElementById('productList');
        divItems.appendChild(div);
        
    });
}



function addToCart(idAddedProduct){   
            
    productsList.forEach(product => {
        if(product.id == idAddedProduct){
        
        mycart.push(product);
        alert("Product added!");
        
        console.log(mycart);
        console.log(productsList);
        //addProductInCartList(product); 
        }

    });  

}
    


function restItemFromStock(idProduct){
    productsList.forEach(product => {
        if(product.id == idProduct){
           product.stock = product.stock - 1;
        }
    });  
}

function exists(products,idProduct){
    var exists=false;
    
    products.forEach(product => {
        if(product.id == idProduct){
            exists = true;
        }
    });

    return exists;
}

function addProductInCartList(addedProduct){
    var item = document.createElement("li");
    item.id="productCart" + addedProduct.id;

    var itemButton = document.createElement("button");
    itemButton.type = 'button';
    itemButton.id= addedProduct.id;
    itemButton.onclick= function(){
        var productBorrar= productAborrar(listaDeseados,addedProduct);
        if(productBorrar != null){
            listaDeseados.splice(listaDeseados.indexOf(addedProduct),1);
            alert("Product borrado!");
            quitarDeLista(productBorrar);
        }else{
            alert("Product no encontrado");
        }
        
    };

    item.innerHTML = "Product " + addedProduct;
    itemButton.innerHTML = "Eliminar product de lista de deseados";
    document.getElementById("listaProductsDeseados").appendChild(item);
    document.getElementById("listaProductsDeseados").appendChild(itemButton);
}

function quitarDeLista(product){
    var padre=document.getElementById("listaProductsDeseados");
    var item = document.getElementById("productDeseado" + product);
    var itemButton = document.getElementById("product"+ product + "button");

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

function productAborrar(products,productAeliminar){
    var aBorrar = null;
    
    products.forEach(product => {
        if(product === productAeliminar){
            aBorrar = product;
        }
    });
    return aBorrar;
}