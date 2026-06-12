import { Bookmark, Calendar, Send, Trophy } from "lucide-react";

const stats = [
	{
		title: "Saved Jobs",
		value: 12,
		icon: Bookmark,
	},
	{
		title: "Applications Submitted",
		value: 24,
		icon: Send,
	},
	{
		title: "Interviews Scheduled",
		value: 3,
		icon: Calendar,
	},
	{
		title: "Offers Received",
		value: 1,
		icon: Trophy,
	},
];

export default function DashboardStats() {
	return (
		<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{stats.map((item) => {
				const Icon = item.icon;

				return (
					<div
						key={item.title}
						className="rounded-3xl border border-white/10 bg-[#202024] p-6"
					>
						<div className="flex items-start justify-between">
							<p className="text-sm text-zinc-400">{item.title}</p>

							<Icon size={18} className="text-zinc-500" />
						</div>

						<h2 className="mt-4 text-4xl font-bold text-white">
							{item.value}
						</h2>
					</div>
				);
			})}
		</div>
	);
}
