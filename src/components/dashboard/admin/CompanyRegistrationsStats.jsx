import { CheckCircle2, Clock3, XCircle } from "lucide-react";

export default function CompanyRegistrationsStats({ companies }) {
	const stats = [
		{
			title: "Pending Review",
			value: companies.filter((comapny) => comapny.status === "Pending")
				.length,
			change: "+12%",
			icon: Clock3,
			color: "text-yellow-400",
		},
		{
			title: "Approved Partners",
			value: companies.filter((comapny) => comapny.status === "Approved")
				.length,
			change: "+5%",
			icon: CheckCircle2,
			color: "text-green-400",
		},
		{
			title: "Total Rejections",
			value: companies.filter((comapny) => comapny.status === "Rejected")
				.length,
			change: "Stable",
			icon: XCircle,
			color: "text-red-400",
		},
	];

	return (
		<div className="grid gap-4 md:grid-cols-3">
			{stats.map((stat) => {
				const Icon = stat.icon;

				return (
					<div
						key={stat.title}
						className="rounded-2xl border border-white/10 bg-[#202024] p-5"
					>
						<div className="flex items-start justify-between">
							<Icon size={18} className={stat.color} />

							<span className="text-xs text-green-400">
								{stat.change}
							</span>
						</div>

						<p className="mt-4 text-xs uppercase tracking-wide text-zinc-500">
							{stat.title}
						</p>

						<h3 className="mt-2 text-3xl font-bold text-white">
							{stat.value}
						</h3>
					</div>
				);
			})}
		</div>
	);
}
