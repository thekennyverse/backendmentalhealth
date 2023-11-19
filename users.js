const db = require('./database');

const loginUser = async (loginData) => {
    const { username, password } = loginData;
    const result = await db.any('SELECT * from users WHERE (username=$1 AND password_hash=$2)', [username, password]);
    console.log(result)
    console.log(result.length)
    return result.length === 1;
};

const registerUser = async (loginData) => {
    const { username, password } = loginData;
    await db.any(`INSERT INTO users ( username, password_hash) VALUES
    ($1, $2);`, [username, password]);
    return true;
}


module.exports = {
    loginUser,
    registerUser
}