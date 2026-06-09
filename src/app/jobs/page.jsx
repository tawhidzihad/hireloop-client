import { getJobs } from "@/lib/api/jobs";
import BrowseJobsPageSection from "./BrowseJobsPageSection";

const BrowseJobsPage = async () => {
	const jobs = await getJobs();

	return (
		<>
			<BrowseJobsPageSection jobs={jobs}></BrowseJobsPageSection>
		</>
	);
};

export default BrowseJobsPage;
