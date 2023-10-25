import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Work04 = () => {
  return (	
	<Container>
		<Navbar />
		<div className='work'>
			<h1>WORK 04</h1>
			<div className='content'>
				<div className='pic'>
					<a href='https://meal-sungsimdang.netlify.app/'>
					<img src={require('./img/04.jpg')} alt='04' />
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

export default Work04