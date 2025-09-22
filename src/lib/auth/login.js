export async function loginUser(email, password, { checkUserExists }) {
    // 1. Basic validation
    if (!email || !password) {
        return { success: false, error: 'Email and password are required' };
    }

    // 2. Call consumer-provided DB check
    const user = await checkUserExists(email, password);

    // 3. Return result
    if (!user) {
        return { success: false, error: 'Invalid credentials' };
    }

    return { success: true, message: 'Login successful', user };
}