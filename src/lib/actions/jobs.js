"use server";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const createJob = async (newJobData) => {
	const res = await fetch(`${baseApiUrl}/api/jobs`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(newJobData),
	});

	return res.json();
};
