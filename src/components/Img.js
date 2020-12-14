import React from 'react'

const Img=()=> {
    return (
        <>
        <section className='img--section'>
        <picture>
           <source media="(min-width:1100px )" srcset="/images/illustration-woman-online-desktop.svg"></source>
        <img src="/images/illustration-woman-online-mobile.svg" alt="illustration woman" className='illustration'/>
        </picture>

        </section>
            
        </>
    )
}

export{
    Img

}
