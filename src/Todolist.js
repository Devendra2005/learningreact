import React from 'react'
import { useState } from 'react'
import  './Todolist.css';

function Todolist() {

    const [activity , setActivity] = useState("");
    const [listData,setlistData] = useState([]);

    function addActivity(){
        setlistData((listData) => {
            const updatedList = [...listData,activity]
            console.log(updatedList)
            setActivity(''); 
            return updatedList
        })
    }
    function removeActivity(i){
        const updatedList = listData.filter((elem,id)=>{
            return i!=id;

        })
        setlistData(updatedList)
    }

  return (
    <>
    <div className='container'>
        <div className='header' >TODO LIST</div>
        <input className='input-box' type='text' placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
        <button onClick={addActivity} className='submit-btn'>Add</button>
        <br></br>
        <hr></hr>

        {
            listData != [] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className='list-data'>{data}</div>
                        <div className='btn-position'><button className="delete-btn" onClick={() => removeActivity(i)}>remove(-)</button></div>
                    </p>                        
                    </>
                )
            } )
        }
    </div>
    
    </>
  )

}

export default Todolist
