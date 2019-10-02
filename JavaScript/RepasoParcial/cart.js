// Deberá crear también un objeto carrito que contendrá un array de items. Implementar un
// método que devuelva el precio total. Implementar los metodos toString() de los objetos y
// loguearlos por consola.

class Cart{
    constructor(){
        this._arrayItems=[];
    }

    get arrayItems(){
        return this._arrayItems;
    }

    set arrayItems(arrayItems){
        this._arrayItems=arrayItems;
    }

    addItem(item) {
        if(item instanceof Item){
            this._arrayItems.push(item);
        }
    }

    totalCart(){
        var total = 0;
        this._arrayItems.forEach(element => {
            total += element.price;
        });

        return total;
    }

    toString(){
        return "Cart => \n ArrayItems: "+ this._arrayItems;
    }
}