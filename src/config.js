global.SALT_KEY = '123456';

module.exports = {
    titleApplication: 'API',
    versionApplication: '1.0.0',
    port: '3003',
    conectionString: 'mongodb+srv://api_empresa:api_empresa@cluster0-zip8r.mongodb.net/test?retryWrites=true&w=majority',
    tokenExpiresIn: '1w',
    headersNameToken: 'x-access-token',
}