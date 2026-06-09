import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JobCard({ job }) {
	return (
		<div
			className=" group rounded-3xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D5DFD]/40 hover:shadow-[0_0_30px_rgba(109,93,253,.08)]"
		>
			{/* Company */}
			<div className="mb-5 flex items-center gap-3">
				<div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
					<Image
						src={job.companyLogo}
						alt={job.companyName}
						fill
						className="object-cover"
					/>
				</div>

				<div>
					<p className="font-medium text-white">{job.companyName}</p>

					<p className="text-xs text-zinc-500">{job.jobCategory}</p>
				</div>
			</div>

			{/* Title */}
			<h2 className="text-2xl font-semibold text-white">{job.jobTitle}</h2>

			{/* Description */}
			<p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
				{job.responsibilities}
			</p>

			{/* Meta */}
			<div className="mt-6 flex flex-wrap gap-2">
				<div className="rounded-full bg-white/5 px-3 py-2 text-sm text-zinc-300">
					<MapPin size={14} className="mr-2 inline" />
					{job.isRemote ? "Remote" : `${job.city}, ${job.country}`}
				</div>

				<div className="rounded-full bg-white/5 px-3 py-2 text-sm text-zinc-300 capitalize">
					<Briefcase size={14} className="mr-2 inline" />
					{job.jobType}
				</div>

				<div className="rounded-full bg-white/5 px-3 py-2 text-sm text-zinc-300">
					{job.currency} ${job.minSalary}/${job.maxSalary}
				</div>
			</div>

			{/* Footer */}
			<div className="mt-8">
				<Link
					href={`/jobs/${job._id}`}
					className=" inline-flex items-center gap-2 font-medium text-white transition group-hover:text-[#6D5DFD]"
				>
					Apply Now
					<ArrowRight
						size={18}
						className=" transition-transform group-hover:translate-x-1"
					/>
				</Link>
			</div>
		</div>
	);
}
