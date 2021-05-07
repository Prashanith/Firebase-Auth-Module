import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory} from 'react-router-dom'


function DashBoard() {
    const {currentUser,logout} = useAuth();
    const history=useHistory()

    function handleLogout(e){
        e.preventDefault();
        logout();
        history.push('/')

        
    }
    return (
        <div>
        <h1>User Information</h1>
        { JSON.stringify(currentUser) }

        <button onClick={(e)=>handleLogout(e)}> Log Out</button>
            
        </div>
    )
}

export default DashBoard;