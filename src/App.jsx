import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SkillIcons from "./components/SkillIcons";
import "./output.css";

function App() {
	return (
		<div className='tracking-wide'>
			<header id='header'>
				<Navbar />
			</header>
			<main
				className='container m-auto p-6 md:p-0 h-1/5'
				id='about'
			>
				<Hero />
			</main>
			<div className='container m-auto flex flex-col gap-6'>
				<h2 className='text-4xl font-bold'>My Skills</h2>
				<div className='container m-auto flex flex-col gap-6 justify-center items-center md:flex-row'>
					<Skill
						img={
							"/img/urban-line-man-sitting-on-chair-and-typing-on-laptop.png"
						}
						title={"Static Responsive Websites"}
						caption={
							"Get ready for a smooth and seamless website experience on any device! Responsive design is essential in today's multi-device world, as it ensures a consistent and seamless user experience, regardless of the device used to access a website. Let's work together to make your website stand out!"
						}
					/>
					<Skill
						img={"/img/urban-line-scientists-studying-atom-by-the-computer.png"}
						title={"Full stack Web Apps"}
						caption={
							"Bring your ideas to life with the help of a skilled developer! I bring a collaborative approach to software development and work closely with clients and team members to turn their ideas into tangible, functional software. Let's work together to bring your software vision to life and make an impact!"
						}
					/>
				</div>
				<div className='container m-auto flex justify-center p-6'>
					<SkillIcons />
				</div>
			</div>
			<div className='container m-auto flex flex-col gap-6'>
				<h2 className='text-4xl font-bold'>Latest Projects</h2>
				<div
					className='container m-auto flex flex-col gap-6 items-center mt-6'
					id='projects'
				>
					<Project
						link={"https://wanderer.onrender.com/"}
						img={"https://i.imgur.com/zhY50vE.png"}
						title={"Wanderer"}
						caption={
							"Node.js, Express.js, MongoDb, React - Backpacker App with travel planning and blog posting."
						}
					/>
					<Project
						link={"https://tackletalk.onrender.com/"}
						img={"https://i.imgur.com/fc6cwbQ.png"}
						title={"TackleTalk"}
						caption={
							"Node.js, Express.js, MongoDb, Ejs - Social App for football fans."
						}
					/>
					<Project
						link={"https://dinner-dice.onrender.com/"}
						img={"https://i.imgur.com/0IhyYXp.png?1"}
						title={"Dinner-Dice"}
						caption={
							"Boostrap, React.js, JavaScript - This tool is designed to help you come up with new and exciting recipe ideas by generating random recipes for you to try."
						}
					/>
					<Project
						link={"https://akino.netlify.app/"}
						img={"https://i.imgur.com/9Dkp88W.png?1"}
						title={"Akino Restaurant"}
						caption={"HTML, CSS, JS - Responsive Website for Akino Restaurant."}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
