import ExpItem from "./ExpItem";

interface Data {
	year: number;
	title: string;
	duration: string;
	details: string;
}

const data: Data[] = [
	{
		year: 2019,
		title: "СПбГУ",
		duration: "4 года",
		details: `A paragraph is a self-contained unit of discourse in writing dealing
		with a particular point or idea. Though not required by the
		orthographic conventions of any language with a writing system,
		paragraphs are a conventional means of organizing extended segments
		of prose.`,
	},
	{
		year: 2023,
		title: "ASTON",
		duration: "6 месяцев",
		details: `A paragraph is a self-contained unit of discourse in writing dealing
		with a particular point or idea. Though not required by the
		orthographic conventions of any language with a writing system,
		paragraphs are a conventional means of organizing extended segments
		of prose.`,
	},
];

const Exp = () => {
	return (
		<div id="exp" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
				Опыт
			</h1>
			{data.map((item, index) => (
				<ExpItem
					key={index}
					year={item.year}
					title={item.title}
					duration={item.duration}
					details={item.details}
				/>
			))}
		</div>
	);
};

export default Exp;
