import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/ListAdvice.css";

const ListAdvice = ({ input }) => {
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
