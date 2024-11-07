class Instance{
    constructor({ ID, Name, Users }) {
        this.ID = ID;
        this.Name = Name;
        this.Users = Users;

        this.UserIdCounter = 0;
    }
    ID;
    Name;
    Users;
    GameObjects;

    UserIdCounter;
}

module.exports = Instance;