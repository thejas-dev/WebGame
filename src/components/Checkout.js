import React from 'react'
import './Products.css'
import Insta from './products/Images/Insta.jpg'
import Youtube from './products/Images/Youtube.jpg'

function Checkout(props){	
	let url = 'https://www.instagram.com/invites/contact/?i=1g3qt7q0waw08&utm_content=o8uqri7'
	let url2 = 'https://youtube.com/channel/UCD_KmS33ocaXBRLMy1sS54g'
		return(

			<div style={{marginLeft:'10px',marginRight:'10px'}} >
			<div style={{color:'white'}} className={props.data.thank.display} >
			You Spent Elon Musk Money in {props.data.countdown} Seconds
			</div>
			<br/>
			<br/>
			<fieldset>
				<legend className='ui header' style={{color:'white',border:'2px solid rgb(24, 213, 219)',margin:'2px',padding:'9px',fontFamily:'Verdana',borderRadius:'20px'}}>
					In Cart
				</legend>
				<table className={props.data.datadis.data}>
					<thead>
						<tr>
							<th className='data' >Product</th>
							<th className='data' >Quantity</th>
							<th className='data' >Price</th>
						</tr>
					</thead>
					<tbody>
						<tr style={props.data.Aashirvad?.display} >
							<td className='data' >Aashirvad Goduma Mavu</td>
							<td className='data' >{props.data.Aashirvad?.Quantity}</td>
							<td className='data' >{props.data.Aashirvad?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Ammacycle?.display} >
							<td className='data' >Ammacycle</td>
							<td className='data' >{props.data.Ammacycle?.Quantity}</td>
							<td className='data' >{props.data.Ammacycle?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Applewatch?.display} >
							<td className='data' >Apple Watch Series 7</td>
							<td className='data' >{props.data.Applewatch?.Quantity}</td>
							<td className='data' >{props.data.Applewatch?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Asuslap?.display} >
							<td className='data' >Asus Vivobook Laptop</td>
							<td className='data' >{props.data.Asuslap?.Quantity}</td>
							<td className='data' >{props.data.Asuslap?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Audi?.display} >
							<td className='data' >Audi RS 7</td>
							<td className='data' >{props.data.Audi?.Quantity}</td>
							<td className='data' >{props.data.Audi?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Bajaj?.display} >
							<td className='data' >Bajaj Pulsar 150</td>
							<td className='data' >{props.data.Bajaj?.Quantity}</td>
							<td className='data' >{props.data.Bajaj?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Benz?.display} >
							<td className='data' >Benz Maybach GLS</td>
							<td className='data' >{props.data.Benz?.Quantity}</td>
							<td className='data' >{props.data.Benz?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Bike?.display} >
							<td className='data' >Marcus Limited Edition Bike</td>
							<td className='data' >{props.data.Bike?.Quantity}</td>
							<td className='data' >{props.data.Bike?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Biriyani?.display} >
							<td className='data' >Veg Dum Biriyani</td>
							<td className='data' >{props.data.Biriyani?.Quantity}</td>
							<td className='data' >{props.data.Biriyani?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Biscuit?.display} >
							<td className='data' >Bounce Biscuit</td>
							<td className='data' >{props.data.Biscuit?.Quantity}</td>
							<td className='data' >{props.data.Biscuit?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Boeing?.display} >
							<td className='data' >Boeing 737-800 Aeroplane</td>
							<td className='data' >{props.data.Boeing?.Quantity}</td>
							<td className='data' >{props.data.Boeing?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Book?.display} >
							<td className='data' >Wings Of Fire Book</td>
							<td className='data' >{props.data.Book?.Quantity}</td>
							<td className='data' >{props.data.Book?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Broom?.display} >
							<td className='data' >Broom</td>
							<td className='data' >{props.data.Broom?.Quantity}</td>
							<td className='data' >{props.data.Broom?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Bucketbiriyani?.display} >
							<td className='data' >Bucket Biriyani</td>
							<td className='data' >{props.data.Bucketbiriyani?.Quantity}</td>
							<td className='data' >{props.data.Bucketbiriyani?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Bugatti?.display} >
							<td className='data' >Bugatti Veyron Sports Car</td>
							<td className='data' >{props.data.Bugatti?.Quantity}</td>
							<td className='data' >{props.data.Bugatti?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Bun?.display} >
							<td className='data' >Burger Bun</td>
							<td className='data' >{props.data.Bun?.Quantity}</td>
							<td className='data' >{props.data.Bun?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Cake?.display} >
							<td className='data' >Black Forest Cake</td>
							<td className='data' >{props.data.Cake?.Quantity}</td>
							<td className='data' >{props.data.Cake?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Cbiriyani?.display} >
							<td className='data' >Chicken Dum Biriyani</td>
							<td className='data' >{props.data.Cbiriyani?.Quantity}</td>
							<td className='data' >{props.data.Cbiriyani?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Cfriedrice?.display} >
							<td className='data' >Chicken Fried Rice</td>
							<td className='data' >{props.data.Cfriedrice?.Quantity}</td>
							<td className='data' >{props.data.Cfriedrice?.price}</td>
						</tr>
						<tr style={props.data.Cow?.display} >
							<td className='data' >Cow</td>
							<td className='data' >{props.data.Cow?.Quantity}</td>
							<td className='data' >{props.data.Cow?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Cycle?.display} >
							<td className='data' >Gear Cycle</td>
							<td className='data' >{props.data.Cycle?.Quantity}</td>
							<td className='data' >{props.data.Cycle?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Diamond?.display} >
							<td className='data' >10g of Diamond</td>
							<td className='data' >{props.data.Diamond?.Quantity}</td>
							<td className='data' >{props.data.Diamond?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Earbuds?.display} >
							<td className='data' >JBL Earbuds</td>
							<td className='data' >{props.data.Earbuds?.Quantity}</td>
							<td className='data' >{props.data.Earbuds?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Earpods?.display} >
							<td className='data' >Boat Earpods</td>
							<td className='data' >{props.data.Earpods?.Quantity}</td>
							<td className='data' >{props.data.Earpods?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.F1?.display} >
							<td className='data' >Formula F1 Race Car</td>
							<td className='data' >{props.data.F1?.Quantity}</td>
							<td className='data' >{props.data.F1?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Facebook?.display} >
							<td className='data' >Facebook</td>
							<td className='data' >{props.data.Facebook?.Quantity}</td>
							<td className='data' >{props.data.Facebook?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Farmland?.display} >
							<td className='data' >One Acre of Farm Land</td>
							<td className='data' >{props.data.Farmland?.Quantity}</td>
							<td className='data' >{props.data.Farmland?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Football?.display} >
							<td className='data' >Benz Football Stadium</td>
							<td className='data' >{props.data.Football?.Quantity}</td>
							<td className='data' >{props.data.Football?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Friedrice?.display} >
							<td className='data' >Veg Fried Rice</td>
							<td className='data' >{props.data.Friedrice?.Quantity}</td>
							<td className='data' >{props.data.Friedrice?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Goat?.display} >
							<td className='data' >Goat</td>
							<td className='data' >{props.data.Goat?.Quantity}</td>
							<td className='data' >{props.data.Goat?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Gold?.display} >
							<td className='data' >100g of Gold</td>
							<td className='data' >{props.data.Gold?.Quantity}</td>
							<td className='data' >{props.data.Gold?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Helicopter?.display} >
							<td className='data' >Helicopter</td>
							<td className='data' >{props.data.Helicopter?.Quantity}</td>
							<td className='data' >{props.data.Helicopter?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Honey?.display} >
							<td className='data' >Dabur Honey 250g</td>
							<td className='data' >{props.data.Honey?.Quantity}</td>
							<td className='data' >{props.data.Honey?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Hut?.display} >
							<td className='data' >Beach Hut</td>
							<td className='data' >{props.data.Hut?.Quantity}</td>
							<td className='data' >{props.data.Hut?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Iphone?.display} >
							<td className='data' >iPhone 13 pro</td>
							<td className='data' >{props.data.Iphone?.Quantity}</td>
							<td className='data' >{props.data.Iphone?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Iplteam?.display} >
							<td className='data' >One Ipl Team</td>
							<td className='data' >{props.data.Iplteam?.Quantity}</td>
							<td className='data' >{props.data.Iplteam?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Ironman?.display} >
							<td className='data' >Ironman Suit</td>
							<td className='data' >{props.data.Ironman?.Quantity}</td>
							<td className='data' >{props.data.Ironman?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Jet?.display} >
							<td className='data' >Private Jet</td>
							<td className='data' >{props.data.Jet?.Quantity}</td>
							<td className='data' >{props.data.Jet?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Kingfisher?.display} >
							<td className='data' >Kingfisher Beer</td>
							<td className='data' >{props.data.Kingfisher?.Quantity}</td>
							<td className='data' >{props.data.Kingfisher?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Lipstick?.display} >
							<td className='data' >Pure Color Desire Lipstick</td>
							<td className='data' >{props.data.Lipstick?.Quantity}</td>
							<td className='data' >{props.data.Lipstick?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Luxuryhouse?.display} >
							<td className='data' >Luxury House</td>
							<td className='data' >{props.data.Luxuryhouse?.Quantity}</td>
							<td className='data' >{props.data.Luxuryhouse?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Marshallbuds?.display} >
							<td className='data' >Marshall Earbuds</td>
							<td className='data' >{props.data.Marshallbuds?.Quantity}</td>
							<td className='data' >{props.data.Marshallbuds?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Mask?.display} >
							<td className='data' >Mask</td>
							<td className='data' >{props.data.Mask?.Quantity}</td>
							<td className='data' >{props.data.Mask?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Mbiriyani?.display} >
							<td className='data' >Mutton Biriyani</td>
							<td className='data' >{props.data.Mbiriyani?.Quantity}</td>
							<td className='data' >{props.data.Mbiriyani?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Nano?.display} >
							<td className='data' >Tata Nano</td>
							<td className='data' >{props.data.Nano?.Quantity}</td>
							<td className='data' >{props.data.Nano?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Oppofind?.display} >
							<td className='data' >Oppo Find X2</td>
							<td className='data' >{props.data.Oppofind?.Quantity}</td>
							<td className='data' >{props.data.Oppofind?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Opporeno?.display} >
							<td className='data' >Opporeno 7 Pro</td>
							<td className='data' >{props.data.Opporeno?.Quantity}</td>
							<td className='data' >{props.data.Opporeno?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Park?.display} >
							<td className='data' >Amusement Park</td>
							<td className='data' >{props.data.Park?.Quantity}</td>
							<td className='data' >{props.data.Park?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Pig?.display} >
							<td className='data' >Pig</td>
							<td className='data' >{props.data.Pig?.Quantity}</td>
							<td className='data' >{props.data.Pig?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Platinum?.display} >
							<td className='data' >100g of Platinum</td>
							<td className='data' >{props.data.Platinum?.Quantity}</td>
							<td className='data' >{props.data.Platinum?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Realme?.display} >
							<td className='data' >Realme GT Neo 3</td>
							<td className='data' >{props.data.Realme?.Quantity}</td>
							<td className='data' >{props.data.Realme?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Rolex?.display} >
							<td className='data' >Premium Rolex Watch</td>
							<td className='data' >{props.data.Rolex?.Quantity}</td>
							<td className='data' >{props.data.Rolex?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Royalenfield?.display} >
							<td className='data' >Royalenfield</td>
							<td className='data' >{props.data.Royalenfield?.Quantity}</td>
							<td className='data' >{props.data.Royalenfield?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.RR?.display} >
							<td className='data' >Rolls Royce</td>
							<td className='data' >{props.data.RR?.Quantity}</td>
							<td className='data' >{props.data.RR?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Ship?.display} >
							<td className='data' >Cruise Ship</td>
							<td className='data' >{props.data.Ship?.Quantity}</td>
							<td className='data' >{props.data.Ship?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Silver?.display} >
							<td className='data' >100g of Silver</td>
							<td className='data' >{props.data.Silver?.Quantity}</td>
							<td className='data' >{props.data.Silver?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Slippers?.display} >
							<td className='data' >Slippers</td>
							<td className='data' >{props.data.Slippers?.Quantity}</td>
							<td className='data' >{props.data.Slippers?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Speaker?.display} >
							<td className='data' >Rolex Marshall Speaker</td>
							<td className='data' >{props.data.Speaker?.Quantity}</td>
							<td className='data' >{props.data.Speaker?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Tea?.display} >
							<td className='data' >Chaya</td>
							<td className='data' >{props.data.Tea?.Quantity}</td>
							<td className='data' >{props.data.Tea?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Teddy?.display} >
							<td className='data' >Pinky Teddy</td>
							<td className='data' >{props.data.Teddy?.Quantity}</td>
							<td className='data' >{props.data.Teddy?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Theatre?.display} >
							<td className='data' >Cinema Theatre</td>
							<td className='data' >{props.data.Theatre?.Quantity}</td>
							<td className='data' >{props.data.Theatre?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Vivo?.display} >
							<td className='data' >Vivo V21 5G</td>
							<td className='data' >{props.data.Vivo?.Quantity}</td>
							<td className='data' >{props.data.Vivo?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Washing?.display} >
							<td className='data' >Washing Machine</td>
							<td className='data' >{props.data.Washing?.Quantity}</td>
							<td className='data' >{props.data.Washing?.price.toLocaleString()}</td>
						</tr>
						<tr style={props.data.Wearphones?.display} >
							<td className='data' >Boat Wired Earphones</td>
							<td className='data' >{props.data.Wearphones?.Quantity}</td>
							<td className='data' >{props.data.Wearphones?.price.toLocaleString()}</td>
						</tr>
					
					</tbody>
				</table>

</fieldset>
	<br/><br/><br/>
		<div style={{color:'white'}} className={props.data.thank.display} >
			Thank You For Visiting Our Website !
			Don't Forget To Follow Us In Social Medias
			<br/> <br/><br/>
			<hr/>
			<div className='ui tiny images' style={{padding:'20px'}}>
			<a href={url} >
				<label style={{color:'white'}}>Insta</label>
				<img className='ui image' src={Insta} alt='not found'/>
			</a>

			<a href={url2} >
				<label style={{color:'white'}}>Youtube</label>
				<img className='ui image' src={Youtube} alt='not found'/>
			</a>
			</div>
			<hr/>

		</div>

			</div>

			)
	}


export default Checkout;