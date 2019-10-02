// 4. Crear el objeto Item
// {
// "nombre": string,
// "precio": 0
// }

class Item{
    constructor(name,price){
        this._name=name;
        this._price=price;
    }


    get name(){
        return this._name;
    }

    set name(name){
        this._name=name;
    }

    get price(){
        return this._price;
    }

    set price(price){
        this._price=price;
    }

    toString(){
        return "Item => \n Name: "+this._name+
        "\n Price: "+this._price+"\n\n";
    }
    
}