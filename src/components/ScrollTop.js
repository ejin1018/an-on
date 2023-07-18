import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop(){
  const {pathname} = useLocation();
  useEffect(()=>{
    document.documentElement.scrollTo(0,0);
    console.log(pathname)
  },[pathname])
  return null;
}