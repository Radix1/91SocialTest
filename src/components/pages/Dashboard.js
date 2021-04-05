import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Spinner from '../layout/Spinner'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import axios from 'axios'



class Dashboard extends Component {
    

    state= {
        hist:[],
        loading:false
      };
    
    
       async componentDidMount() {
        this.setState({loading:true});
        const his= await axios.get('https://api.spacexdata.com/v3/history        ')
        var hisArray=Array.from(his.data);
       this.setState({hist:hisArray, loading:false })
     

    }



    render() {

        const {hist,loading}=this.state;

        if(loading){
            return <Spinner/>
        }
        else{
        return (
            <div
            style ={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/800px-M104_ngc4594_sombrero_galaxy_hi-res.jpg')",
            height:'100vh',
             backgroundSize:'cover' }}>
            <Navbar/>
            <Timeline align="alternate">
            {
                        hist.map((val,index)=>(
                           
                           
                                <TimelineItem key={index}>


                                     <TimelineOppositeContent>
                                         <Typography variant="body2" 
                                            className="text-light">
                                          {val.event_date_utc}
                                         </Typography>
                                    </TimelineOppositeContent>


                                    <TimelineSeparator>
                                        <TimelineDot>
                                             <GolfCourseIcon />
                                        </TimelineDot>
                                     <TimelineConnector  />
                                     </TimelineSeparator>
                                    
                                     <TimelineContent>
                                         <Paper elevation={3} styles={{padding: '6px 16px'}}>
                                             <Typography variant="h6" component="h1">
                                             {val.title}
                                             </Typography>
                                            <Typography> </Typography>
                                        </Paper>
                                         </TimelineContent>
                                         </TimelineItem>
                          
                        )
                    )}
     
    </Timeline>


      
            </div>
        )
                        }
    }
}

export default Dashboard
