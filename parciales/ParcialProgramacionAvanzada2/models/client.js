class Client{
    constructor(id,account_id,first_name,last_name,email){
        this._id = id;
        this._account_id = account_id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._email = email;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    
    get account_id(){
        return this._account_id;
    }

    set account_id(account_id){
        this._account_id = account_id;
    }

    
    get first_name(){
        return this._first_name;
    }

    set first_name(first_name){
        this._first_name = first_name;
    }

    
    get last_name(){
        return this._last_name;
    }

    set last_name(last_name){
        this._last_name = last_name;
    }

    
    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

}