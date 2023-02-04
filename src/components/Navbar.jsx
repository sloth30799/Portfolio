import React from "react";

const Navbar = () => {
	return (
		<div className='navbar bg-white font-bold'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl' href="#">Welcome!</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1 gap-3'>
					<li>
						<a href="#about">About me</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<a href='#footer'>
						<li className='hidden md:block'>
							<button className='bg-black text-white'>Contact me</button>
						</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
