class dbConnection {

    constructor(url) {
        this._init(url);
    }

    _init(url) {
        if (url == "cloud") {
            this.connectionType = url;
            url = "mongodb+srv://adminadmin:adminadmin@cluster0-q49zy.mongodb.net/test";
            this.Track = require('./models/cloudTrack');
        } else if (url == "local") {
            this.connectionType = url;
            url = "mongodb://localhost:27017/music";
            this.Track = require('./models/track');
        }
        const mongoose = require('mongoose');
        const connection = mongoose.connect(url, {useNewUrlParser: true})
            .then(() => {
                console.log("dbConnection DB connected.");
                console.log("connection type: " + this.connectionType);
            }).catch((err) => {
                console.log("Error connecting to dbConnection: " + err);
        });
    }
}


module.exports =  dbConnection;