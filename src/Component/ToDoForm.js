import {useState} from 'react'


function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
        // localStorage.removeItem( Math.random().toString(36) , userInput)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Enter task..."
            />
            <button>Add</button>
        </form>
    ) 
}

export default ToDoForm;