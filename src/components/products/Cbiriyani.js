import React from 'react'
import '../Products.css'
import Cbiriyanipic from './Images/Cbiriyani.jpg'


class Cbiriyani extends React.Component{


	constructor(props){
		super(props)
		this.state={
			value:0,
			rate:1.88,
			items:1,
			trate:0,
			display:'nodisplay'
		}	
	}
	
	Cbiriyanibuy = (rate,items,name,trate) =>{
		this.props.moneyminus(rate,items,name,trate)
		 
	}
	Cbiriyanisell = (rate,items,name,trate) =>{
		this.props.moneyminus(-rate,-items,name,trate)

	}
	render(){
		


		let sellbutton;
		let buybutton;
		if(this.state.value>=1){
			 sellbutton= <div className='ui button sell' style={{backgroundColor:'red',color:'white'}} onClick={
						()=>{						
							if(this.state.items>this.state.value){
							this.setState({value:this.state.value-this.state.value})
							const rate = this.state.rate * this.state.value
							this.setState({
								trate:this.state.trate-rate
							})
							const trate = this.state.trate - rate
							const items = this.state.items
							const name = 'Cbiriyani'
							this.Cbiriyanisell(rate,items,name,trate)
							this.setState({items:1})
							
						}
						else{
							this.setState({value:this.state.value-this.state.items})
							const rate = this.state.rate * this.state.items
							this.setState({
								trate:this.state.trate - rate
							})
							const trate = this.state.trate - rate
							const items = this.state.items
							const name = 'Cbiriyani'
							this.Cbiriyanisell(rate,items,name,trate)
							this.setState({items:1})
							
						}
					}
						
				} >Sell</div>
		} else{
			 sellbutton= <div className='ui disabled button sell' style={{backgroundColor:'red',color:'white'}} onClick={
						()=>{
							this.setState({value:this.state.value-1})

						}}   >Sell</div>
		}
		if(this.state.rate<this.props.Money){
			buybutton=	<div className='ui button buy' style={{backgroundColor:'#248f24',color:'white'}} onClick={
						()=>{
							const rate = this.state.rate * this.state.items
							if(rate<=this.props.Money){
								this.setState({value:this.state.value+this.state.items})
								this.setState({
								trate:this.state.trate+rate
							})
							const trate = this.state.trate + rate
							const items = this.state.items
							const name = 'Cbiriyani'
							this.Cbiriyanibuy(rate,items,name,trate)
							this.setState({display:'nodisplay',items:1})


							}else{
								this.setState({display:'display',items:1})
							}

							
							
							
							
						}
						
					} >Buy</div>
		} else {
		
				buybutton=	<div className='ui disabled button buy' style={{backgroundColor:'#248f24',color:'white'}} onClick={
						()=>{
							this.setState({value:this.state.value+this.state.items})
							
						}

					}>Buy</div>
		}
		if(this.state.value<0){
			this.setState({value:0})
		}
		return(
			//color:'rgb(255, 0, 93)',fontSize:'20px',fontFamily:'robotic',marginBottom:'7px'
				<div  className='container-2' >
					<div className='Head' style={{fontSize:'25px'}} >Chicken Dum Biriyani</div>
					<p className='Price' >Price = <span style={{fontFamily:'none'}}>$</span>{this.state.rate.toLocaleString()}</p>
					<div className={this.state.display}>Insufficient balance!</div>
					<div className='ui medium image'>
					<center>
					<img src={Cbiriyanipic} loading='lazy' className='img' alt='not found' / ></center><p style={{fontSize:'20px',position:'absolute',right:'10px',bottom:'-25px'}}>x{this.state.value}</p>
					</div>
					<br/><br/>
					
					{sellbutton}
					<div className='ui mini input'>
						<input type='number' style={{width:'50px',margin:'5px',textAlign:'center'}} onChange={(event)=>{
							this.setState({
								items:Number(event.target.value)
							})

						}} value={this.state.items} />
					</div>
					{buybutton}
				
				
			</div>
			)



	}



}


export default Cbiriyani;