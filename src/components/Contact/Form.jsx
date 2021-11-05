import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Form = () => {
    return(
        <section className='Form'>
            <div>
                <h2>Connect whit us</h2>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button><AiOutlineArrowRight/></button>
                </form>
            </div>
        </section>
    )
}

export default Form