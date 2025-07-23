import style from './index.module.less'
import logo from '../../assets/logo.png'
export default function Login() {
  return (
    <div className={style.login}>
        <h1 className={style.title}>登录</h1>
        <div className={style['login-wrapper']}>
            <div className="avater">
                <img width={100} src={logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}
