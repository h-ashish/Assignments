import axios from 'axios';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom';
const UserProfile = () => {
    let history = useHistory();
    const [details, setDetails] = useState({});
    const decoded = jwt_decode(localStorage.getItem('regtoken'));
    console.log(decoded);

    useEffect(()=>{
        axios.get('/users/restrictedpage',{
            headers:{
                'token':localStorage.getItem('regtoken')   
            }
        })
        .then((res)=>{
            console.log(res.data)
            setDetails(decoded.user);
            
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const logout = () => {
        localStorage.removeItem('regtoken');
        history.push('/loginform');
    }
    return(
        <div>
            <p> user id : {details.id}</p>
            <p> user email: {details.email}</p>
            <button onClick={logout}>logout</button>
        </div>
    )
}
export default UserProfile;