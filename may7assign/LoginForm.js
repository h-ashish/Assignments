import axios from 'axios';
import {router, useHistory} from 'react-router-dom';
const LoginForm = ()=>{
    let history =  useHistory();
    const doLogin = (e) =>{
        e.preventDefault();
        let details = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios.post('/users/login', details)
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem('regtoken', res.data.token);
            history.push('/userprofile');
        })
    }
    return(
        <div>
            <form onSubmit={doLogin}>
                <input type="email" placeholder="enter email" name="email"/>
                <input type="password" placeholder="enter password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginForm;