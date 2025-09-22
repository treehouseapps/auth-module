export function registerUser(name, email, password) {

    if (!name || !email || !password) {
        return { success: false, error: 'Name, email, and password are required' };
    }


    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        return { success: false, error: 'Invalid email format' };
    }


    if (password.length < 4) {
        return { success: false, error: 'Password must be at least 4 characters' };
    }


    return { success: true, data: { name, email, password } };
}
