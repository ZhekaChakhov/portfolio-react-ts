import ProjectItem from "./ProjectItem";

interface Data {
	title: string;
	stack: string;
	details: string;
	link: string;
	gitHubLink: string;
	img: string;
}

const data: Data[] = [
	{
		title: "2048",
		stack: "React",
		details: `Копия веб-игры 2048 на React
		(можно играть только с компьютера или ноутбука)`,
		link: "https://2048-one-sandy.vercel.app/",
		gitHubLink: "https://github.com/ZhekaChakhov/2048",
		img: "img/2048.png",
	},
	{
		title: "Калькулятор",
		stack: "React",
		details: `Онлайн калькулятор на React`,
		link: "https://zhekachakhov.github.io/",
		gitHubLink:
			"https://github.com/ZhekaChakhov/ZhekaChakhov.github.io/tree/master",
		img: "img/calc.png",
	},
	{
		title: "Покемоны",
		stack: "React, axios, Material UI",
		details: `Карточки с информацией о покемонах на React
		с использованием poke API.`,
		link: "https://pokemon-dusky-zeta.vercel.app/",
		gitHubLink: "https://github.com/ZhekaChakhov/pokemon",
		img: "img/pokemon.png",
	},
	{
		title: "Рик и Морти",
		stack: "Nuxt.js, Pinia, axios, Tailwind CSS",
		details: `Карточки с информацие о персонажах и эпизодах
		сериала Рик и Морти с использованием The Rick and Morty API,`,
		link: "https://rick-and-morty-chakhov.vercel.app/",
		gitHubLink: "https://github.com/ZhekaChakhov/RickandMorty",
		img: "img/rickandmorty.png",
	},
];

const Projects = () => {
	return (
		<div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
			<h1 className="text-4xl font-bold text-center text-[#001b5e]">Проекты</h1>
			<p className="text-2xl text-center py-8 font-normal text-stone-500">
				Мои пет-проекты:
			</p>
			<div className="grid md:grid-cols-2 gap-7">
				{data.map((item, index) => (
					<ProjectItem
						key={index}
						title={item.title}
						stack={item.stack}
						details={item.details}
						link={item.link}
						gitHubLink={item.gitHubLink}
						img={item.img}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
