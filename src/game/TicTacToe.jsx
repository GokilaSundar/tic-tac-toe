import { useState } from "react"
import "../game/tic.css"

const boxes=[0,1,2,3,4,5,6,7,8]
const TicTacToe = () => {
 const[values,setValue]= useState(boxes.fill(''))
 const [current,setCurrent]=useState("X")
    const ticFunc=(index)=>{
      const data=[...values]
        data[index]=current
        setValue(data)
        setCurrent(current==="X"?"O":"X")
    
    }

  return (
    <>
    <div><span>Current Palyer : </span>{current}</div>
    <div className='grid-box'>
      {values.map((value,index)=>(
          <div key={index} className="each-box" onClick={()=>ticFunc(index)}>{value}</div>
      ))}
          </div>
    </>
    
  )
}

export default TicTacToe