export async function registerUser(name, email, password) {

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

    const res = await fetch("http://localhost:4000/send-otp", {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    })

    const data = await res.json();

    return { success: true, data };
}
