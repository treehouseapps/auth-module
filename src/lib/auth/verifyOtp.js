export async function verifyOtp(email, otp) {
    const res = await fetch('https://auth-backend-omega-six.vercel.app/verify-otp', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
    })
    const result = await res.json()
    if (result.success) {
        return { success: true, message: result.message, data: result.data }
    } else {
        return { success: false, message: result.message }
    }

}