import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";


const DetailsContact = () => {
    return(
        <section className='DetailsContact'>
            <div className='DetailsContact-Container'>
                <h3>Contact Details</h3>
                <div>
                    <h4>Main Office</h4>
                    <table>
                        <tr>
                            <td>Mail:</td>
                            <td>archne@mail.com</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>1892 Chenoweth Drive TN</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>123-456-3451</td>
                        </tr>
                    </table>
                    <button>View on Map <AiOutlineArrowRight/></button>
                </div>
                <div>
                    <h4>Office II</h4>
                    <table>
                        <tr>
                            <td>Mail:</td>
                            <td>archtwo@mail.com</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>3399 Wines Lane TX</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>832-123-4321</td>
                        </tr>
                    </table>
                    <button>View on Map <AiOutlineArrowRight/></button>
                </div>
            </div>
        </section>
    )
}

export default DetailsContact