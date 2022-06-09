import React from "react";
import axios from "axios";

class Database extends React.Component{
  render(){
    async function getData(){
      const userData = await axios({
        method: 'GET',
        url: 'http://localhost:3100/getDatabase'
      })
      console.log(userData);
    }
    return (
      <div>
        <button onClick={()=>{return getData();}}></button>
      </div>
    )
  }
}

export default Database;