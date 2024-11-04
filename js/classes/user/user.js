class User{
    constructor({ID, UserName, Data}){
        this.ID = ID;
        this.UserName = UserName;
        this.Data = Data;
    }
    ID;
    UserName;
    Data;
}

module.exports = User