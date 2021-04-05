import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import axios from 'axios'

class Login extends Component {

constructor(){
    super();
    this.state={
        name:'',
        password:''
    }
}

async login(){
    const resp=await axios.get('https://run.mocky.io/v3/9e69f3ec-44d7-4809-9fdb-e122149a4541')
    if(resp.data.login.name===this.state.name && resp.data.login.password===this.state.password)
    {
        localStorage.setItem('login',JSON.stringify(resp));
        console.warn(this.props.history.push('/dashboard'))
    }
    else{
        alert("Incorrect Username or Password")
    }
}

    render() {
        return (
            <div style ={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/800px-M104_ngc4594_sombrero_galaxy_hi-res.jpg')",
            height:'100vh',
             backgroundSize:'cover' }}>
                 <Navbar />
                 <div className='login' >

                <input type="text" name="user"
                placeholder="Enter name"
                width="100"
                onChange={(e)=>this.setState({name:e.target.value})}
                />
                
                <input type="password" name="password"
                placeholder="Enter password"
                onChange={(e)=>this.setState({password:e.target.value})}
                />
                <button onClick={()=>{this.login()}}>
                    Login
                </button>
            </div>
            </div>
        )
    }
}

export default Login;