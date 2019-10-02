// ● Estructura de comment:
// {
// "id": 1,
// "author": "test",
// "text": "test",
// "date": "2019-09-06T22:05:21.12669",
// "post_id": 1
// }


export default class Comment{
    constructor(id,author,text,date,post_id){
        this._id = id;
        this._author = author;
        this._text = text;
        this._date = date;
        this._post_id = post_id;
    }

    set id(id){
        this._id = id;
    }

    get id(){
        return this.id;
    }

    set author(author){
        this._author = author;
    }

    get author(){
        return this.author;
    }

    set text(text){
        this._text = text;
    }

    get text(){
        return this.text;
    }

    set date(date){
        this._date = date;
    }

    get date(){
        return this.date;
    }

    set post_id(post_id){
        this._post_id = post_id;
    }

    get post_id(){
        return this.post_id;
    }
    
}