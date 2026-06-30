"use client";

import JobFilters from "@/components/jobs/JobFilters";
import JobPagination from "@/components/jobs/JobPagination";
import JobSearchBar from "@/components/jobs/JobSearchBar";
import JobsGrid from "@/components/jobs/JobsGrid";
import JobsToolbar from "@/components/jobs/JobsToolbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BrowseJobsPageSection({ searchQuery, jobs }) {
	const router = useRouter();

	// after serach and filter set the condition matched jobs
	const [companyJobs, setCompanyJobs] = useState(jobs);

	// Seacrh value store
	const [searchTerm, setSearchTerm] = useState(searchQuery.search || "");

	// Filter by job category
	const [selectedCategory, setSelectedCategory] = useState(
		searchQuery.jobCategory || "all",
	);

	// Job type filter
	const [selectedJobType, setSelectedJobType] = useState(
		searchQuery.jobType || "all",
	);

	// Is remote
	const [isRemote, setIsRemote] = useState(searchQuery.isRemote || false);

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const jobsPerPage = 6;
	const totalPages = Math.ceil(companyJobs.length / jobsPerPage);
	const startIndex = (currentPage - 1) * jobsPerPage;
	const paginatedJobs = companyJobs.slice(
		startIndex,
		startIndex + jobsPerPage,
	);

	useEffect(() => {
		const sp = new URLSearchParams();

		// If have search value
		if (searchTerm) {
			sp.set("search", searchTerm);
		}

		// If have selected job type
		if (selectedJobType) {
			if (selectedJobType !== "all" && selectedJobType !== "remote") {
				sp.set("jobType", selectedJobType);
			}
		}

		// If isRemote true
		if (isRemote) {
			sp.set("isRemote", isRemote);
		}

		// If have selected category
		if (selectedCategory) {
			if (selectedCategory !== "all") {
				sp.set("jobCategory", selectedCategory);
			}
		}

		const path = `?${sp.toString()}`;

		router.push(path);
	}, [router, selectedJobType, selectedCategory, searchTerm, isRemote]);

	return (
		<section className="pb-16 bg-black px-4 lg:px-0">
			<div className="mx-auto max-w-7xl">
				<JobSearchBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
					<JobFilters
						selectedJobType={selectedJobType}
						setSelectedJobType={setSelectedJobType}
						isRemote={isRemote}
						setIsRemote={setIsRemote}
					/>

					<div className="space-y-3">
						<JobsToolbar
							jobs={jobs}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
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
