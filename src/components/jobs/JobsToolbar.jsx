export default function JobsToolbar({
	setCompanyJobs,
	sortBy,
	setSortBy,
	companyJobs,
}) {
	const handleSort = (e) => {
		const value = e.target.value;

		setSortBy(value);

		const sortedJobs = [...companyJobs];

		if (value === "recent") {
			sortedJobs.sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
			);
		}

		if (value === "highSalary") {
			sortedJobs.sort((a, b) => Number(b.maxSalary) - Number(a.maxSalary));
		}

		if (value === "lowSalary") {
			sortedJobs.sort((a, b) => Number(a.minSalary) - Number(b.minSalary));
		}

		setCompanyJobs(sortedJobs);
	};

	return (
		<div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<h2 className="text-2xl font-semibold text-white">
				Found {companyJobs.length} Professional Jobs
			</h2>

			<div className="flex items-center gap-3">
				<span className="text-sm text-zinc-500">Sort by:</span>

				<select
					value={sortBy}
					onChange={handleSort}
					className="rounded bg-zinc-900 p-1 text-white outline-none"
				>
					<option value="recent">Most Recent</option>

					<option value="highSalary">Highest Salary</option>

					<option value="lowSalary">Lowest Salary</option>
				</select>
			</div>
		</div>
	);
}
