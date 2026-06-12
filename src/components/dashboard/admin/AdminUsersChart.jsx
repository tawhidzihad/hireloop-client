"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
	{ day: "Day 1", users: 500 },
	{ day: "Day 5", users: 900 },
	{ day: "Day 10", users: 1500 },
	{ day: "Day 15", users: 1000 },
	{ day: "Day 20", users: 2200 },
	{ day: "Day 25", users: 3500 },
	{ day: "Day 30", users: 2410 },
];

export default function AdminUsersChart() {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#202024] p-6">
			<div className="mb-6 flex items-center justify-between">
				<h3 className="text-xl font-semibold text-white">
					New Users (30d)
				</h3>

				<span className="font-medium text-green-400">+2,410</span>
			</div>

			<div className="h-75">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={data}>
						<XAxis dataKey="day" />

						<Tooltip />

						<Area
							type="monotone"
							dataKey="users"
							stroke="#6D5DFD"
							fill="#6D5DFD"
							fillOpacity={0.2}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
