import {React,useState,useEffect} from "react";
import {Link} from "react-router-dom"

function Splash(){
  let [logoBlock,setLogoBlock] = useState(false);

  useEffect(()=>{
    setLogoBlock(true)
  },[])
  
  return(
    <div className="splash-wrap">
      <div className="splash-container">
        <img className={logoBlock?'splash-logo splash-logo-on':'splash-logo'} src="/images/fullLogo.png" alt="AnOn Logo" />
          <div className={logoBlock?'login-box login-box-on':'login-box'}>
            <Link to={'/login'} className="login-btn login-email">이메일로 시작하기</Link>
            <Link to={'/home'} className="not-login">회원가입 없이 먼저 둘러보기</Link>
          </div>
      </div>
    </div>
  )
}

export default Splash;