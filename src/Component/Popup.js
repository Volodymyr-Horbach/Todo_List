import React, { useState } from "react";



function Popup(){
    const [local, setLocal] = useState([])

    const showTask = () =>{
        let value = Object.values(localStorage);
        setLocal(value)

    }

return(
    <>
    <div onClick={showTask} className='local'>
        <p className='count'>{localStorage.length}</p>
    </div>
    <div className="popup">
        <div className="pupup_task">
            {local.map((value) =>{
                return(
                    <li key={45}>{value}</li>
            )  
            } 
            )}
        </div>
        <div onClick={()=>{(localStorage.clear())}}>
            Clear history
        </div>
    </div>
    </>
)
}


export default Popup;