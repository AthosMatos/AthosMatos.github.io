import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AppSignInForm } from '../interfaces'
import { isEmail, isPhoneNumber, isStrongPassword } from '../utils/validation-utils'

const useSignIn = () => {
    const [form, setForm] = useState<AppSignInForm>({
        email: {
            value: '',
            error: undefined,
        },
        mobile: {
            value: '',
            error: undefined,
        },
        password: {
            value: '',
            error: undefined,
        },
    })

    const nav = useNavigate()

    function goToLogin() {
        nav('/login')
    }

    function resetErrors() {
        const newForm = { ...form }
        newForm.email.error = undefined
        newForm.mobile.error = undefined
        newForm.password.error = undefined
        setForm(newForm)
    }

    function register() {
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
        if (!isPhoneNumber(form.mobile.value)) {
            newForm.mobile.error = true
            toast.error('Please enter a valid phone number')
        }
        setForm(newForm)
        // if there are no errors, proceed with registration
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

    function updateMobile(value: string) {
        setForm({
            ...form,
            mobile: {
                ...form.mobile,
                value,
            },
        })
    }

    return {
        form,
        setForm,
        goToLogin,
        register,
        updateEmail,
        updatePassword,
        updateMobile,
    }
}

export default useSignIn
