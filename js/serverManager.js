class ServerManager{
    instances;
    registerInstance(){
        console.log("Registered an instance");
        return 1;
    }
}

module.exports = ServerManager;