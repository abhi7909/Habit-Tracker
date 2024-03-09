// importing mongoose
const mongoose = require('mongoose');

// getting database url from env variables
const { MONGODB_URL} = process.env;

// connect to database
exports.connect = () => {
    // connecting
    mongoose.connect("mongodb+srv://abhishek7909:Shub123@cluster0.26ox9j1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        // if database connected
        console.log('Database is connected successfullly')
    )
    .catch((error) => {
        // if there is some error
        console.log('database connection is failed');
        console.log(error);
        process.exit(1);
    })
}