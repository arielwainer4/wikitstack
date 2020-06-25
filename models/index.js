const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allownull: false
    },
    slug: {
        type: Sequelize.STRING,
        allownull: false
    },
    content: {
        type: Sequelize.TEXT,
        allownull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
        // defaultValue: 'open'
    }

});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },
    email: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
           isEmail: true
        }
    }
})

module.exports = {
  db,
  User, 
  Page
}

