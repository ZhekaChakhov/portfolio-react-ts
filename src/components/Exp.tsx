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
		details: `Направление: Прикладная математика, фундаментальная информатика и программирование,
		бакалавриат, окончил в 2023 году.
		За время обучения занимался разработкой
		и поддержкой веб-приложений для университетских проектов.`,
	},
	{
		year: 2023,
		title: "ASTON",
		duration: "6 месяцев",
		details: `Был на стажировке по вакансии "JavaSript Developer" в компании ASTON.
		Компания занимается разработкой ПО на заказ, на рынке с 2007г.
		За время стажировки проходил онлайн интенсивы по JavaScript и React,
		по ходу интенсивов проводились промежуточные тестирования
		с последующим отсеиванием кандидатов.
		Затем последовал этап лаборатории,
		где кандидаты в очном формате занимались проектной деятельностью.
		По итогам стажировки выбрали другого кандидата.
		`,
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
