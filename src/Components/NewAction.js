import React, { useEffect, useRef } from "react"

function NewAction(props) {
    const inputRef = useRef(null)
    const { handleSubmit, newAction, handleChange } = props.props

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
       <form onSubmit={handleSubmit}>
                <input 
                    id="new-input"
                    type="text"
                    ref={inputRef}
                    value={newAction}
                    onChange={handleChange}
                    placeholder={newAction}
                    />
                <button type="submit">Submit</button>
        </form>
    )
}

export default NewAction