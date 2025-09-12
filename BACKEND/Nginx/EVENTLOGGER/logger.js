const fs = require('fs');
const os = require('os');

const EventEmitter = require('events');
const { log } = require('console');

class Logger extends EventEmitter {
    log(message) {
        // Call event
        this.emit('messageLogged', { id: 1, message: message });
    }
}

const logger = new Logger();

const Logfile = './eventlog.txt';

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}${os.EOL}`;
    fs.appendFileSync(Logfile, logMessage);
}

logger.on('messageLogged', logToFile);

setInterval(() => {
   const memoryUsage = (os.freemem() / os.totalmem()) * 100;
   logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%`);
}, 300);

module.exports = logger;