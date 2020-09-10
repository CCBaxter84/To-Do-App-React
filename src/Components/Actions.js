import React, { useState } from "react"
import ActionItem from "./ActionItem"
import NewAction from "./NewAction"

function Actions() {
    const [newAction, setNewAction] = useState("")
    const [actionItems, setActionItems] = useState([])
    const [show, setShow] = useState(false)
    const actions = actionItems.map(item => (
        <ActionItem 
            key={item.id} item={item} actionItems={actionItems} 
            setActionItems={setActionItems} handleClick={checkOff}
        />))

    function checkOff(id) {
       const updatedItems = actionItems.map(item => {
           if (id === item.id) {
                return {
                   ...item,
                   completed: !item.completed
               }
           }
           return item
       })
       setActionItems(updatedItems)
    }

    function handleChange(event) {
        const {value} = event.target
        setNewAction(value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        const nextId = actionItems.length + 1
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
        })
        setNewAction("")
        setShow(true)
    }

    return (
        <main>
            <div className="actions-list">
                {show && actions}    
            </div>
            <NewAction 
                props={{handleSubmit, newAction, handleChange}}
            />
        </main>
    )
}

export default Actions