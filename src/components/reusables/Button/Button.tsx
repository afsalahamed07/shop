import React from 'react'
import './button.css';

type ButtonProps = {
	buttonText: string;
	onClick: () => void;
}

export default const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
	return (
		<div className='btn'>
			<button onClick={onClick}>{buttonText}</button>
		</div>
	);
};
