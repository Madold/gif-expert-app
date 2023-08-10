import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [categoryName, setCategoryName] = useState("")

    const onValueChange = ({ target }) => setCategoryName(target.value)

    const handleOnSubmit = e => {
        e.preventDefault()
        if (categoryName.trim() !== "") {
            onNewCategory(categoryName)
            resetValue()
        }
    }

    const resetValue = () => setCategoryName("")

    return (
        <form onSubmit={handleOnSubmit} aria-label="form" >
            <input
                type="text"
                placeholder="Buscar gif"
                value={categoryName}
                onChange={onValueChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
} 