import { BadgeCheck, Bookmark, CalendarDays, Send } from "lucide-react";

export default function JobSeekerDashboardStats({
	savedJobs = 0,
	applications = 0,
	interviews = 0,
	offers = 0,
}) {
	const stats = [
		{
			title: "Saved Jobs",
			value: savedJobs,
			icon: Bookmark,
			iconColor: "text-white",
		},
		{
			title: "Applications Submitted",
			value: applications.length,
			icon: Send,
			iconColor: "text-blue-400",
		},
		{
			title: "Interviews Scheduled",
			value: interviews,
			icon: CalendarDays,
			iconColor: "text-amber-400",
		},
		{
			title: "Offers Received",
			value: offers,
			icon: BadgeCheck,
			iconColor: "text-green-400",
		},
	];

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{stats.map((stat) => (
				<div
					key={stat.title}
					className=" rounded-2xl border border-white/10 bg-[#202024] p-5 transition-all duration-300 hover:border-[#6D5DFD]/20"
				>
					<div className="flex items-start justify-between">
						<div>
							<p className="text-sm text-zinc-400">{stat.title}</p>

							<h2 className="mt-3 text-4xl font-bold text-white">
								{stat.value}
							</h2>
						</div>

						<div className=" flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
							<stat.icon size={18} className={stat.iconColor} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
