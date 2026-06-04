"use server";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getCompanyJobs = async (companyId, status = "active") => {
	const res = await fetch(
		`${baseApiUrl}/api/jobs?companyId=${companyId}&status=${status}`,
	);
	return res.json();
};
