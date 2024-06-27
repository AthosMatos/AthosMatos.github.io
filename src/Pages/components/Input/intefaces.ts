export interface InputProps {
    label: string
    placeholder: string
    value: string | undefined
    onChange: (value: string) => void
    type: 'email' | 'password' | 'number'
    error?: boolean
}
