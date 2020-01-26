const socketio = require ('socket.io');
const parseStringsAsArray = require('./utils/parseStringAsArray');
const calculateDistances = require('./utils/calculateDistances');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringsAsArray(techs),
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return calculateDistances(coordinates, connection.coordinates) < 10
            && connection.techs.some(item => techs.includes(item)) 
    })
}

exports.sendMessage = (to, message, data) => {
    to.foreEach(connection => {
        io.to(connection.id).emit(message, data);
    });
}