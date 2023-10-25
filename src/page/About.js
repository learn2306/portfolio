import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const About = () => {
  return (
	<Container>
		<Navbar />
		<div className='about'>
			<h1>About</h1>
			<div className='name'>
				이현진 ( Lee Hyun Jin ) <br></br>
				이젠컴퓨터아카데미 수료 ( 2023. 4. 14 - 10. 23 ) <br></br> 
				- ( 스마트웹 & 콘텐츠개발 ) Java기반 웹 프레임워크 개발자 양성과정<br></br>   
				- HTML, CSS, JAVASCRIPT, FIREBASE, REACT, PHOTOSHOP, XD
			</div>
		</div>		
	</Container>	
  )
}

export default About