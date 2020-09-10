import React, { useRef, useEffect } from "react"

function ActionItem(props) {
    const { handleClick } = props
    const { action, id, completed } = props.item
    const actionRef = useRef(null)

    useEffect(() => {
        if (completed === true) {
            actionRef.current.classList.add("completed")
        } else if (completed === false) {
            actionRef.current.classList.remove("completed")
        }
    })
    
    return (
        <div className="action-item" ref={actionRef}>
            <input 
                type="checkbox"
                onChange={() => handleClick(id)}/>
            {action}
        </div>
    )
}

export default ActionItem