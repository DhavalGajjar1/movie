const mongoose = require('mongoose');

module.exports.db = async () => {
    try {
        await mongoose.connect('mongodb+srv://dhaval10gajjar:1234@cluster0.vdzya.mongodb.net/');
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

