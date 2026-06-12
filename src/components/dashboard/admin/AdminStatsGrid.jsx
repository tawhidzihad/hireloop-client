import {
	BriefcaseBusiness,
	Building2,
	DollarSign,
	FileText,
	Users,
} from "lucide-react";

import AdminStatCard from "./AdminStatCard";

const stats = [
	{
		title: "Total Users",
		value: "124,892",
		change: "+12%",
		icon: Users,
	},
	{
		title: "Total Recruiters",
		value: "12,405",
		change: "+8%",
		icon: BriefcaseBusiness,
	},
	{
		title: "Total Companies",
		value: "4,281",
		change: "-0%",
		icon: Building2,
	},
	{
		title: "Jobs Posted",
		value: "8,920",
		change: "+24%",
		icon: FileText,
	},
	{
		title: "Platform Revenue",
		value: "$245,800",
		change: "+18.5%",
		icon: DollarSign,
	},
];

export default function AdminStatsGrid() {
	return (
		<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
			{stats.map((stat) => (
				<AdminStatCard key={stat.title} {...stat} />
			))}
		</div>
	);
}
