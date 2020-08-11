let crypto = require('crypto');

const strGen = () => {
    return crypto.randomBytes(10).toString('hex');
}
export default strGen