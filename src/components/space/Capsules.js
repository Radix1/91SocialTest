import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import Navbar from '../layout/Navbar'
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap'
import axios from 'axios'



class Capsules extends Component{

    state= {
        all:[],
        loading:false,
        alert:null
      };
    
      
    
       async componentDidMount() {
        this.setState({loading:true});
        const getAllCapsules= await axios.get('https://api.spacexdata.com/v3/capsules')
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
                <div>
                     <Navbar />
               
              
                  
                 <Table striped bordered hover>
                    <thead>
                     <tr>
                     <th>Capsule Serial</th>
                      <th>Capsule ID</th>
                      <th>Details</th>
                      <th>Landings</th>
                    
                    
                    </tr>
                     </thead>
                        <tbody>
                        {
                        all.map((val,index)=>(
                           
                           
                                <tr key={index}>
                                     <Link to={`capsule/${val.capsule_serial}`} >
                                     <td>{val.capsule_serial}</td>
                                     </Link>
                                   
                                    <td>{val.capsule_id}</td>
                                    <td>{val.details}</td>
                                    <td>{val.landings}</td>
                                    
                                </tr>
                          
                        )
                    )}
    
   
                     </tbody>
                    </Table>
               
                </div>
            )
        };
       }
    
   
        
} 





export default Capsules;