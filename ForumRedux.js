import { useStore,useSelector,useDispatch } from "react-redux"
import { useState } from "react"

export default function ForumRedux() {

    const dispatch = useDispatch(); 
    const showForum= useSelector(state=>state.forum)
    const [userForum,setuserForum] = useState([])

    dispatch({type:"forum/add",forum:userForum})

    const addForum = (e) => {
        e.preventDefault()
        let time = new Date()
        let date = new Date().toLocaleDateString()

        let array=userForum.concat({forumList:e.target.area.value,
                                    user:e.target.user.value,
                                    date:date,
                                    time:time.toLocaleTimeString(),
                                    mil:time.getTime()})
        setuserForum(array);
        localStorage.setItem("info",JSON.stringify(array))
    }

    const deleteOne = (indexToDelete) => {
        let newArr = userForum.filter((val,index) => {
            if (index == indexToDelete) {
                return false
            }
            return true
        })
        // console.log(newArr)
        let message = window.confirm("Are you want to delete?")

        if(message){
            setuserForum(newArr)
        }
    }
    
    const delete5min=()=>{
        let todayTime=new Date().getTime();
        let todayMinute=Math.floor(todayTime/1000/60);
        console.log(todayMinute)

        let newArray=userForum.filter(function(val){
            if(Math.floor(val.mil/1000/60) <= todayMinute-5)
                return false
            return true
        })
        setuserForum(newArray);
    }

    // console.log(userForum)
    // console.log(showForum)

    return(
        <div>
            <h1>Forum</h1>
            <form onSubmit={addForum}>
                <textarea name="area" placeholder="please enter forum topic" cols="20" rows="10"/><br/>
                <label for="sel">Select User: </label>
                <select name="user" id="sel"><br/>
                    <option>Choose User: </option>
                    <option>Yogesh</option>
                    <option>Munna</option>
                    <option>Ashish</option>
                    <option>Prajwal</option>
                </select><br/>
                <button>Submit</button>
            </form>
            <button onClick={delete5min}>Delete 5 minutes</button>

            {!showForum?null:showForum.map((val,index)=><div>
                <strong>Discription:</strong> {val.forumList} 
                <strong>User:</strong> {val.user}
                <button onClick={() => {deleteOne(index)}}>Delete</button>
                </div>)
            } <br/>

        </div>
    )
}