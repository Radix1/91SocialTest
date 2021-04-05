import React from 'react'
import Navbar from '../layout/Navbar'

const About = () => {
    return (
        <div className="text-light"
        style ={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/800px-M104_ngc4594_sombrero_galaxy_hi-res.jpg')",
        height:'100vh',
         backgroundSize:'cover' }}>
            <Navbar/>
            <h1>
              The app shows data about space
            </h1>
            <p>
                Data is sourced from <a href="https://docs.spacexdata.com/">space data</a>
            </p>
            <p>
                Maintained by : Radhika Mohta
                version:1.0
            </p>
        </div>
    )
}

export default About
