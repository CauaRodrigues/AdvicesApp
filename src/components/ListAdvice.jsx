import React from "react";
import data from "../data.json";
import "../styles/ListAdvice.css";

const ListAdvice = ({ input }) => {
	const filteredData = data.filter((el) =>
		!input ? el : el.text.toLowerCase().includes(input)
	);

	return (
		<ul className="advices-list">
			{filteredData.map((item) => (
				<li className="advice" key={item.id}>
					{item.text}
				</li>
			))}
		</ul>
	);
};

export default ListAdvice;
