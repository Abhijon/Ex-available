const connectRedis = require("connect-redis");
console.log("Type of export:", typeof connectRedis);
console.log("Keys:", Object.keys(connectRedis));
console.log("Default export:", connectRedis.default);
