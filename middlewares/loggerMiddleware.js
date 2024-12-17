const winston = require('winston');

// Create a logger instance using winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

// Middleware for logging requests
const logRequests = (req, res, next) => {
  logger.info(`${req.method} ${req.url}`); // Log the request
  next();
};

module.exports = logRequests;

