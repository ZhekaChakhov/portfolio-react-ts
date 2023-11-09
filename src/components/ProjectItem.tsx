import { FaCode, FaServer, FaGithub } from "react-icons/fa";

interface Props {
	title: string;
	stack: string;
	details: string;
	link: string;
	gitHubLink: string;
	img: string;
}

const ProjectItem = ({
	title,
	stack,
	details,
	link,
	gitHubLink,
	img,
}: Props) => {
	return (
		<div
			className="
			max-w-xl flex justify-between mx-auto
			bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg
			transform hover:scale-105 ease-in duration-300"
		>
			<div className="w-1/2">
				<h3 className="mb-3 text-2xl font-bold text-[#001b5e]">{title}</h3>
				<div className="sm:w-24 md:w-32 lg:w-64">
					<img className="rounded-xl object-cover" src={img} alt={title} />
				</div>
			</div>

			<div className="w-1/2 pl-4">
				<h1
					className="
					mt-1 md:mt-2 lg:mt-4 
					text-gray-800
					text-sm md:text-md lg:text-xl
					"
				>
					{details}
				</h1>
				<div className="my-1 md:my-2 lg:my-4">
					<div className="flex space-x-2 items-center">
						<FaCode />
						<p
							className="
							text-sm md:text-md lg:text-lg
							my-1 md:my-2
							"
						>
							{stack}
						</p>
					</div>
					<div className="flex space-x-2 items-center">
						<FaServer />
						<a href={link}>
							<p
								className="
								text-sm md:text-md lg:text-lg my-1 md:my-2
								 hover:text-[#001b5e] hover:underline
								"
							>
								Ссылка на Деплой
							</p>
						</a>
					</div>

					<div className="flex space-x-2 items-center">
						<FaGithub />
						<a href={gitHubLink}>
							<p
								className="
								text-sm md:text-md lg:text-lg my-1 md:my-2
								hover:text-[#001b5e] hover:underline
								"
							>
								Ссылка на GitHub
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
