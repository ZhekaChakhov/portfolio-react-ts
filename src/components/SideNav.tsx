import { useState } from "react";
import {
	AiOutlineMenu,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const SideNav = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			<AiOutlineMenu
				size={20}
				onClick={handleNav}
				className="
        absolute top-4 left-4 z-[99]
        sm:hidden cursor-pointer hover:scale-110"
			/>
			{nav ? (
				<div
					className="
          fixed w-full h-screen bg-white/90
          flex flex-col justify-center items-center z-20"
				>
					<a
						onClick={handleNav}
						href="#main"
						className="
            w-[65%] flex justify-center items-center
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-200"
					>
						<AiOutlineHome size={20} />
						<span className="pl-4">Главная</span>
					</a>
					<a
						onClick={handleNav}
						href="#exp"
						className="
            w-[65%] flex justify-center items-center
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-200"
					>
						<GrProjects size={20} />
						<span className="pl-4">Опыт</span>
					</a>
					<a
						onClick={handleNav}
						href="#projects"
						className="
            w-[65%] flex justify-center items-center
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-200"
					>
						<AiOutlineProject size={20} />
						<span className="pl-4">Проекты</span>
					</a>
					<a
						onClick={handleNav}
						href="#main"
						className="
            w-[65%] flex justify-center items-center
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-200"
					>
						<BsPerson size={20} />
						<span className="pl-4">Резюме</span>
					</a>
					<a
						onClick={handleNav}
						href="#contact"
						className="
            w-[65%] flex justify-center items-center
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-200"
					>
						<AiOutlineMail size={20} />
						<span className="pl-4">Контакты</span>
					</a>
				</div>
			) : (
				""
			)}
			<div className="hidden md:block fixed top-[25%] z-10">
				<div className="flex flex-col">
					<a
						href="#main"
						className="
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-300"
					>
						<AiOutlineHome size={20} />
					</a>
					<a
						href="#edu"
						className="
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-300"
					>
						<GrProjects size={20} />
					</a>
					<a
						href="#projects"
						className="
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-300"
					>
						<AiOutlineProject size={20} />
					</a>
					<a
						href="#main"
						className="
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-300"
					>
						<BsPerson size={20} />
					</a>
					<a
						onClick={handleNav}
						href="#contact"
						className="
            rounded-full shadow-lg bg-gray-100
            shadow-gray-400 m-2 p-4 cursor-pointer
            hover:scale-110 ease-in duration-300"
					>
						<AiOutlineMail size={20} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
