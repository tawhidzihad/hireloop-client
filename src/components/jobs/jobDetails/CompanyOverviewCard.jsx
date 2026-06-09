import Image from "next/image";

export default function CompanyOverviewCard({ job }) {
	return (
		<div className="h-fit rounded-3xl border border-white/10 bg-[#1f1f1f] p-6">
			<h2 className="text-xl font-semibold text-white">Company Overview</h2>

			<div className="relative mt-5 aspect-video overflow-hidden rounded-2xl">
				<Image
					src={
						job?.companyBanner ||
						"https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
					}
					alt={job?.companyName}
					fill
					sizes="350px"
					className="object-cover"
				/>
			</div>

			<div className="mt-6 space-y-5">
				<div className="flex justify-between">
					<span className="text-zinc-500">Industry</span>

					<span className="text-white capitalize">{job.jobCategory}</span>
				</div>

				<div className="flex justify-between">
					<span className="text-zinc-500">Size</span>

					<span className="text-white capitalize">{job.companySize}</span>
				</div>
			</div>

			<a
				href={job.companyWebsite}
				target="_blank"
				rel="noreferrer"
				className="mt-8 block text-center text-white hover:text-[#6D5DFD]"
			>
				Visit Website
			</a>
		</div>
	);
}
