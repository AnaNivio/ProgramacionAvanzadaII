// Que tienen la siguiente estructura:
// {
// "id": 0,
// "first_name": string,
// "last_name": string,
// "email": string,
// "dni": 0
// }

class Client{
    constructor(id,first_name,last_name,email,dni){
        this._id = id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._email = email;
        this._dni = dni;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id=id;
    }
    
    get first_name(){
        return this._first_name;
    }

    set first_name(first_name){
        this._first_name=first_name;
    }
    
    get last_name(){
        return this._last_name;
    }

    set last_name(last_name){
        this._last_name=last_name;
    }
    
    get email(){
        return this._email;
    }

    set email(email){
        this._email=email;
    }

    get dni(){
        return this._dni;
    }

    set dni(dni){
        this._dni=dni;
    }
    
}