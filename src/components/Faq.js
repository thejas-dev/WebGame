import React from 'react'
import Tns from '../images/Elonmusk.jpg'




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
		height:'250px',
		width:'250px',
		filter:'drop-shadow(2px 3px 5px white)'
		
	}

	return(
		<div>
			<div className="ui riased very padded text container segment"  style={{padding:'17px', borderRadius:'20px' , marginTop:'20px' ,backgroundColor:'gray' ,border:'5px solid red' }} >
				 <center>
                	<h1 className='ui header' style={{padding:'10px', fontSize:'40px' , color:'white'}} >How To Play?</h1>
                </center>
               <center> <div className="ui small image" style={imgstyle} >
                	<a href={Tns}><img src={Tns} style={imgstyle} alt="not found"/></a>
                </div></center>
                <p style={stylexs}><b>
                 	The Game Is About Spending All The Money Of Elon Musk By Purchasing The Given Products Within 2 Minutes.
                 	<br/>
                 	<br/>
                 	You Can Buy The Products Using The Buy Button Given Below The Products or Sell it.
                 	<br/><br/>
                 	 Multiple Products Can Be Purchased By Specifying The Amount Of Products Within The Box At Center and Press Buy To Buy The Specified Amount Of Items.
                 	<br/><br/>
                 	The Timer Will Be Running In Background While You Are Playing
                </b></p>
			</div>

		</div>

		)



}


export default About;