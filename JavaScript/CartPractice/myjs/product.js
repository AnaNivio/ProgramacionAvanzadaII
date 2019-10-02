class Product{    
    constructor(id, name, description, price, stock, image){
        
        this._id = id;
        this._name = name;
        this._description = description;
        this._price = price;
        this._stock = stock;
        this._image = image;

    }

    getId(){
        return this._id;

    }
    set id(id){
        this._id=id;
    }
    
    get id(){
        return this._id;
    }

    set name(name){
        this._name=name;
    }
    
    get name(){
        return this._name;
    }

    
    set description(description){
        this._description=description;
    }
    
    get description(){
        return this._description;
    }

    
    set price(price){
        this._price=price;
    }

    get price(){
        return this._price;
    }
    
    get stock(){
        return this._stock;
    }

    
    set stock(stock){
        this._stock=stock;
    }

    get image(){
        return this._image;
    }

    
    set image(image){
        this._image = image;
    }
    

}