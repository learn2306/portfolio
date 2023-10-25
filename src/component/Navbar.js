import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	<Container>
		<div className='Navbar'>
		<h1>PORTFOLIO</h1>				
			<div className="context">				
				{/* <Link to='/' className='nav-main'>MAIN</Link> */}			
				<Link to='/about' className='nav-about'>ABOUT</Link>
				<Link to='/' className='nav-work'>WORK</Link>
				<Link to='/work01' className='nav-work01'>2023. 01</Link>
				<Link to='/work02' className='nav-work0'>02</Link>
				<Link to='/work03' className='nav-work0'>03</Link>
				<Link to='/work04' className='nav-work0'>04</Link>
				<Link to='/work05' className='nav-work0'>05</Link>
				<Link to='/work06' className='nav-work0'>06</Link>
			</div>			
		</div>

	</Container>
	
  )
}

export default Navbar