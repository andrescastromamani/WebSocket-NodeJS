const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths = {

        }
        //Middleware
        this.midleware();
        //Routes
        this.routes();
        //Socket
        this.socket();
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
    //Socket
    socket() {
        this.io.on('connection', (socket) => {
            socket.on('disconnect', () => {
            });
            socket.on('emit-message', (payload) => {
                console.log('Message: ', payload);
                //Send Payload to Clients
                this.io.emit('emit-message', payload);
            });
        });
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;