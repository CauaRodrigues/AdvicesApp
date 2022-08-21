import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../styles/Dialog.css";

const Dialog = ({ display, closed }) => {
	let windowDialog = document.getElementById("windowDialog");
	window.onclick = ({ target }) => (target === windowDialog ? closed() : null);

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

						<input type="text" />
					</div>

					<FontAwesomeIcon
						icon={faTimes}
						onClick={closed}
						className="btn-closed"
						size="lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
