import React from "react";

const Project = ({ link, img, title, caption }) => {
	return (
		<div className='card card-side w-2/3 border-black border-2 shadow-xl p-3'>
			<figure className="w-1/2">
				<img
					src={img}
					alt='Website images'
				/>
			</figure>
			<div className='card-body w-1/2'>
				<h2 className='card-title'>{title}</h2>
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
