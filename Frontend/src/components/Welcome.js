import React from 'react'
import { Link } from "react-router-dom";

const Welcome = () => {
  return (


    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <h1>Layanan UPT TIK </h1>
        <h6>UNIVERSITAS SRIWIJAYA</h6>

    
        
      <Link to={`add`} className="button is-success">
        Kirim Topic Permasalahan
      </Link>
      </div>
      <Link to={`login`} className="button is-success">
        Login 
      </Link>
      </div>

      
  )
}

export default Welcome