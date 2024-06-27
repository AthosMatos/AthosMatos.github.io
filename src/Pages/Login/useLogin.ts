import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AppLoginForm } from '../interfaces'
import { isEmail, isStrongPassword } from '../utils/validation-utils'

const useLogin = () => {
    const [form, setForm] = useState<AppLoginForm>({
        email: {
            value: '',
            error: undefined,
        },
        password: {
            value: '',
            error: undefined,
        },
    })

    const nav = useNavigate()

    function goToSignUp() {
        nav('/register')
    }

    function resetErrors() {
        const newForm = { ...form }
        newForm.email.error = undefined
        newForm.password.error = undefined
        setForm(newForm)
    }

    function log() {
        if (!form) return
        resetErrors()
        const newForm = { ...form }

        if (!isStrongPassword(form.password.value)) {
            newForm.password.error = true
            toast.error('Password must contain at least 8 characters, 1 number, 1 uppercase and 1 lowercase character')
        }
        if (!isEmail(form.email.value)) {
            newForm.email.error = true
            toast.error('Please enter a valid email address')
        }

        setForm(newForm)
        // if there are no errors, proceed with login
    }

    function updateEmail(value: string) {
        setForm({
            ...form,
            email: {
                ...form.email,
                value,
            },
        })
    }

    function updatePassword(value: string) {
        setForm({
            ...form,
            password: {
                ...form.password,
                value,
            },
        })
    }

    return {
        form,
        setForm,
        goToSignUp,
        log,
        updateEmail,
        updatePassword,
    }
}

export default useLogin
