export async function verifyOtp(email, otp) {
    const res = await fetch('http://localhost:4000/verify-otp', {
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