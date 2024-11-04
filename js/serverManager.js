const Instance = require("./classes/instance/instance");
const User = require("./classes/user/user");

class ServerManager{
    instances = [];
    idCounter = 0;
    registerInstance(){
        var newInstance = new Instance({
            ID: this.idCounter++,
            Users: []
        });
        this.instances.push(newInstance);
        return newInstance.ID;
    }
    registerUser(instanceID, user){
        var instance = this.instances.find(i => i.ID == instanceID);
        if(instance == undefined){
            return -1;
        }
        var newUserId = instance.UserIdCounter++;
        var newUser = new User({
            ID: newUserId,
            UserName: user,
            Data: {}
        });
        instance.Users.push(newUser);
        return newUserId;
    }
}

module.exports = ServerManager;