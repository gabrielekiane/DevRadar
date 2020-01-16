const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // campo de tech armazena uma ou mais strings
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
})

module.exports = mongoose.model('Dev', DevSchema);