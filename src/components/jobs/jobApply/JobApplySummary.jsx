import { MapPin, Wallet } from "lucide-react";
import Image from "next/image";

export default function JobApplySummary({ job }) {
	return (
		<div className="h-fit rounded-3xl border border-white/10 bg-[#202024] p-6">
			<div className="flex items-center gap-4">
				<div className="relative h-14 w-14 overflow-hidden rounded-xl">
					<Image
						src={job.companyLogo}
						alt={job.companyName}
						fill
						sizes="56px"
						className="object-cover"
					/>
				</div>

				<div>
					<h2 className="font-semibold text-white">{job.jobTitle}</h2>

					<p className="text-sm text-zinc-500">{job.companyName}</p>
				</div>
			</div>

			<div className="mt-6 space-y-4">
				<div className="flex items-center gap-3 text-zinc-400">
					<MapPin size={16} />
					<span>
						{job.isRemote ? "Remote" : `${job.city}, ${job.country}`}
					</span>
				</div>

				<div className="flex items-center gap-3 text-zinc-400">
					<Wallet size={16} />
					<span>
						{job.currency}
						{job.minSalary} - {job.maxSalary}
					</span>
				</div>
			</div>
		</div>
	);
}
