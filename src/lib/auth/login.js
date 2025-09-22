export function loginUser(email, password) {
    const e = (email || '').trim();
    const p = (password || '').trim();

    if (!e || !p) return { success: false, error: 'Email and password are required' };


    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        return { success: false, error: 'Invalid email format' };
    }

    return { success: true, data: { email, password } };
}
