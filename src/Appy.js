import React from 'react'
import Home from './components/Home'
import './index.css'
import Elon from './images/Elonmusk.jpg'
import music from './images/Audio.mp3'
import Header from './components/Header'

class Appy extends React.Component{
	constructor(props){
		super(props)
		this.state={
			main:{
				display:'none'
			},
			begin1:{
				display:'begin1'
			},
			begin2:{
				display:'begin1 begin2'
			},
			begin3:{
				display:'begin1 begin3'
			},
			welcome:{
				display:'wellcum'
			},
			form:{
				display:'none'
			},
			name:'',
			process:{
				display:'none'
			},
			welcometext:{
				display:'none'
			},
			play:true
		}
		// let audio = new Audio('./Images/Audio.mp3')
	}
	

	// componentDidMount(){
	// 	audio.addEventListener('ended',()=>this.setState({play:false}));
	// }
	// componentWillUnmount(){
	// 	audio.removeEventListener('ended',()=>this.setState({play:false}));
	// }
	// toggle = () =>{
	// 	this.setState({play:!this.state.play},()=>{
	// 		this.state.play ? this.audio.play() : this.audio.pause();
	// 	})
	// }

	toggle2=()=>{
		setTimeout(()=>{
			console.log('hello')
			this.setState({
				welcome:{
					display:'none'
				},
				form:{
					display:''
				}
			})
		},2000)
	}

	toggle3=()=>{
		
		this.setState({
			form:{
				display:'none'
			},
			process:{
				display:''
			}
		})
		setTimeout(()=>{
			this.setState({
				process:{
					display:'none'
				}
			})
		},10000)
		setTimeout(()=>{
			this.setState({
				begin1:{
					display:'none'
				},
				begin2:{
					display:'none'
				},
				begin3:{
					display:'none'
				},
				welcometext:{
					display:''
				}

			})
		},12000)
		setTimeout(()=>{
			this.setState({
				welcometext:{
					display:'none'
				},
				main:{
					display:''
				}
			})
		},17000)
	}
	toggle4=()=>{
		this.setState({
			play:!this.state.play
		})
		if(this.state.play){
		setTimeout(()=>{
			const audio = document.getElementById('audio')
		audio.play()
		},1000)
		}else{
			setTimeout(()=>{
			const audio = document.getElementById('audio')
		audio.pause()
		},100)
		}
	}




	render(){
		return(
<div  >
		<audio id='audio' src={music} type='audio/mp3'/>
		<div className={this.state.begin1.display}></div>
		<div className={this.state.begin2.display}></div>
		<div className={this.state.begin3.display}></div>
		<div className={this.state.welcome.display}>
			<h1>Hello</h1>
			<h3>Welcome To Our Website</h3>
			<br/>
			<button onClick={(event)=>{this.toggle2()}} >Tap Here To Continue</button>
		</div>


		<div style={this.state.form} className='input-form' >
			<form className='ui form' action='#'>
				<div className='ui small image'>
					<img src={Elon} style={{borderRadius:'20px',filter:'drop-shadow(2px 3px 5px white)'}} alt='not found'/>
				</div>
				<p className='elonmuskwords' >Hey Boy Im Elon Musk ,The Rule of this Game is to Spend All of my Money In the given Products Within 2 minutes, Timer Will Be Running On Background While You Are Playing.
				<br/>
				Please Enter Your Name So I Can Transfer All Of My Money To You</p> 
				<div className='field'>
					<input onChange={(event)=>{
						this.setState({
							name:event.target.value
						})
					}} type='text' placeholder='Your Name...'/>
				</div>
				
				<div onClick={(event)=>{this.toggle4()}} className='ui button' style={{filter:'drop-shadow(2px 3px 5px red)'}}>{this.state.play ? <center><i className='play icon'/></center> :  <center> <i className='pause icon'/></center> }</div>
				<div onClick={(event)=>{this.toggle3()}} className='ui button' style={{filter:'drop-shadow(2px 3px 5px red)'}}>Submit</div>
				<p className='elonmuskwords'>Only If You Need The Backgrounds Music Press The Play Button(Music Cant Be Stopped Manually)</p>
			</form>
		</div>
		
		<div style={this.state.process}>
			<div className='wellcum' style={{width:'80%'}}>
				<p className='elonmusktransfer'>Elon Musk Is Transfering His 230400000000 Dollars to {this.state.name} ........</p>
			</div>
		</div>
		<div style={this.state.welcometext}>
			<div className='wellcum' style={{width:'80%'}}>
				<p className='elonmusktransfer2'>Welcome <b>{this.state.name}</b> </p>
			</div>

		</div>


			<div style={this.state.main} >
    			<Header/>
				<Home/>
			</div>
</div>
			)
	}

}

export default Appy;