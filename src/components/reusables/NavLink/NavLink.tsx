import React from 'react'
import { Link } from 'react-router-dom';
import './navlink.css'

type NavLinkProp = {
	navLink: string;
	navText: string;
}

const NavLink: React.FC<NavLinkProp> = ({ navLink, navText }) => {
	return (
		<div className='nav'>
			<Link to={navLink}>
				<li>{navText}</li>
			</Link>
		</div>
	)
}

export default NavLink;
