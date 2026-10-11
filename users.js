const bcrypt = require('bcryptjs');
const db = require('./database');

const loginUser = async (loginData = {}) => {
    const { username, password } = loginData;
    if (!username || !password) return false;

    const user = await db.oneOrNone('SELECT password_hash FROM users WHERE username = $1', [username]);
    if (!user) return false;

    return bcrypt.compare(password, user.password_hash);
};

const registerUser = async (loginData = {}) => {
    const { username, password } = loginData;
    if (!username || !password) {
        return { authenticated: false, error: 'Username and password are required' };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const created = await db.oneOrNone(
        `INSERT INTO users (username, password_hash) VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING RETURNING user_id`,
        [username, passwordHash]
    );
    if (!created) {
        return { authenticated: false, error: 'Username is already taken' };
    }
    return { authenticated: true };
}


module.exports = {
    loginUser,
    registerUser
}
