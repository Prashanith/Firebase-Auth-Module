import React,{useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signin }=useAuth();
    const [error,setError]=useState(null);
    const history=useHistory();

    async function handleLogin(e){ 
        setError('')      
        e.preventDefault();
        try{
            await signin(email,password)
            history.push('/dashboard')
        }
        catch(err){
            console.log(err);
            setError(err)
        }
    }

    return (
        <div>
            {/* { currentUser && JSON.stringify(currentUser)} */}

            <div className="content">  
           
            { error && <div>{ error['code'].slice(5)}</div> }          
                <form onSubmit={(e)=>handleLogin(e)}  
                className="flex flex-col text-xl bg-gray-200 self-center">
                    <label>Email</label>                    
                    <input 
                    type="email" 
                    required
                    value={email}
                    placeholder="search a place"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    
                    <label>Password </label>
                    
                    <input type="password" name="" id="" value={ password} onChange={ (e)=>setPassword(e.target.value)}/>
                  
                    <input type="submit" value="LOGIN" 
                    className="text-white bg-gray-800 p-1.5"                        
                    />
                </form>                
            </div>
            
        </div>
    )
}

export default SignIn
