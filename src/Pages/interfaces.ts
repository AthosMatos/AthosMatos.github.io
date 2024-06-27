export interface AppSignInForm {
    email: {
        value: string
        error?: boolean
    }
    mobile: {
        value: string
        error?: boolean
    }
    password: {
        value: string
        error?: boolean
    }
}

export interface AppLoginForm {
    email: {
        value: string
        error?: boolean
    }
    password: {
        value: string
        error?: boolean
    }
}
