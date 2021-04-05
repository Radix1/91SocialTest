import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import Navbar from '../layout/Navbar'
import axios from 'axios'
class Rockets extends Component{
    state= {
        all:[],
        loading:false
      };
     async componentDidMount() {
        this.setState({loading:true});
        const getAllCapsules= await axios.get('https://api.spacexdata.com/v3/rockets')
        var allCap=Array.from(getAllCapsules.data);
       this.setState({all:allCap, loading:false })
       }


       render(){

        const {all,loading}=this.state;
        if(loading){
            return <Spinner/>
        }
        else{
            return (
                <>
                     <Navbar />
          <div justify="center" >
          {all.map((value,index) => (
            <div key={index}>
                <a href={`${value.wikipedia}`}>
              <div className="card text-dark" >
              ID: { value.id}<br></br>
              Rocket Name: {value.rocket_name}<br></br>
              Cost per launch :{value.cost_per_launch}<br></br>
              Company: {value.company}<br></br>
              Country: {value.country}<br></br>
              </div>
             </a>
             
             
              
            </div>
          ))}
        </div>
                </>
            )
        };
       }
    
   
        
} 



export default Rockets;