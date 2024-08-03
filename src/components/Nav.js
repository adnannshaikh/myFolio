import React,{Component} from 'react'
// import './nav.css'

class Nav extends Component {
	render(){
		return(
			    <nav className="bg-dark-gray pa3 flex justify-between items-center">
			      <div>
			        {/*<img src={logo} alt="Logo" className="h2 w2" />*/}
			      	<h1>A</h1>
			      </div>
			      <ul className="list flex justify-end items-center">
			        <li className="f3 mh2"><a href="#home" className="white no-underline">Home</a></li>
			        <li className="f2 mh2"><a href="#about" className="white no-underline">About</a></li>
			        <li className="f1 mh2"><a href="#Projects" className="white no-underline">Projects</a></li>
			        <li className="f3 mh2"><a href="#contact" className="white no-underline">Contact</a></li>
			      </ul>
			    </nav>
		)
	}
}
export default Nav