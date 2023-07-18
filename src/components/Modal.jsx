import React from "react";
import { Link } from "react-router-dom";

export default function Modal(props){
  return(
    <div className='modal'>
      <div className="modal-inner">
        <img src="/icons/botnav-home-fill.png" alt="" />
        <p className="modal-msg">{props.msg}</p>
        <Link to={props.modalWhere}>{props.modalBtn}</Link>
      </div>
    </div>  
  )
}