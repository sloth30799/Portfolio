import React from "react";

const Footer = () => {
	return (
		<footer className='footer footer-center p-6 bg-black text-white rounded mt-6' id="footer">
			<div className='grid grid-flow-col gap-4'>
				<a className='link link-hover'>About me</a>
				<a className='link link-hover'>Projects</a>
			</div>
			<div>
				<div className='grid grid-flow-col gap-4'>
					<a href='mailto:sloth30799@gmail.com' target="_blank">
						<i class='fa-solid fa-envelope fa-2xl'></i>
					</a>
					<a href='https://twitter.com/hanyehtun' target="_blank">
						<i class='fa-brands fa-twitter fa-2xl'></i>
					</a>
					<a href='www.linkedin.com/in/hanyehtun30799' target="_blank">
						<i class='fa-brands fa-linkedin fa-2xl'></i>
					</a>
					<a href='https://github.com/sloth30799' target="_blank">
						<i class='fa-brands fa-github fa-2xl'></i>
					</a>
				</div>
			</div>
			<div>
				<p>Copyright © 2023 - All right reserved</p>
				<p>Illustration by <a href="https://icons8.com/illustrations/author/d7G1hwdhjPTV">Semenin Egor</a>,<a href="https://icons8.com/illustrations/author/SBxHVFmfplnQ">Vera Erm</a> and <a href="https://icons8.com/illustrations/author/kP9rc8JiBCcz">Irene M. Ray</a>  from <a href="https://icons8.com/illustrations">Ouch!</a></p>
			</div>
		</footer>
	);
};

export default Footer;
