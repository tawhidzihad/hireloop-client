import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JobDetailsHeader({ job }) {
	return (
		<div className="rounded-3xl border border-white/10 bg-[#1f1f1f] p-6">
			<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
				<div className="flex items-center gap-4">
					<div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/10">
						<Image
							src={job?.companyLogo}
							alt={job?.companyName}
							fill
							className="object-cover"
						/>
					</div>

					<div>
						<h1 className="text-3xl font-bold text-white">
							{job.jobTitle}
						</h1>

						<div className="mt-2 flex flex-wrap items-center gap-2 text-zinc-400">
							<span>{job.companyName}</span>

							<span>•</span>

							<span className="text-green-400">Verified Employer</span>
						</div>
					</div>
				</div>

				<div className="flex gap-3">
					<button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
						<Bookmark size={18} />
					</button>

					<Link
						href={`/jobs/${job._id}/apply`}
						className="rounded-xl bg-white px-6 py-3 font-medium text-black"
					>
						Apply Now
					</Link>
				</div>
			</div>
		</div>
	);
}
