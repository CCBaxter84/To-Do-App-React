import React, { useState } from "react";
import ActionItem from "./ActionItem";
import NewAction from "./NewAction";

function Actions() {
    // Handle state
    const [newAction, setNewAction] = useState("");
    const [actionItems, setActionItems] = useState([]);
    const [show, setShow] = useState(false);

    // Define a varible to be used for rendering all action items to screen
    const actions = actionItems.map(item => (
        <ActionItem
            key={item.id} item={item} actionItems={actionItems}
            setActionItems={setActionItems} handleClick={checkOff}
        />));

    // Helper functions
    // Update completed state of item objects in ActionItems
    function checkOff(id) {
       const updatedItems = actionItems.map(item => {
           if (id === item.id) {
                return {
                   ...item,
                   completed: !item.completed
               }
           }
           return item
       });
       setActionItems(updatedItems);
    }
    // Update name of newAction item in state as user types it into input box
    function handleChange(event) {
        const { value } = event.target;
        setNewAction(value);
    }
    // Update ActionItems with newly created newAction item
    function handleSubmit(event) {
        event.preventDefault();
        const nextId = actionItems.length + 1;
        const newItem = {
            id: nextId,
            action: newAction,
            completed: false
        }
        setActionItems(prev => {
            return [
                ...prev,
                newItem
            ]
        });
        setNewAction("");
        setShow(true);
    }

    // Render all action items to screen and input box for submitting a NewAction
    return (
        <main>
            <div className="actions-list">
                {show && actions}
            </div>
            <NewAction
                props={{ handleSubmit, newAction, handleChange }}
            />
        </main>
    );
}

export default Actions;