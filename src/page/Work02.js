import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Work02 = () => {
  return (
	<Container>
		<Navbar />
		<div className='work'>
			<h1>WORK 02</h1>
			<div className='content'>
				<div className='pic'>
					<a href='https://class-ks.netlify.app/'>
					<img src={require('./img/02.jpg')} alt='02' />
					</a>
				</div>

				<div className='desc'>
					<p>. 2023 06</p>
					<p>. HTML, CSS, JAVASCRIPT</p>
					<p>. CLONE CODING : KS벽지</p>
				</div>
			</div>
		</div>

	</Container>
	
  )
}

export default Work02