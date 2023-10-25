import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Work01 = () => {
  return (
	<Container>
		<Navbar />
		<div className='work'>
			<h1>WORK 01</h1>
			<div className='content'>			
				<div className='pic'>
					<a href='https://yhmall.netlify.app/'>
					<img src={require('./img/01.jpg')} alt='01'/>
					</a>
				</div>

				<div className='desc'>
					<p>. 2023 06</p>
					<p>. HTML, CSS</p>
					<p>. CLONE CODING : YOUNHYUN MALL</p>
				</div>
			</div>			
		</div>
		
	</Container>
	
  )
}

export default Work01