const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

// server data fetch
export const serverFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`);
	return res.json();
};


// server data created , update, delete
export const serverMutaion = async (path, method, data) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		method: method,
		headers: {
			"Content-Type": "Application/json",
		},
		body: JSON.stringify(data),
	});

	return res.json();
};
