import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import data from "../data.json";
import "../styles/ListAdvice.css";

const ListAdvice = ({ input }) => {
	// // const filteredData = data.filter((el) =>
	// // 	!input
	// // 		? el
	// // 		: el.text.toLowerCase().includes(input) ||
	// // 		  el.id.toString().includes(input)
	// // );

	const [adviceList, setAdviceList] = useState([]);

	useEffect(() => {
		if (input) {
			axios
				.get(`https://api.adviceslip.com/advice/search/${input}`)
				.then(({ data }) => {
					if (data) {
						setAdviceList(data.slips);
					} else {
						setAdviceList([]);
					}
				});
		} else {
			setAdviceList([]);
		}
	}, [input]);

	return (
		<ul className="advices-list">
			{adviceList
				? adviceList.map(({ id, advice }) => (
						<li className="advice" key={id}>
							<div className="box-id box">
								<span className="id">{id}</span>
							</div>

							<div className="box-text box">
								<span className="text">{advice}</span>
							</div>
						</li>
				  ))
				: null}
		</ul>
	);
};

export default ListAdvice;
