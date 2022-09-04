import axios from "axios";

const api = axios.create({
	baseURL: "https://api.adviceslip.com",
});

export default class Service {
	async getAdvices() {
		const response = await api.get("/advice");
		if (response.data) {
			return response.data;
		}
	}

	async searchAdvice(text) {
		const response = await api.get(`/advice/search/${text}`);
		if (response.data) {
			return response.data;
		}
	}
}
