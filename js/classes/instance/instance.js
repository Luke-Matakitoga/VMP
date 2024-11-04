class Instance{
    constructor({ ID, Users }) {
        this.ID = ID;
        this.Users = Users;

        this.UserIdCounter = 0;
    }
    ID;
    Users;
    GameObjects;

    UserIdCounter;
}

module.exports = Instance;