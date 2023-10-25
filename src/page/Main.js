import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Main = () => {
  return (
	<Container>
		<Navbar />	
		<div className='main'>
			<h1>
				안녕하세요. <br></br>
				이현진의 포트폴리오입니다.
			</h1>
		
		</div>			
	</Container>	
  )
}

export default Main