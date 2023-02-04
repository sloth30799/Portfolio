import React from "react";

const Project = ({ link, img, title, caption }) => {
	return (
		<div className='card card-side w-full border-black border-b-2 py-6 rounded-none'>
			<figure className="w-1/2">
				<img
					src={img}
					alt='Website images'
				/>
			</figure>
			<div className='card-body w-1/2'>
				<h2 className='card-title text-darkBlue font-bold'>{title}</h2>
				<p>{caption}</p>
				<div className='card-actions justify-end'>
					<a href={link} target="_blank">
						<button className='btn bg-black text-white'>Link</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
