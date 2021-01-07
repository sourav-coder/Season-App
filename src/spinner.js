import React from "react"
import "./styles.css"



const Spinner=()=>{

return(
  <div class="ui segment" style={{width:"100%",height:"100%",position:"absolute",}}>
  <div class="ui active dimmer">
    <div class="ui massive text loader">Please allow the location Request</div>
  </div>
  <p></p>
  <p></p>
  <p></p>
</div>
)
}
export default Spinner;