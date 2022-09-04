import React, { useState, useEffect } from "react";

import Service from "../service";
import "../styles/ListAdvice.css";

const srv = new Service();

const ListAdvice = ({ input }) => {
	const [adviceList, setAdviceList] = useState([]);

	useEffect(() => {
		if (input) {
			(async function () {
				await srv.searchAdvice(input).then((res) => {
					if (res) {
						const { slips } = res;
						setAdviceList(slips);
					} else {
						setAdviceList([]);
					}
				});
			})();
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
