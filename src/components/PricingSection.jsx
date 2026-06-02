"use client";

import { Button } from "@heroui/react";
import { ArrowRight, BarChart3, Crown, Plus, Zap } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
	{
		id: 1,
		name: "Starter",
		price: "$0",
		featured: false,
		icon: Crown,
		features: [
			"Daily AI match brief (top 5)",
			"Verified salary bands",
			"Company insight dashboards",
			"1-click apply, unlimited",
		],
	},
	{
		id: 2,
		name: "Growth",
		price: "$17",
		featured: true,
		icon: BarChart3,
		features: [
			"Daily AI match brief (top 5)",
			"Verified salary bands",
			"Company insight dashboards",
			"1-click apply, unlimited",
		],
	},
	{
		id: 3,
		name: "Premium",
		price: "$99",
		featured: false,
		icon: Zap,
		features: [
			"Everything in Pro",
			"Multi-profile career portfolios",
			"Shared talent rooms",
			"Recruiter view (read-only)",
		],
	},
];

export default function PricingSection() {
	const [billing, setBilling] = useState("monthly");

	return (
		<section className="bg-black py-24">
			<div className="mx-auto max-w-7xl px-4">
				{/* Header */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-2">
						<div className="h-1 w-1 rounded-full bg-[#6D5DFD]" />

						<span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
							Pricing
						</span>

						<div className="h-1 w-1 rounded-full bg-[#6D5DFD]" />
					</div>

					<h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
						Pay for the leverage,
						<br />
						not the listings
					</h2>

					{/* Toggle */}
					<div className="mt-10 flex justify-center">
						<div className="flex items-center rounded-full bg-[#151518] p-1">
							<button
								onClick={() => setBilling("monthly")}
								className={`rounded-full px-4 py-2 text-sm transition ${
									billing === "monthly"
										? "bg-white text-black"
										: "text-zinc-400"
								}`}
							>
								Monthly
							</button>

							<button
								onClick={() => setBilling("yearly")}
								className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
									billing === "yearly"
										? "bg-white text-black"
										: "text-zinc-400"
								}`}
							>
								Yearly
								<span className="rounded-full bg-fuchsia-600 px-2 py-0.5 text-[10px] text-white">
									25%
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Cards */}
				<div className="mt-16 grid gap-6 lg:grid-cols-3">
					{pricingPlans.map((plan) => (
						<div
							key={plan.id}
							className={`relative overflow-hidden rounded-[28px] border p-6 ${
								plan.featured
									? "border-white/10 bg-[#131316]"
									: "border-white/10 bg-[#09090B]"
							}`}
						>
							{/* Top */}
							<div className="relative z-10 flex items-start justify-between">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141418]">
										<plan.icon size={18} className="text-[#D89CFF]" />
									</div>

									<h3 className="text-2xl font-medium text-white">
										{plan.name}
									</h3>
								</div>

								<div className="text-right">
									<h2 className="text-5xl font-bold text-white">
										{plan.price}
									</h2>

									<span className="text-xs text-zinc-500">/month</span>
								</div>
							</div>

							<p className="mt-8 text-sm font-medium text-white">
								Start building your insights hub:
							</p>

							{/* Features */}
							<div className="mt-6 space-y-4">
								{plan.features.map((feature) => (
									<div
										key={feature}
										className="flex items-center gap-3"
									>
										<div className="flex h-5 w-5 items-center justify-center rounded bg-white/10">
											<Plus size={12} />
										</div>

										<span className="text-sm text-zinc-400">
											{feature}
										</span>
									</div>
								))}
							</div>

							{/* Button */}
							<Button
								className={`mt-10 h-12 w-full justify-between rounded-xl ${
									plan.featured
										? "bg-white text-black"
										: "bg-white/10 text-white"
								}`}
							>
								Choose This Plan
								<ArrowRight size={16} />
							</Button>

							{/* Featured Plan Glow */}
							{plan.featured && (
								<>
									<div className=" absolute -top-10 left-1/2 -h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

									<div className=" absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]" />
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
