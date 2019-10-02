// Estructura de post:
// {
// "id": 1,
// "title": "test",
// "body": "test",
// "date": "2019-09-06T22:05:13.991156"
// }

export default class Post{
    constructor(id,title,body,date){
        this._id = id;
        this._title = title;
        this._body = body;
        this._date = date;
    }

    set id(id){
        this._id = id;
    }

    get id(){
        return this.id;
    }

    set title(title){
        this._title = title;
    }

    get title(){
        return this.title;
    }

    set body(body){
        this._body = body;
    }

    get body(){
        return this.body;
    }

    set date(date){
        this._date = date;
    }

    get date(){
        return this.date;
    }
}
