import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";

import BoxAdvice from "../components/BoxAdvice";

import IconDice from "../assets/icon-dice.svg";
import IconSearchTextAdvice from "../assets/searchText.png";
import Dialog from "../components/Dialog";
import "../styles/Home.css";

const Home = () => {
	let [id, setId] = useState(0);
	let [advice, setAdvice] = useState("Click the button below...");

	const generateAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then(({ data: { slip } }) => {
				setId(slip.id);
				setAdvice(slip.advice);
			});
	};

	let slideNumber = 1;

	const onChangeSlideRight = () => {
		if (slideNumber === 1) {
			slideNumber++;
			window.location.hash = "#slides__2";
		} else if (slideNumber === 2) {
			slideNumber++;
			window.location.hash = "#slides__3";
		} else if (slideNumber === 3) {
			slideNumber = 1;
			window.location.hash = "#slides__1";
		}
	};

	const onChangeSlideLeft = () => {
		if (slideNumber === 1) {
			slideNumber = 3;
			window.location.hash = "#slides__3";
		} else if (slideNumber === 3) {
			slideNumber--;
			window.location.hash = "#slides__2";
		} else if (slideNumber === 2) {
			slideNumber--;
			window.location.hash = "#slides__1";
		}
	};

	const [displayDialog, setDisplayDialog] = useState("none");
	const openDialog = () => setDisplayDialog("flex");
	const closedDialog = () => setDisplayDialog("none");

	useEffect(() => {
		window.location.hash = "#slides__1";
	}, []);

	return (
		<main>
			<div className="container_boxAdvice">
				<Dialog display={displayDialog} closed={closedDialog} />

				<div className="row-box">
					<BoxAdvice numberAdvice={id} text={advice} />
				</div>

				<div className="row-button">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="chevron slide__prev"
						title="Prev"
						size="lg"
						onClick={onChangeSlideLeft}
					/>

					<div className="slider-container">
						<div className="slider">
							<div className="slides">
								<div id="slides__1" className="slide">
									<button
										className="circle_button"
										onClick={generateAdvice}
										title="Generate Advice"
									>
										<img src={IconDice} alt="Button Advice" />
									</button>
								</div>

								<div id="slides__2" className="slide">
									<button
										className="circle_button"
										onClick={openDialog}
										title="Search Advice"
									>
										<FontAwesomeIcon
											icon={faSearch}
											size="2x"
											className="iconSearch_color"
										/>
									</button>
								</div>

								<div id="slides__3" className="slide">
									<button
										className="circle_button"
										onClick={() => console.log("search text")}
										title="Search Advice by text"
									>
										<img
											src={IconSearchTextAdvice}
											className="search-number"
											alt="Button search advice by text"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>

					<FontAwesomeIcon
						icon={faChevronRight}
						className="chevron slide__next"
						title="Next"
						size="lg"
						onClick={onChangeSlideRight}
					/>
				</div>
			</div>

			<footer>
				<span>
					Developed by{" "}
					<a
						href="https://github.com/CauaRodrigues"
						target="_blank"
						rel="noreferrer"
					>
						Cauã Rodrigues
					</a>
				</span>
			</footer>
		</main>
	);
};

export default Home;
