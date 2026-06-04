import ManageJobsSection from "@/components/dashboard/ManageJobsSection";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterJobsPage = async () => {
	const companyId = "company_001"; //TODO: work left

	const jobs = await getCompanyJobs(companyId);

	return (
		<div>
			<ManageJobsSection jobs={jobs}></ManageJobsSection>
		</div>
	);
};

export default RecruiterJobsPage;
