import consoleLogger from './logger/console';
import elasticSearchLogger from './logger/elastic-search';
import api from './api';
import firebase from "./firebase";
const env = 'production'; /* = process.NODE_ENV */

const services = {
    log: env === 'development' ? consoleLogger : elasticSearchLogger,
    api,
    firebase,
}

export default services;