const Instance = require("./classes/instance/instance");

class ServerManager{
    instances = [];
    idCounter = 0;
    registerInstance(){
        var newInstance = new Instance({
            ID: this.idCounter++,
            Users: []
        })
        this.instances.push(newInstance);
        return newInstance.ID;
    }
}

module.exports = ServerManager;