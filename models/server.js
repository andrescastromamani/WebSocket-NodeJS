const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
           
        }

        //Middleware
        this.midleware();
        //Routes
        this.routes();
    }
    
    midleware() {
        //CORS
        this.app.use(cors());
        //Static files
        this.app.use(express.static('public'));
    }
    routes() {
        //this.app.use(this.paths.auth, require('../routes/auth'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;