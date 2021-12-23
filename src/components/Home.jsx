import React from 'react'
import Navbar from './Navbar'
import './../css/Home.css'
import img from './../Img/satyammm.jpg'
import Contact from './Contact'

function Home() {
    return (
        <>
            <Navbar />
            <div className='bg-dark  displl'>
                <div className='card shadow-lg'>
                    <img src={img} />
                    <div className='pl-3'>
                        <h3 className='p-3 bg-dark text-center text-white'>About Me</h3>
                        <p>Hi! I am Shivanshu Shrivastava, I've completed my Higher Education from Time School and currently pursuing B.Tech in Automobile Engineering from Madhav Institute of Technology & Science.
                            I've done two Internships , first from Protrainy where I've done front End Development and design CV Builder or Job Portal websites and Second Internship from Stickman Technology where I was a Full stack Deveoloper and design Email sender app using Nodemailer package.</p>
                        <Contact />

                    </div>
                </div>


            </div>

        </>
    )
}

export default Home
