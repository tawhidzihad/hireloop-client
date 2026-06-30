import { redirect } from "next/navigation";
import { getUserToken } from "./session";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const authHeader = async () => {
	const token = await getUserToken();
	const header = token ? { authorization: `Bearer ${token}` } : {};
	return header;
};

// server data fetch
export const serverFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		cache: "no-store",
	});
	return res.json();
};

// protected server data fetch
export const protectedFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		headers: await authHeader(),
	});
	return handleStatusCode(res);
};

// server data created , update, delete
export const serverMutaion = async (path, method, data) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		method: method,
		headers: {
			"content-type": "application/json",
			...(await authHeader()),
		},
		body: JSON.stringify(data),
	});

	return handleStatusCode(res);
};

const handleStatusCode = (res) => {
	if (res.status === 401) {
		redirect("/unauthorized");
	} else if (res.status === 403) {
		redirect("/unauthorized");
	}

	return res.json();
};
