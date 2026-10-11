const bcrypt = require('bcryptjs');
const db = require('./database');

const MIN_PASSWORD_LENGTH = 6;

const loginUser = async (loginData = {}) => {
    const username = (loginData.username || '').trim();
    const { password } = loginData;
    if (!username || !password) return false;

    await db.ensureSchema();
    const user = await db.oneOrNone('SELECT password_hash FROM users WHERE username = $1', [username]);
    if (!user) return false;

    return bcrypt.compare(password, user.password_hash);
};

const registerUser = async (loginData = {}) => {
    const username = (loginData.username || '').trim();
    const { password } = loginData;
    if (!username || !password) {
        return { authenticated: false, error: 'Please enter a username and password.' };
    }
    if (username.length > 50) {
        return { authenticated: false, error: 'Usernames can be at most 50 characters.' };
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
        return { authenticated: false, error: `Your password needs at least ${MIN_PASSWORD_LENGTH} characters.` };
    }

    await db.ensureSchema();
    const passwordHash = await bcrypt.hash(password, 10);
    const created = await db.oneOrNone(
        `INSERT INTO users (username, password_hash) VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING RETURNING user_id`,
        [username, passwordHash]
    );
    if (!created) {
        return { authenticated: false, error: 'That username is already taken. Try a different one.' };
    }
    return { authenticated: true };
}


module.exports = {
    loginUser,
    registerUser
}
