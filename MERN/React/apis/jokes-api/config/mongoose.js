const mongoose = require("mongoose");

module.exports = db_name => {
    mongoose.connect(`mongodb://localhost/${db_name}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( () => console.log(`successfully connected to ${db_name}`))
        .catch(err => console.log("something went wrong", err));
}