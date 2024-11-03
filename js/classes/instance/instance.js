class Instance{
    constructor({ ID, Users }) {
        this.ID = ID;
        this.Users = Users;
    }
    ID;
    Users;
    GameObjects;
}

module.exports = Instance;