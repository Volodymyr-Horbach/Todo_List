import React, { useState } from "react";



function Popup({addTask}){
 

    const [local, setLocal] = useState([])

    let svg = document.querySelector('.popup')
    let popupBg = document.querySelector('.popupBg')

    const showTask = () =>{
        let value = Object.values(localStorage);
        setLocal(value)
        svg.classList.toggle('active');
        popupBg.classList.toggle('active');

    }

        document.addEventListener('click', (e)=>{
          if(e.target === popupBg){
            svg.classList.remove('active')
            popupBg.classList.remove('active')
          };
        //   console.log(e.target)
        })

return(
    <>
    <div onClick={showTask} className='local'>
    {/* {count} */}
        <p className='count'>
            {localStorage.length}
        </p>
    </div>
    <div className="popupBg">

    <div className="popup">
        <div className="popup_task">
            {local.map((value) =>{
                return(
                    <ul key={addTask.id}>{value}</ul>
            )  
            } 
            )}
        </div>
        <div className="clear" onClick={()=>{
            (localStorage.clear())
            setLocal([])
            alert('Are you sure you want to delete tasks?')
        }}>
            Сlear history
        </div>
    </div>

    </div>

    </>
)
}


export default Popup;