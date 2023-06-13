import {React,useRef} from "react";
import {Link} from "react-router-dom"

function Splash(){
  let refLogo = useRef();
  return(
    <div className="splash-wrap">
      <div className="splash-container">
        <img ref={refLogo} className="splash-logo" src="/images/fullLogo.png" alt="AnOn Logo" />
        <div className="login-box">
          <Link to={'/login'} className="login-btn login-email">이메일로 시작하기</Link>
          <Link to={'/home'} className="not-login">회원가입 없이 먼저 둘러보기</Link>
        </div>
      </div>
    </div>
    )
}

export default Splash;