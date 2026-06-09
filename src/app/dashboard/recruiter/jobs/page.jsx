import ManageJobsSection from "@/components/dashboard/ManageJobsSection";
import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterJobsPage = async () => {
	const company = await getLoggedInRecruiterCompany();
	const jobs = (await getCompanyJobs(company?._id)) || [];

	return (
		<div>
			<ManageJobsSection jobs={jobs}></ManageJobsSection>
		</div>
	);
};

export default RecruiterJobsPage;
