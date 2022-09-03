import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "../styles/Dialog.css";
import ListAdvice from "./ListAdvice";

const Dialog = ({ display, closed }) => {
	let windowDialog = document.getElementById("windowDialog");
	window.onclick = ({ target }) => (target === windowDialog ? closed() : null);

	const [inputAdvice, setInputAdvice] = useState("");
	let inputHandler = (e) => {
		if (e) {
			var lowerCase = e.target.value.toLowerCase();
			setInputAdvice(lowerCase);
		} else {
			setInputAdvice("");
		}
	};

	return (
		<div style={{ display: display }} className="dialog" id="windowDialog">
			<div className="dialog__content">
				<div className="dialog-options">
					<div className="box-field">
						<FontAwesomeIcon
							icon={faSearch}
							className="btn-find"
							size="lg"
							onClick={() => console.log("procurar")}
						/>

						<div className="field">
							<input
								type="text"
								placeholder="Search advice"
								onChange={inputHandler}
							/>
							<span></span>
						</div>
					</div>

					<FontAwesomeIcon
						icon={faTimes}
						onClick={() => {
							inputHandler("");
							setInputAdvice("");
							closed();
						}}
						className="btn-closed"
						size="lg"
					/>
				</div>

				<ListAdvice input={inputAdvice} />
			</div>
		</div>
	);
};

export default Dialog;
