import { serverFetch } from "../core/server";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

// get all jobs
export const getJobs = (queryString) => {
	return serverFetch(`/api/jobs?${queryString}`);
};

// get single jobs
export const getJobById = (jobId) => {
	return serverFetch(`/api/jobs/${jobId}`);
};

// get comppany jobs
export const getCompanyJobs = async (companyId, status = "active") => {
	const res = await fetch(
		`${baseApiUrl}/api/jobs?companyId=${companyId}&status=${status}`,
	);
	return res.json();
};
