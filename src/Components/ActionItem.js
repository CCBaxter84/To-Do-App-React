import React, { useRef, useEffect } from "react";

function ActionItem(props) {
    // Import functions for updating state from props
    const { handleClick } = props;
    const { action, id, completed } = props.item;
    // Utilize useRef hook
    const actionRef = useRef(null);

    // When a component updates, modify .completed css class to add or remove a linethrough effect
    useEffect(() => {
        if (completed === true) {
            actionRef.current.classList.add("completed");
        } else if (completed === false) {
            actionRef.current.classList.remove("completed");
        }
    });

    // Render the action item with a checkbox to its left
    return (
        <div className="action-item" ref={actionRef}>
            <input
                type="checkbox"
                onChange={() => handleClick(id)}/>
            {action}
        </div>
    );
}

export default ActionItem;