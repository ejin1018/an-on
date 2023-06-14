import {React,useRef,useState,useEffect} from "react";
import {Link} from "react-router-dom"

function Splash(){
  let spLogo = useRef();
  let [loginBlock,setLoginBlock] = useState(false);

  useEffect(()=>{
    spLogo.current.className = 'splash-logo splash-logo-on'
    console.log(spLogo.current.className)
    setTimeout(()=>{
      setLoginBlock(true)
    },2300)
  },[])

  return(
    <div className="splash-wrap">
      <div className="splash-container">
        <img ref={spLogo} className="splash-logo" src="/images/fullLogo.png" alt="AnOn Logo" />
        {loginBlock?
          <div className="login-box">
            <Link to={'/login'} className="login-btn login-email">이메일로 시작하기</Link>
            <Link to={'/home'} className="not-login">회원가입 없이 먼저 둘러보기</Link>
          </div>
        :
        ``
        }
      </div>
    </div>
    )
}

export default Splash;