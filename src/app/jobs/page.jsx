import { getJobs } from "@/lib/api/jobs";
import BrowseJobsPageSection from "./BrowseJobsPageSection";

const BrowseJobsPage = async ({ searchParams }) => {
	const searchQuery = await searchParams;

	const searchQueryObj = {
		...searchQuery,
		isRemote: searchQuery.isRemote === "true" ? true : false,
	};

	const objToURLParams = new URLSearchParams(searchQuery);

	const queryString = objToURLParams.toString();

	const { jobs, total } = await getJobs(queryString);

	return (
		<>
			<BrowseJobsPageSection
				searchQuery={searchQueryObj}
				jobs={jobs || []}
				total={total}
			></BrowseJobsPageSection>
		</>
	);
};

export default BrowseJobsPage;
