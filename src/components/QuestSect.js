import React,{useState} from 'react'
import {Answers} from './Answers'
const QuestSect=({id, ques, answer})=> {
    const[show, showFn]= useState(false)
    return (
        <>
        <section className='question' key={id}>
          <article>
              <h2 onClick={()=>{showFn(!show)}}>{ques}</h2>
              {show?<Answers answer={answer}/>:''}
          </article>
             <button onClick={()=>{showFn(!show)}}><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></button>
        </section>
            
        </>
    )
}

export{
QuestSect
}
