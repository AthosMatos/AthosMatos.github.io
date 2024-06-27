export function isStrongPassword(password: string): boolean {
    const minLength = 8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (password.length < minLength) {
        return false
    }
    if (!hasUpperCase) {
        return false
    }
    if (!hasLowerCase) {
        return false
    }
    if (!hasNumber) {
        return false
    }
    if (!hasSpecialChar) {
        return false
    }

    return true
}

export function isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function isPhoneNumber(text: string): boolean {
    // Expressão regular para validar diferentes formatos de números de telefone
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10,15}$/

    return phoneRegex.test(text)
}
