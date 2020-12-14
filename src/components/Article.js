import React from 'react'

const Article=({ques, ans, ShowP})=> {
    return (
        <>
         <article>
        <h2>{ques}</h2>
          <p>{ShowP}</p>
                    
         </article>
            
        </>
    )
}

export{
    Article
}