const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./models');

class App {
    constructor() {
        this.app = express();
        this.dbConnection();
        this.setMiddleware();
        this.getRouting();
    }

    dbConnection() {
        db.sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
                return db.sequelize.sync();
            })
            .then(() => {
                console.log('DB Sync complete.');
            })
            .catch((err) => {
                console.error('Unable to connect to the database:', err);
            });
    }

    setMiddleware() {
        this.app.use(logger('combined'));
        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    getRouting() {
        this.app.use(require('./controllers'));
    }
}

module.exports = new App().app;
