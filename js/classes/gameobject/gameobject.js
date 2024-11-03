class Gameobject{
    constructor({ID, Name, Active, Components}){
        this.ID = ID;
        this.Name = Name;
        this.Active = Active;
        this.Components = Components;
    }
    ID;
    Name;
    Active;
    Components;
}

module.exports = Gameobject