import React from 'react'
import {Questions} from './Questions'

const Answer=()=> {
    
    return (
        <>
        <section className='answer--section'>
        <section className='box'>
         <img src="/images/illustration-box-desktop.svg" alt="box illustration" id='box'/>
        </section>
           <h1>faq</h1>
           <Questions/>
           
        </section>
            
        </>
    )
}


export{
    Answer
}