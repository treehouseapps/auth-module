
const LoginForm = require('./src/components/LoginForm').default;
const RegisterForm = require('./src/component/RegisterForm').default;

const { loginUser } = require('./src/lib/auth/login');
const { registerUser } = require('./src/lib/auth/register');

module.exports = {
    LoginForm,
    RegisterForm,
    loginUser,
    registerUser
};
