require('dotenv').config();

module.exports = {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenExpiresIn: '1h',
    refreshTokenExpiresIn: '7d',
    cacheTemporaryTokenPrefix: 'tempToken:',
    cacheTemporaryTokenExpiresInSeconds: 300
};