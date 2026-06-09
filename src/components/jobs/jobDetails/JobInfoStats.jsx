import { BriefcaseBusiness, Calendar, MapPin, Wallet } from "lucide-react";

export default function JobInfoStats({ job }) {
	const cards = [
		{
			label: "Salary Range",
			value: `${job.currency} ${job.minSalary} - ${job.maxSalary}`,
			icon: Wallet,
		},
		{
			label: "Location",
			value: job.isRemote ? "Remote" : `${job.city}, ${job.country}`,
			icon: MapPin,
		},
		{
			label: "Job Type",
			value: job.jobType,
			icon: BriefcaseBusiness,
		},
		{
			label: "Deadline",
			value: job.deadline,
			icon: Calendar,
		},
	];

	return (
		<div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{cards.map((card) => (
				<div
					key={card.label}
					className="rounded-2xl border border-white/10 bg-[#1f1f1f] p-5"
				>
					<card.icon size={18} className="text-zinc-400" />

					<p className="mt-4 text-xs uppercase tracking-wider text-zinc-500">
						{card.label}
					</p>

					<h3 className="mt-2 font-medium text-white capitalize">{card.value}</h3>
				</div>
			))}
		</div>
	);
}
