export async function loginUser(email, password) {

    if (!email || !password) {
        return { success: false, error: 'Email and password are required' };
    }
    return { success: true, message: 'Login successful' };

    // try {
    //     const response = await fetch(apiUrl, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ username: email, password })
    //     });

    //     const data = await response.json().catch(() => ({}));

    //     if (!response.ok) {
    //         return { success: false, error: data?.message || 'Login failed' };
    //     }

    //     return {
    //         success: true,
    //         token: data?.token,
    //         user: data?.user || null
    //     };
    // } catch (error) {
    //     return { success: false, error: error?.message || 'Network error' };
    // }
}

export default loginUser;