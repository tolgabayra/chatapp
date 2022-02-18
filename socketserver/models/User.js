const Sequelize = require("sequelize")

const db = require("../config/database")

const User = db.define("User",{
    Username:{
        type: Sequelize.STRING
    }
})

module.exports = User