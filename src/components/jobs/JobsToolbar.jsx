const categories = [
	"all",
	"Technology",
	"Software Development",
	"Artificial Intelligence",
	"FinTech",
	"E-Commerce",
	"Healthcare",
	"Education",
	"Telecommunications",
	"Marketing & Advertising",
	"Real Estate",
	"Manufacturing",
	"Logistics & Supply Chain",
	"Media & Entertainment",
	"Cybersecurity",
	"Transportation & Technology",
	"Travel & Hospitality",
	"Consumer Electronics",
	"Technology & Internet Services",
	"Software & Cloud Computing",
	"Entertainment & Streaming",
	"Semiconductor & AI",
	"Music Streaming",
	"Automotive & Clean Energy",
];

export default function JobsToolbar({
	jobs,
	selectedCategory,
	setSelectedCategory,
}) {
	const handleCategoryChange = (e) => {
		const value = e.target.value;
		setSelectedCategory(value);
	};

	return (
		<div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<h2 className="text-2xl font-semibold text-white">
				Found {jobs.length} Professional Jobs
			</h2>

			<div className="flex items-center gap-3">
				<span className="text-sm text-zinc-500">Category:</span>

				<select
					value={selectedCategory || "all"}
					onChange={handleCategoryChange}
					className="h-10 rounded-lg border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition focus:border-[#6D5DFD]"
				>
					{categories.map((category) => (
						<option
							key={category}
							value={category}
							className="bg-zinc-900"
						>
							{category === "all" ? "All Categories" : category}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
