const mongoose = require('mongoose');

//define schema for a file
const fileSchema = new mongoose.Schema({
    fileName: {
        type: String
    },
    filePath: {
        type: String
    },
    file: {
        type: String
    }
}, {
    timestamps: true
});

//create a model using the schema 
const Files = mongoose.model('File', fileSchema);

module.exports = Files;