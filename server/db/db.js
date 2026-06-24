const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require('mongoose')

module.exports = async () => {
 try {
    
 await mongoose.connect(process.env.DB);
 console.log("DB CONNECTED SUCCESSFULLY")
 } catch (error) {
 console.log(error)
 console.log("COULD NOT CONNECT TO DB")
 }
}