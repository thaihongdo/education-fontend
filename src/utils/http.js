import axios from 'axios';

const instance = axios.create({
	withCredentials: false,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	},
});

instance.interceptors.request.use(
	async (config) => {
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export const http = instance;
