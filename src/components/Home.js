import React from 'react'
import Displaypic from './Displaypic'
import Biscuit from './products/Biscuit'
import Broom from './products/Broom'
import Bun from './products/Bun'
import Tea from './products/Tea'
import Cake from './products/Cake'
import Aashirvad from './products/Aashirvad'
import Book from './products/Book'
import Biriyani from './products/Biriyani'
import Slippers from './products/Slippers'
import Cbiriyani from './products/Cbiriyani'
import Mbiriyani from './products/Mbiriyani'
import Teddy from './products/Teddy'
import Bucketbiriyani from './products/Bucketbiriyani'
import Cycle from './products/Cycle'
import Marshallbuds from './products/Marshallbuds'
import Goat from './products/Goat'
import Ammacycle from './products/Ammacycle'
import Friedrice from './products/Friedrice'
import Honey from './products/Honey'
import Cfriedrice from './products/Cfriedrice'
import Wearphones from './products/Wearphones'
import Washing from './products/Washing'
import Vivo from './products/Vivo'
import Silver from './products/Silver'
import Platinum from './products/Platinum'
import Gold from './products/Gold'
import Speaker from './products/Speaker'
import Pig from './products/Pig'
import Cow from './products/Cow'
import Realme from './products/Realme'
import Opporeno from './products/Opporeno'
import Oppofind from './products/Oppofind'
import Earpods from './products/Earpods'
import Earbuds from './products/Earbuds'
import Applewatch from './products/Applewatch'
import Rolex from './products/Rolex'
import Audi from './products/Audi'
import Iphone from './products/Iphone'
import Asuslap from './products/Asuslap'
import Diamond from './products/Diamond'
import Bajaj from './products/Bajaj'
import Hut from './products/Hut'
import Boeing from './products/Boeing'
import Lipstick from './products/Lipstick'
import Kingfisher from './products/Kingfisher'
import Mask from './products/Mask'
import Royalenfield from './products/Royalenfield'
import Farmland from './products/Farmland'
import Nano from './products/Nano'
import Iplteam from './products/Iplteam'
import Football from './products/Football'
import Park from './products/Park'
import Bike from './products/Bike'
import Bugatti from './products/Bugatti'
import Helicopter from './products/Helicopter'
import Theatre from './products/Theatre'
import Benz from './products/Benz'
import Luxuryhouse from './products/Luxuryhouse'
import Ship from './products/Ship'
import F1 from './products/F1'
import RR from './products/RR'
import Jet from './products/Jet'
import Ironman from './products/Ironman'
import Facebook from './products/Facebook'
import './Products.css'
import Checkout from './Checkout'



