// 3. Crear el objeto Persona
// {
// "nombre": string,
// "apellido": string,
// "edad": 0
// }
class Person{
    constructor(name,lastName,age){
        this._name=name;
        this._lastName=lastName;
        this._age=age;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name=name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName=lastName;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age=age;
    }
}