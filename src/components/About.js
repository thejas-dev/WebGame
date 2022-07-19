import React from 'react'
import Tns from '../images/tns.png'




const About = ()=>{
	const stylexs={
		fontSize:'20px',color:'white',
		textShadow:'2px 2px 4px #000000' ,
		border:'5px solid gray',padding:'10px' ,
		borderRadius:'20px',
		marginTop:'30px'

	}
	const imgstyle={
		border:'2px soid white',
		borderRadius:'50px',
		backgroundColor:'#000000',
		padding:'10px'
	}

	return(
		<div>
			<div className="ui riased very padded text container segment"  style={{padding:'17px', borderRadius:'20px' , marginTop:'20px' ,backgroundColor:'gray' ,border:'5px solid red' }} >
				 <center>
                	<h1 className='ui header' style={{padding:'10px', fontSize:'40px' , color:'white'}} >About Us</h1>
                </center>
               <center> <div className="ui small image" style={imgstyle} >
                	<a href={Tns}><img src={Tns} alt="not found"/></a>
                </div></center>
                <p style={stylexs}><b>Developed By Thejas , A Small Try To Web Game That's All Thank You!</b></p>
			</div>

		</div>

		)



}


export default About;