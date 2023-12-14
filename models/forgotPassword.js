const Sequelize = require('sequelize');
const sequelize = require('../connections/database');




const forgotPassword = sequelize.define('forgotpassword', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    active: Sequelize.BOOLEAN,
})

module.exports = forgotPassword;
