import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Work03 = () => {
  return (
	<Container>
		<Navbar />
		<div className='work'>
			<h1>WORK 03</h1>
			<div className='content'>
				<div className='pic'>
					<a href='https://reactclass-shopping.netlify.app/'>
					<img src={require('./img/03.jpg')} alt='03' />
					</a>
				</div>
				<div className='desc'>
					<p>. 2023 09</p>
					<p>. REACT</p>					
				</div>
			</div>
		</div>
	</Container>
	
  )
}

export default Work03