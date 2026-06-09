import { SearchX } from "lucide-react";
import JobCard from "./JobCard";

export default function JobsGrid({ jobs }) {
	if (!jobs?.length) {
		return (
			<div className="flex h-fit items-center justify-center rounded-3xl border border-white/10 bg-[#1f1f1f] p-8">
				<div className="text-center">
					<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
						<SearchX size={36} className="text-zinc-500" />
					</div>

					<h3 className="mt-6 text-2xl font-semibold text-white">
						No Jobs Found
					</h3>

					<p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
						We couldn&apos;t find any jobs matching your search or filter
						criteria. Try adjusting your filters or search keywords.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
			{jobs.map((job) => (
				<JobCard key={job._id} job={job} />
			))}
		</div>
	);
}
