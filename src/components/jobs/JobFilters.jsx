const jobTypes = ["full-time", "part-time", "remote", "contract", "internship"];

export default function JobFilters({
	allJobs,
	setCompanyJobs,
	selectedJobTypes,
	setSelectedJobTypes,
}) {
	const handleJobTypeChange = (type) => {
		let updatedTypes;

		if (selectedJobTypes.includes(type)) {
			updatedTypes = selectedJobTypes.filter((item) => item !== type);
		} else {
			updatedTypes = [...selectedJobTypes, type];
		}

		setSelectedJobTypes(updatedTypes);

		// No filter selected
		if (updatedTypes.length === 0) {
			setCompanyJobs(allJobs);
			return;
		}

		// Filter jobs
		const filteredJobs = allJobs.filter((job) =>
			updatedTypes.includes(job.jobType),
		);

		setCompanyJobs(filteredJobs);
	};

	return (
		<aside className="h-fit rounded-2xl border border-white/10 bg-[#1f1f1f] p-6">
			<h2 className="text-xl font-semibold text-white">Filters</h2>

			<div className="mt-8">
				<h3 className="mb-4 text-sm font-medium text-zinc-400">Job Type</h3>

				<div className="space-y-4">
					{jobTypes.map((type) => (
						<label key={type} className="flex items-center gap-3">
							<input
								type="checkbox"
								checked={selectedJobTypes.includes(type)}
								onChange={() => handleJobTypeChange(type)}
							/>

							<span className="text-sm capitalize text-zinc-300">
								{type.replace("-", " ")}
							</span>
						</label>
					))}
				</div>
			</div>
		</aside>
	);
}
