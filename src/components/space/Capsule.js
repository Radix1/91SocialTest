import React, { useState, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import Navbar from '../layout/Navbar'
import axios from 'axios'



const Capsule = ({match}) =>  {

   const[cap,setCap]=useState({});
   const[loading,setLoading]=useState(true);

   
      
    useEffect (()=>{
        console.log(match);
        console.log(match.params.id);
        getCapsule(match.params.id);},
        //getUserRepos(match.params.login);},
        //eslint-disable-next-line
        []
    );
    const getCapsule = async(id)=>{
        setLoading();
        const res= await axios.get
        (`https://api.spacexdata.com/v3/capsules/${id}`);
       var getCap=res.data;
       setCap(getCap);
        setLoading(false);
        console.log(res);
      }  

        if (loading) return <Spinner/>;

       
        return (
            <>
            <Navbar />
        <div className='card text-center'>
          
           Capsule ID: {cap.capsule_id}<br/>
           Original Launch Time: {cap.original_launch}<br/>
           Status: {cap.status}<br/>
           Type of Capsule: {cap.type}<br/>
         
           <div style ={{ backgroundImage: "url(https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/junorotate_web.gif?itok=qoi83BAi)",
          height:'100vh',
          backgroundSize:'' }}>
          </div>
            </div>
            </>
        )
}

export default Capsule
