"use client";

import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ name: "Engineering", jobs: 400 },
	{ name: "Design", jobs: 280 },
	{ name: "Marketing", jobs: 220 },
	{ name: "Sales", jobs: 320 },
	{ name: "Operations", jobs: 150 },
];

export default function AdminCategoryChart() {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#202024] p-6">
			<h3 className="mb-6 text-xl font-semibold text-white">
				Job Posts by Category
			</h3>

			<div className="h-75">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={data}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />

						<Bar dataKey="jobs" radius={[8, 8, 0, 0]} fill="#6D5DFD" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
