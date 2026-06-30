const jobTypes = ["all", "full-time", "part-time", "contract", "internship"];

export default function JobFilters({
	selectedJobType,
	setSelectedJobType,
	isRemote,
	setIsRemote,
}) {
	const handleJobTypeChange = (e) => {
		setSelectedJobType(e.target.value);
	};

	return (
		<aside className="h-fit rounded-2xl border border-white/10 bg-[#1f1f1f] p-6">
			<h2 className="text-xl font-semibold text-white">Filters</h2>

			{/* Job Type */}
			<div className="mt-8">
				<label className="mb-3 block text-sm font-medium text-zinc-400">
					Job Type
				</label>

				<select
					value={selectedJobType || "all"}
					onChange={handleJobTypeChange}
					className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition focus:border-[#6D5DFD]"
				>
					{jobTypes.map((type) => (
						<option key={type} value={type}>
							{type === "all"
								? "All Job Types"
								: type
										.replace("-", " ")
										.replace(/\b\w/g, (char) => char.toUpperCase())}
						</option>
					))}
				</select>
			</div>

			{/* Remote Only */}
			<div className="mt-6 border-t border-white/10 pt-6">
				<label className="flex cursor-pointer items-center gap-3">
					<input
						type="checkbox"
						checked={isRemote}
						onChange={(e) => setIsRemote(e.target.checked)}
						className="h-4 w-4 accent-[#6D5DFD]"
					/>

					<div>
						<p className="text-sm font-medium text-white">Remote Only</p>

						<p className="text-xs text-zinc-500">Show only remote jobs</p>
					</div>
				</label>
			</div>
		</aside>
	);
}
