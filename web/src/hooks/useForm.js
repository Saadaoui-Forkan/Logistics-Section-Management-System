import { useState } from "react"

const useForm = (initialState, numberFields = []) => {
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: numberFields.includes(name) ? Number(value) || "" : value,
        }))
    }

    return { formData, setFormData, handleChange }
}

export default useForm;