import { NavLink } from "react-router-dom"
import NotFoundImage from "../assets/svg/404.svg"

const NotFound = () => {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen px-3 space-y-6">
			<img
				src={NotFoundImage}
				className="max-w-[400px] w-[50%] min-w-[200px]"
				alt=""
			/>

			<div className="space-y-3 text-center">
				<h4 className="text-2xl font-medium font-title">
					Something's Missing!
				</h4>
				<p className="text-sm font-body">
					You're seeing this page because the URL you entered doesn't
					exists. Yet.
				</p>
			</div>

			<NavLink to="/">
				<button className="btn btn-primary">Back TO home</button>
			</NavLink>
		</main>
	)
}

export default NotFound
