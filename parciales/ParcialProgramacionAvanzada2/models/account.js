class Account{
    constructor(id,balance,last_operation_date) {
        this._id = id;
        this._balance = balance;
        this._last_operation_date = last_operation_date; //api generates it's valor automatically
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get balance(){
        return this._balance;
    }

    set balance(balance){
        this._balance = balance;
    }

    get last_operation_date(){
        return this._last_operation_date;
    }

    set last_operation_date(last_operation_date){
        this._last_operation_date = last_operation_date;
    }
}