import React,{useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signin,currentUser }=useAuth();
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
            { currentUser && JSON.stringify(currentUser)}
            <div className="content">  
           
            { error && <div>{ error['code'].slice(5)}</div> }          
                <form onSubmit={(e)=>handleLogin(e)}>
                    <label htmlFor="">Email : </label>
                    <input 
                    type="email" 
                    required
                    value={email}
                    placeholder="search a place"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="">Password : </label>
                    <input type="password" name="" id="" value={ password} onChange={ (e)=>setPassword(e.target.value)}/>
                    <br/>
                    <input type="submit" value="LOGIN"/>
                </form>                
            </div>
            
        </div>
    )
}

export default SignIn
