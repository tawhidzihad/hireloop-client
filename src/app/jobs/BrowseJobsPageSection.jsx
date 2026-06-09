"use client";

import JobFilters from "@/components/jobs/JobFilters";
import JobPagination from "@/components/jobs/JobPagination";
import JobSearchBar from "@/components/jobs/JobSearchBar";
import JobsGrid from "@/components/jobs/JobsGrid";
import JobsToolbar from "@/components/jobs/JobsToolbar";
import { useState } from "react";

export default function BrowseJobsPageSection({ jobs }) {
	const [allJobs] = useState(jobs);
	const [companyJobs, setCompanyJobs] = useState(jobs);
	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("recent");
	const [selectedJobTypes, setSelectedJobTypes] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const jobsPerPage = 6;
	const totalPages = Math.ceil(companyJobs.length / jobsPerPage);
	const startIndex = (currentPage - 1) * jobsPerPage;
	const paginatedJobs = companyJobs.slice(
		startIndex,
		startIndex + jobsPerPage,
	);

	return (
		<section className="pb-16 bg-black px-4 lg:px-0">
			<div className="mx-auto max-w-7xl">
				<JobSearchBar
					allJobs={allJobs}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setCompanyJobs={setCompanyJobs}
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
					<JobFilters
						allJobs={allJobs}
						setCompanyJobs={setCompanyJobs}
						selectedJobTypes={selectedJobTypes}
						setSelectedJobTypes={setSelectedJobTypes}
					/>

					<div>
						<JobsToolbar
							companyJobs={companyJobs}
							setCompanyJobs={setCompanyJobs}
							sortBy={sortBy}
							setSortBy={setSortBy}
						/>

						<JobsGrid jobs={paginatedJobs} />

						<JobPagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPages={totalPages}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