class Home extends React.Component{
//
	constructor(props){
		super(props)
		this.state={
			money:Number(230400000000),
			datadis:{
				data:'maintable'
			},
			button:{
				display:''
			},
			thank:{
				display:'none'
			},
			timer:true,
			start:true,
			countdown:0,
			checker:{
				
			},

				Asuslap:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},
				Audi:{
					
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},
				Applewatch:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},
				Ammacycle:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},
				Aashirvad:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},
				Bajaj:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Benz:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Bike:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Biriyani:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Biscuit:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Boeing:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Book:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Broom:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Bucketbiriyani:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Bugatti:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Bun:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Cake:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Cbiriyani:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Cfriedrice:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Cow:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Cycle:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Diamond:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Earbuds:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Earpods:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},F1:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Facebook:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Farmland:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Football:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Friedrice:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Goat:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Gold:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Helicopter:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Honey:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Hut:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Iphone:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Iplteam:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Ironman:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Jet:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Kingfisher:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Lipstick:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Luxuryhouse:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Marshallbuds:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Mask:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Mbiriyani:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Nano:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Oppofind:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Opporeno:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Park:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Pig:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Platinum:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Realme:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Rolex:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Royalenfield:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},RR:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Ship:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Silver:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Slippers:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Speaker:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Tea:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Teddy:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},
				Theatre:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Vivo:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Washing:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				},Wearphones:{
					Quantity:0,
					price:0,
					Name:0,
					display:{
						display:'none'
					}
				}
			
			
	}
		this.moneyminus=this.moneyminus.bind(this)	
		
}
starter(){
	if(this.state.start){
	setInterval(()=>{
			if(this.state.timer){
			this.setState({
				countdown:this.state.countdown+1
			})

			console.log(this.state.countdown)
		}
		},1000)
	this.setState({
		start:false
	})
	}
	}
		
	moneyminus=(addrate,items,name,trate)=>{
		this.starter();
		this.setState({
			money:this.state.money-addrate
		})
		switch(name){
			case 'Audi':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Audi:{
							Name:name,
							price:this.state.Audi.price+addrate,
							Quantity:this.state.Audi.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Audi:{
							Name:name,
							price:this.state.Audi.price+addrate,
							Quantity:this.state.Audi.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Aashirvad':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Aashirvad:{
							Name:name,
							price:this.state.Aashirvad.price+addrate,
							Quantity:this.state.Aashirvad.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Aashirvad:{
							Name:name,
							price:this.state.Aashirvad.price+addrate,
							Quantity:this.state.Aashirvad.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Ammacycle':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Ammacycle:{
							Name:name,
							price:this.state.Ammacycle.price+addrate,
							Quantity:this.state.Ammacycle.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Ammacycle:{
							Name:name,
							price:this.state.Ammacycle.price+addrate,
							Quantity:this.state.Ammacycle.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Applewatch':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Applewatch:{
							Name:name,
							price:this.state.Applewatch.price+addrate,
							Quantity:this.state.Applewatch.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Applewatch:{
							Name:name,
							price:this.state.Applewatch.price+addrate,
							Quantity:this.state.Applewatch.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Asuslap':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Asuslap:{
							Name:name,
							price:this.state.Asuslap.price+addrate,
							Quantity:this.state.Asuslap.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Asuslap:{
							Name:name,
							price:this.state.Asuslap.price+addrate,
							Quantity:this.state.Asuslap.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Bajaj':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Bajaj:{
							Name:name,
							price:this.state.Bajaj.price+addrate,
							Quantity:this.state.Bajaj.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Bajaj:{
							Name:name,
							price:this.state.Bajaj.price+addrate,
							Quantity:this.state.Bajaj.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Benz':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Benz:{
							Name:name,
							price:this.state.Benz.price+addrate,
							Quantity:this.state.Benz.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Benz:{
							Name:name,
							price:this.state.Benz.price+addrate,
							Quantity:this.state.Benz.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Biriyani':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Biriyani:{
							Name:name,
							price:this.state.Biriyani.price+addrate,
							Quantity:this.state.Biriyani.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Biriyani:{
							Name:name,
							price:this.state.Biriyani.price+addrate,
							Quantity:this.state.Biriyani.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Bike':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Bike:{
							Name:name,
							price:this.state.Bike.price+addrate,
							Quantity:this.state.Bike.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Bike:{
							Name:name,
							price:this.state.Bike.price+addrate,
							Quantity:this.state.Bike.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Biscuit':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Biscuit:{
							Name:name,
							price:this.state.Biscuit.price+addrate,
							Quantity:this.state.Biscuit.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Biscuit:{
							Name:name,
							price:this.state.Biscuit.price+addrate,
							Quantity:this.state.Biscuit.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Boeing':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Boeing:{
							Name:name,
							price:this.state.Boeing.price+addrate,
							Quantity:this.state.Boeing.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Boeing:{
							Name:name,
							price:this.state.Boeing.price+addrate,
							Quantity:this.state.Boeing.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Book':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Book:{
							Name:name,
							price:this.state.Book.price+addrate,
							Quantity:this.state.Book.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Book:{
							Name:name,
							price:this.state.Book.price+addrate,
							Quantity:this.state.Book.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Broom':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Broom:{
							Name:name,
							price:this.state.Broom.price+addrate,
							Quantity:this.state.Broom.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Broom:{
							Name:name,
							price:this.state.Broom.price+addrate,
							Quantity:this.state.Broom.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Bucketbiriyani':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Bucketbiriyani:{
							Name:name,
							price:this.state.Bucketbiriyani.price+addrate,
							Quantity:this.state.Bucketbiriyani.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Bucketbiriyani:{
							Name:name,
							price:this.state.Bucketbiriyani.price+addrate,
							Quantity:this.state.Bucketbiriyani.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Bugatti':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Bugatti:{
							Name:name,
							price:this.state.Bugatti.price+addrate,
							Quantity:this.state.Bugatti.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Bugatti:{
							Name:name,
							price:this.state.Bugatti.price+addrate,
							Quantity:this.state.Bugatti.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Bun':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Bun:{
							Name:name,
							price:this.state.Bun.price+addrate,
							Quantity:this.state.Bun.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Bun:{
							Name:name,
							price:this.state.Bun.price+addrate,
							Quantity:this.state.Bun.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Cake':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Cake:{
							Name:name,
							price:this.state.Cake.price+addrate,
							Quantity:this.state.Cake.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Cake:{
							Name:name,
							price:this.state.Cake.price+addrate,
							Quantity:this.state.Cake.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Cbiriyani':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Cbiriyani:{
							Name:name,
							price:this.state.Cbiriyani.price+addrate,
							Quantity:this.state.Cbiriyani.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Cbiriyani:{
							Name:name,
							price:this.state.Cbiriyani.price+addrate,
							Quantity:this.state.Cbiriyani.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Cfriedrice':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Cfriedrice:{
							Name:name,
							price:this.state.Cfriedrice.price+addrate,
							Quantity:this.state.Cfriedrice.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Cfriedrice:{
							Name:name,
							price:this.state.Cfriedrice.price+addrate,
							Quantity:this.state.Cfriedrice.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Cow':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Cow:{
							Name:name,
							price:this.state.Cow.price+addrate,
							Quantity:this.state.Cow.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Cow:{
							Name:name,
							price:this.state.Cow.price+addrate,
							Quantity:this.state.Cow.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Cycle':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Cycle:{
							Name:name,
							price:this.state.Cycle.price+addrate,
							Quantity:this.state.Cycle.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Cycle:{
							Name:name,
							price:this.state.Cycle.price+addrate,
							Quantity:this.state.Cycle.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Diamond':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Diamond:{
							Name:name,
							price:this.state.Diamond.price+addrate,
							Quantity:this.state.Diamond.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Diamond:{
							Name:name,
							price:this.state.Diamond.price+addrate,
							Quantity:this.state.Diamond.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Earbuds':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Earbuds:{
							Name:name,
							price:this.state.Earbuds.price+addrate,
							Quantity:this.state.Earbuds.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Earbuds:{
							Name:name,
							price:this.state.Earbuds.price+addrate,
							Quantity:this.state.Earbuds.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Earpods':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Earpods:{
							Name:name,
							price:this.state.Earpods.price+addrate,
							Quantity:this.state.Earpods.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Earpods:{
							Name:name,
							price:this.state.Earpods.price+addrate,
							Quantity:this.state.Earpods.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'F1':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						F1:{
							Name:name,
							price:this.state.F1.price+addrate,
							Quantity:this.state.F1.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						F1:{
							Name:name,
							price:this.state.F1.price+addrate,
							Quantity:this.state.F1.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Facebook':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Facebook:{
							Name:name,
							price:this.state.Facebook.price+addrate,
							Quantity:this.state.Facebook.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Facebook:{
							Name:name,
							price:this.state.Facebook.price+addrate,
							Quantity:this.state.Facebook.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Farmland':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Farmland:{
							Name:name,
							price:this.state.Farmland.price+addrate,
							Quantity:this.state.Farmland.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Farmland:{
							Name:name,
							price:this.state.Farmland.price+addrate,
							Quantity:this.state.Farmland.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Football':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Football:{
							Name:name,
							price:this.state.Football.price+addrate,
							Quantity:this.state.Football.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Football:{
							Name:name,
							price:this.state.Football.price+addrate,
							Quantity:this.state.Football.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Friedrice':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Friedrice:{
							Name:name,
							price:this.state.Friedrice.price+addrate,
							Quantity:this.state.Friedrice.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Friedrice:{
							Name:name,
							price:this.state.Friedrice.price+addrate,
							Quantity:this.state.Friedrice.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Gold':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Gold:{
							Name:name,
							price:this.state.Gold.price+addrate,
							Quantity:this.state.Gold.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Gold:{
							Name:name,
							price:this.state.Gold.price+addrate,
							Quantity:this.state.Gold.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Goat':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Goat:{
							Name:name,
							price:this.state.Goat.price+addrate,
							Quantity:this.state.Goat.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Goat:{
							Name:name,
							price:this.state.Goat.price+addrate,
							Quantity:this.state.Goat.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Helicopter':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Helicopter:{
							Name:name,
							price:this.state.Helicopter.price+addrate,
							Quantity:this.state.Helicopter.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Helicopter:{
							Name:name,
							price:this.state.Helicopter.price+addrate,
							Quantity:this.state.Helicopter.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Honey':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Honey:{
							Name:name,
							price:this.state.Honey.price+addrate,
							Quantity:this.state.Honey.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Honey:{
							Name:name,
							price:this.state.Honey.price+addrate,
							Quantity:this.state.Honey.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Hut':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Hut:{
							Name:name,
							price:this.state.Hut.price+addrate,
							Quantity:this.state.Hut.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Hut:{
							Name:name,
							price:this.state.Hut.price+addrate,
							Quantity:this.state.Hut.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Iphone':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Iphone:{
							Name:name,
							price:this.state.Iphone.price+addrate,
							Quantity:this.state.Iphone.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Iphone:{
							Name:name,
							price:this.state.Iphone.price+addrate,
							Quantity:this.state.Iphone.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Iplteam':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Iplteam:{
							Name:name,
							price:this.state.Iplteam.price+addrate,
							Quantity:this.state.Iplteam.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Iplteam:{
							Name:name,
							price:this.state.Iplteam.price+addrate,
							Quantity:this.state.Iplteam.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Ironman':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Ironman:{
							Name:name,
							price:this.state.Ironman.price+addrate,
							Quantity:this.state.Ironman.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Ironman:{
							Name:name,
							price:this.state.Ironman.price+addrate,
							Quantity:this.state.Ironman.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Jet':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Jet:{
							Name:name,
							price:this.state.Jet.price+addrate,
							Quantity:this.state.Jet.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Jet:{
							Name:name,
							price:this.state.Jet.price+addrate,
							Quantity:this.state.Jet.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Kingfisher':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Kingfisher:{
							Name:name,
							price:this.state.Kingfisher.price+addrate,
							Quantity:this.state.Kingfisher.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Kingfisher:{
							Name:name,
							price:this.state.Kingfisher.price+addrate,
							Quantity:this.state.Kingfisher.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Lipstick':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Lipstick:{
							Name:name,
							price:this.state.Lipstick.price+addrate,
							Quantity:this.state.Lipstick.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Lipstick:{
							Name:name,
							price:this.state.Lipstick.price+addrate,
							Quantity:this.state.Lipstick.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Luxuryhouse':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Luxuryhouse:{
							Name:name,
							price:this.state.Luxuryhouse.price+addrate,
							Quantity:this.state.Luxuryhouse.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Luxuryhouse:{
							Name:name,
							price:this.state.Luxuryhouse.price+addrate,
							Quantity:this.state.Luxuryhouse.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Marshallbuds':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Marshallbuds:{
							Name:name,
							price:this.state.Marshallbuds.price+addrate,
							Quantity:this.state.Marshallbuds.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Marshallbuds:{
							Name:name,
							price:this.state.Marshallbuds.price+addrate,
							Quantity:this.state.Marshallbuds.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Mask':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Mask:{
							Name:name,
							price:this.state.Mask.price+addrate,
							Quantity:this.state.Mask.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Mask:{
							Name:name,
							price:this.state.Mask.price+addrate,
							Quantity:this.state.Mask.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Mbiriyani':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Mbiriyani:{
							Name:name,
							price:this.state.Mbiriyani.price+addrate,
							Quantity:this.state.Mbiriyani.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Mbiriyani:{
							Name:name,
							price:this.state.Mbiriyani.price+addrate,
							Quantity:this.state.Mbiriyani.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Nano':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Nano:{
							Name:name,
							price:this.state.Nano.price+addrate,
							Quantity:this.state.Nano.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Nano:{
							Name:name,
							price:this.state.Nano.price+addrate,
							Quantity:this.state.Nano.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Oppofind':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Oppofind:{
							Name:name,
							price:this.state.Oppofind.price+addrate,
							Quantity:this.state.Oppofind.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Oppofind:{
							Name:name,
							price:this.state.Oppofind.price+addrate,
							Quantity:this.state.Oppofind.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Opporeno':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Opporeno:{
							Name:name,
							price:this.state.Opporeno.price+addrate,
							Quantity:this.state.Opporeno.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Opporeno:{
							Name:name,
							price:this.state.Opporeno.price+addrate,
							Quantity:this.state.Opporeno.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Park':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Park:{
							Name:name,
							price:this.state.Park.price+addrate,
							Quantity:this.state.Park.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Park:{
							Name:name,
							price:this.state.Park.price+addrate,
							Quantity:this.state.Park.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Pig':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Pig:{
							Name:name,
							price:this.state.Pig.price+addrate,
							Quantity:this.state.Pig.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Pig:{
							Name:name,
							price:this.state.Pig.price+addrate,
							Quantity:this.state.Pig.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Platinum':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Platinum:{
							Name:name,
							price:this.state.Platinum.price+addrate,
							Quantity:this.state.Platinum.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Platinum:{
							Name:name,
							price:this.state.Platinum.price+addrate,
							Quantity:this.state.Platinum.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Realme':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Realme:{
							Name:name,
							price:this.state.Realme.price+addrate,
							Quantity:this.state.Realme.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Realme:{
							Name:name,
							price:this.state.Realme.price+addrate,
							Quantity:this.state.Realme.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Rolex':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Rolex:{
							Name:name,
							price:this.state.Rolex.price+addrate,
							Quantity:this.state.Rolex.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Rolex:{
							Name:name,
							price:this.state.Rolex.price+addrate,
							Quantity:this.state.Rolex.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Royalenfield':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Royalenfield:{
							Name:name,
							price:this.state.Royalenfield.price+addrate,
							Quantity:this.state.Royalenfield.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Royalenfield:{
							Name:name,
							price:this.state.Royalenfield.price+addrate,
							Quantity:this.state.Royalenfield.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'RR':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						RR:{
							Name:name,
							price:this.state.RR.price+addrate,
							Quantity:this.state.RR.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						RR:{
							Name:name,
							price:this.state.RR.price+addrate,
							Quantity:this.state.RR.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Ship':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Ship:{
							Name:name,
							price:this.state.Ship.price+addrate,
							Quantity:this.state.Ship.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Ship:{
							Name:name,
							price:this.state.Ship.price+addrate,
							Quantity:this.state.Ship.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Silver':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Silver:{
							Name:name,
							price:this.state.Silver.price+addrate,
							Quantity:this.state.Silver.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Silver:{
							Name:name,
							price:this.state.Silver.price+addrate,
							Quantity:this.state.Silver.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Slippers':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Slippers:{
							Name:name,
							price:this.state.Slippers.price+addrate,
							Quantity:this.state.Slippers.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Slippers:{
							Name:name,
							price:this.state.Slippers.price+addrate,
							Quantity:this.state.Slippers.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Speaker':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Speaker:{
							Name:name,
							price:this.state.Speaker.price+addrate,
							Quantity:this.state.Speaker.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Speaker:{
							Name:name,
							price:this.state.Speaker.price+addrate,
							Quantity:this.state.Speaker.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Tea':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Tea:{
							Name:name,
							price:this.state.Tea.price+addrate,
							Quantity:this.state.Tea.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Tea:{
							Name:name,
							price:this.state.Tea.price+addrate,
							Quantity:this.state.Tea.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Teddy':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Teddy:{
							Name:name,
							price:this.state.Teddy.price+addrate,
							Quantity:this.state.Teddy.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Teddy:{
							Name:name,
							price:this.state.Teddy.price+addrate,
							Quantity:this.state.Teddy.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Theatre':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Theatre:{
							Name:name,
							price:this.state.Theatre.price+addrate,
							Quantity:this.state.Theatre.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Theatre:{
							Name:name,
							price:this.state.Theatre.price+addrate,
							Quantity:this.state.Theatre.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Vivo':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Vivo:{
							Name:name,
							price:this.state.Vivo.price+addrate,
							Quantity:this.state.Vivo.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Vivo:{
							Name:name,
							price:this.state.Vivo.price+addrate,
							Quantity:this.state.Vivo.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Washing':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Washing:{
							Name:name,
							price:this.state.Washing.price+addrate,
							Quantity:this.state.Washing.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Washing:{
							Name:name,
							price:this.state.Washing.price+addrate,
							Quantity:this.state.Washing.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			case 'Wearphones':{
				console.log(trate)
				if(trate >0){
				this.setState({
					
						Wearphones:{
							Name:name,
							price:this.state.Wearphones.price+addrate,
							Quantity:this.state.Wearphones.Quantity+items,
							display:{
								color:'white'
							}
						}
					
				})
			}else{
				this.setState({
					
						Wearphones:{
							Name:name,
							price:this.state.Wearphones.price+addrate,
							Quantity:this.state.Wearphones.Quantity+items,
							display:{
								display:'none'
							}
						}
					
				})
			}

				break;
			}
			default:{
				break;
			}

		}
		console.log("finsished")	
	}
	finsished=()=>{
		
		this.setState({
			checker:{
				display:'none'
			},
			datadis:{
				data:'maintable2'
			},
			button:{
				display:'none'
			},
			thank:{
				display:'thank'
			},
			timer:false
		})

	}






	render(){
		
		const styles= {
			color:'white',
			textShadow:'1px 1px 1px black',
			fontWeight:'bold',
			backgroundColor:'rgb(52,216,235,0.7)',
			textAlign:'center',
			position:'sticky',
			padding:'15px',
			 marginLeft:'auto',
			 marginRight:'auto',
			borderRadius:'60px',
			width:'300px',
			fontSize:'20px',
			top:'20px',
			fontFamily:' PT Sans, sans-serif',
			border:'5px solid rgb(255,255,255,0.7)',
			zIndex:'1'
			
		}
		if(this.state.money<0){
			this.setState({
				money:0
			})
		}
		return(
			<div>
			<div>
			<br/>
				<Displaypic/>
				<br/>
				<div style = {styles}>
					Money = <span style={{fontFamily:'none'}}>$</span>{this.state.money.toLocaleString()}
				</div>

				<br/>

				<div className='container-1'  style={this.state.checker}  >
					<Biscuit Money={this.state.money} moneyminus={this.moneyminus} />
					<Mask Money={this.state.money} moneyminus={this.moneyminus} />
					<Bun Money={this.state.money} moneyminus={this.moneyminus} />
					<Tea Money={this.state.money} moneyminus={this.moneyminus} />
					<Broom Money={this.state.money} moneyminus={this.moneyminus} />
					<Friedrice Money={this.state.money} moneyminus={this.moneyminus} />
					<Aashirvad Money={this.state.money} moneyminus={this.moneyminus} />
					<Cfriedrice Money={this.state.money} moneyminus={this.moneyminus} />
					<Biriyani Money={this.state.money} moneyminus={this.moneyminus} />
					<Cbiriyani Money={this.state.money} moneyminus={this.moneyminus} />
					<Mbiriyani Money={this.state.money} moneyminus={this.moneyminus} />
					<Kingfisher Money={this.state.money} moneyminus={this.moneyminus} />
					<Slippers Money={this.state.money} moneyminus={this.moneyminus} />
					<Honey Money={this.state.money} moneyminus={this.moneyminus} />
					<Book Money={this.state.money} moneyminus={this.moneyminus} />
					<Wearphones Money={this.state.money} moneyminus={this.moneyminus} />
					<Teddy Money={this.state.money} moneyminus={this.moneyminus} />
					<Bucketbiriyani Money={this.state.money} moneyminus={this.moneyminus} />
					<Cake Money={this.state.money} moneyminus={this.moneyminus} />
					<Ammacycle Money={this.state.money} moneyminus={this.moneyminus} />
					<Earpods Money={this.state.money} moneyminus={this.moneyminus} />
					<Lipstick Money={this.state.money} moneyminus={this.moneyminus} />
					<Earbuds Money={this.state.money} moneyminus={this.moneyminus} />
					<Silver Money={this.state.money} moneyminus={this.moneyminus} />
					<Cycle Money={this.state.money} moneyminus={this.moneyminus} />
					<Marshallbuds Money={this.state.money} moneyminus={this.moneyminus} />
					<Goat Money={this.state.money} moneyminus={this.moneyminus} />
					<Pig Money={this.state.money} moneyminus={this.moneyminus} />
					<Vivo Money={this.state.money} moneyminus={this.moneyminus} />
					<Cow Money={this.state.money} moneyminus={this.moneyminus} />
					<Realme Money={this.state.money} moneyminus={this.moneyminus} />
					<Opporeno Money={this.state.money} moneyminus={this.moneyminus} />
					
					<Speaker Money={this.state.money} moneyminus={this.moneyminus} />
					<Asuslap Money={this.state.money} moneyminus={this.moneyminus} />
					<Oppofind Money={this.state.money} moneyminus={this.moneyminus} />
					<Washing Money={this.state.money} moneyminus={this.moneyminus} />
					<Bajaj Money={this.state.money} moneyminus={this.moneyminus} />
					<Iphone Money={this.state.money} moneyminus={this.moneyminus} />
					<Royalenfield Money={this.state.money} moneyminus={this.moneyminus} />
					<Nano Money={this.state.money} moneyminus={this.moneyminus} />
					<Platinum Money={this.state.money} moneyminus={this.moneyminus} />
					<Gold Money={this.state.money} moneyminus={this.moneyminus} />
					<Applewatch Money={this.state.money} moneyminus={this.moneyminus} />
					<Hut Money={this.state.money} moneyminus={this.moneyminus} />
					<Diamond Money={this.state.money} moneyminus={this.moneyminus} />
					<Rolex Money={this.state.money} moneyminus={this.moneyminus} />
					<Audi Money={this.state.money} moneyminus={this.moneyminus} />
					<Farmland Money={this.state.money} moneyminus={this.moneyminus} />
					<Benz Money={this.state.money} moneyminus={this.moneyminus} />
					<Theatre Money={this.state.money} moneyminus={this.moneyminus} />
					<Helicopter Money={this.state.money} moneyminus={this.moneyminus} />
					<RR Money={this.state.money} moneyminus={this.moneyminus} />
					<Bugatti Money={this.state.money} moneyminus={this.moneyminus} />
					
					
					<Bike Money={this.state.money} moneyminus={this.moneyminus} />
					<F1 Money={this.state.money} moneyminus={this.moneyminus} />
					<Park Money={this.state.money} moneyminus={this.moneyminus} />
					<Jet Money={this.state.money} moneyminus={this.moneyminus} />
					<Boeing Money={this.state.money} moneyminus={this.moneyminus} />
					<Ship Money={this.state.money} moneyminus={this.moneyminus} />
					<Luxuryhouse Money={this.state.money} moneyminus={this.moneyminus} />
					<Jet Money={this.state.money} moneyminus={this.moneyminus} />
					<Iplteam Money={this.state.money} moneyminus={this.moneyminus} />
					<Football Money={this.state.money} moneyminus={this.moneyminus} />
					<Ironman Money={this.state.money} moneyminus={this.moneyminus} />
					<Facebook Money={this.state.money} moneyminus={this.moneyminus} />
					

					
					



					
				
					</div>
				</div>
				
				
				<br/>
				<br/>
				
				<center><div className='Checkout'>
						<Checkout data={this.state} />
					</div>	</center>
				<br/><br/>
				<div>
					<center><button style={this.state.button} onClick = {(event)=>{
						this.finsished()
					}
					} className='special'>Checkout</button></center>
				</div>
				<br/><br/><br/><br/><br/>
				
				
			</div>
			)


	}


}

export default Home;