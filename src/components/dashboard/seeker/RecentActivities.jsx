import { Bell, Clock3 } from "lucide-react";

const activities = [
	{
		text: 'Application updated to "Under Review"',
		time: "2 hours ago",
	},
	{
		text: "New job recommendation matches your profile",
		time: "5 hours ago",
	},
	{
		text: "Interview scheduled with TechFlow Systems",
		time: "1 day ago",
	},
];

export default function RecentActivities() {
	return (
		<div>
			<div className="mb-5 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-white">
					Recent Activity
				</h2>

				<button className="text-sm text-zinc-400 hover:text-white">
					View All
				</button>
			</div>

			<div className="space-y-4">
				{activities.map((item, index) => (
					<div
						key={index}
						className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#202024] p-5"
					>
						<div className="flex items-center gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
								<Bell size={18} className="text-zinc-400" />
							</div>

							<p className="text-zinc-300">{item.text}</p>
						</div>

						<div className="hidden items-center gap-2 text-sm text-zinc-500 md:flex">
							<Clock3 size={14} />
							{item.time}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
