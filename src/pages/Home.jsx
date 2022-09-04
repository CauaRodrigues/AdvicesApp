import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";

import Service from "../service";
import BoxAdvice from "../components/BoxAdvice";
import IconDice from "../assets/icon-dice.svg";
import Dialog from "../components/Dialog";
import "../styles/Home.css";

const srv = new Service();

const Home = () => {
	let [idAdvice, setIdAdvice] = useState(0);
	let [adviceText, setAdviceText] = useState("Click the button below...");
	let [verifyGenerateAdvice, setVerifyGenerateAdvice] = useState(false);

	async function generateAdvice() {
		setVerifyGenerateAdvice(true);

		await srv.getAdvices().then((res) => {
			if (res) {
				const {
					slip: { id, advice },
				} = res;

				setIdAdvice(id);
				setAdviceText(advice);
			}
		});
	}

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

	const copyToClipboard = () => {
		if (verifyGenerateAdvice) {
			navigator.clipboard.writeText(adviceText);
		}
	};

	return (
		<main>
			<div className="container_boxAdvice">
				<Dialog display={displayDialog} closed={closedDialog} />

				<div className="row-box">
					<BoxAdvice numberAdvice={idAdvice} text={adviceText} />
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
										className="circle_button copy"
										onClick={copyToClipboard}
										title="Copy advice"
										disabled={!verifyGenerateAdvice}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.2}
											stroke="#1f2632"
											className="w-6 h-6"
											width={40}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
											/>
										</svg>
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
