import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Work06 = () => {
  return (
	<Container >
		<Navbar /> 		
		<div className='work'>
			<h1>WORK 06</h1>
			<div className='content'>
				<div className='pic'>
					<a href='https://class-netflix.netlify.app/'>
					<img src={require('./img/06.jpg')} alt='06' />
					</a>
				</div>

				<div className='desc'>
					<p>. 2023 10</p>
					<p>. REACT 연습</p>
				</div>
			</div>
		</div>
	</Container>
	
  )
}

export default Work06