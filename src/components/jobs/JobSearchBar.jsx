import { Search } from "lucide-react";

export default function JobSearchBar({
	allJobs,
	searchTerm,
	setSearchTerm,
	setCompanyJobs,
}) {
	const handleSearch = () => {
		const term = searchTerm.toLowerCase().trim();

		if (!term) {
			setCompanyJobs(allJobs);
			return;
		}

		const filteredJobs = allJobs.filter((job) => {
			return (
				job.jobTitle?.toLowerCase().includes(term) ||
				job.jobCategory?.toLowerCase().includes(term) ||
				job.companyName?.toLowerCase().includes(term)
			);
		});

		setCompanyJobs(filteredJobs);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="rounded-2xl border border-white/10 bg-[#1f1f1f] p-4">
			<div className="flex flex-col gap-3 md:flex-row">
				<div className="relative flex-1">
					<Search
						size={18}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
					/>

					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyDown={handleKeyDown}
						type="text"
						placeholder="Search by Job title, Company name, Job category"
						className=" h-12 w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 text-white outline-none focus:border-[#6D5DFD]"
					/>
				</div>

				<button
					onClick={handleSearch}
					className=" h-12 rounded-xl bg-white px-8 font-medium text-black"
				>
					Search Jobs
				</button>
			</div>
		</div>
	);
}
