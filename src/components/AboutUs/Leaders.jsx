import React from "react"
import { LeadersApi } from "../../Api/LeadersApi"
import LeaderUsers from "./LeaderUsers"

const Leaders = () =>{
  return(
    <section className='Leaders-Container'>
      <article>
        <h2>The Leaders</h2>
        <div className='Leaders-Elements'>
          {LeadersApi.map(item => (
            <LeaderUsers data={item}/>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Leaders