const Toast = ({ message, open }) => {
	return (
		<>
			{open && (
				<div className="toast toast-top toast-center">
					<div className="alert">
						<span className="text-nowrap">{message}</span>
					</div>
				</div>
			)}
		</>
	)
}

export default Toast
