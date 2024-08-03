const mongoose = require("mongoose");

//connection

const dbUser = process.env.DB_User;
const dbPass = process.env.DB_Password;

const conn = async () =>{

    try {
        
        const dbConnection = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPass}@managercluster.nbvyhmr.mongodb.net/?retryWrites=true&w=majority&appName=managercluster`
        )

        console.log("Connect on the database")

        return dbConnection

    } catch (error) {
        
        console.log(error.message)
    }

}

conn();

module.exports = conn;