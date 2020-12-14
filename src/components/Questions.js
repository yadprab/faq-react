import React from 'react'
import {data} from '../data'
import {QuestSect} from './QuestSect'
const Questions=()=> {
  
    return (
        <>
         {data.map(dat=>{
          
          const {id, question, answer}=dat;

          return (

              <QuestSect id={id} ques={question} answer={answer}/>

               


          )



         })





         }
            
        </>
    )
}

export{
     Questions

}