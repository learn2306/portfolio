import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Work05 = () => {
  return (
	<Container>
		<Navbar />
		<div className='work'>
			<h1>WORK 05</h1>
			<div className='content'>
				<div className='pic'>
					<a href='https://oneulrest.netlify.app/'>
					<img src={require('./img/05.jpg')} alt='05' />
					</a>
				</div>	

				<div className='desc'>
					<p>. 2023 10</p>
					<p>. HTML, CSS, JAVASCRIPT</p>
					<p>. CLONE CODING : O'NEUL RESTAURANT</p>
				</div>			
			</div>			
		</div>
	</Container>
  )
}

export default Work05