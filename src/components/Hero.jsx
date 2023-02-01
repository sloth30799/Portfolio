import React from "react";

const Hero = () => {
	return (
		<div className='card md:card-side bg-white shadow-xl border-4 p-3 m-auto my-12 md:p-6'>
			<figure>
				<img
					src='/img/urban-line-no-connection.png'
					alt='Illustration by Semenin Egor from Ouch!'
				/>
			</figure>
			<div className='card-body md:w-1/2'>
				<h2 className='card-title text-2xl font-bold'>Han Ye Htun </h2>
				<span className='text-accent font-lg font-semibold'>
					Software Engineer
				</span>
				<p>
					Hi there! My name is Han Ye Htun, and I am a driven and passionate
					software engineer, always on the lookout for new challenges and
					opportunities to learn and grow in my field. With my background in
					medicine, I have strong foundation in problem-solving and critical
					thinking skills.
					<br />
					<br />I am committed to using my skills and knowledge to create
					innovative solutions that make a positive impact on people's lives. If
					you have a project that aligns with my passions and skills, I would
					love to connect and see how we can work together to make a difference.
				</p>
				<div className='card-actions justify-end'>
					<a href='#footer'>
						<button className='btn bg-black text-white'>Contact me</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
