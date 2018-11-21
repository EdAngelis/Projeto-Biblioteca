
export class User {

    constructor(_id="", cod=0, name="", email=""){
        this._id = _id;
        this.cod = cod;
        this.name = name;
        this.email = email;
    }
    _id: String;
    cod: Number;
    name: String;
    email: String;
}
