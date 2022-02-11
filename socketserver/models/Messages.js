const Sequelize = require("sequelize")

const db = require("../config/database")

const Message = db.define("message",{
    messagebody: {
        type: Sequelize.STRING
    }
})

module.exports = Message