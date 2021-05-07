import axios from 'axios';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
const MembersPage = () => {
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
    return(
        <div>
            <p> user id : {details.id}</p>
            <p> user email: {details.email}</p>
        </div>
    )
}
export default MembersPage;