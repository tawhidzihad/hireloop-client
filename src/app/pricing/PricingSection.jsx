"use client";

import PricingCard from "@/components/pricing/PricingCard";
import { pricingPlans } from "@/components/pricing/pricingPlans";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import { useState } from "react";

export default function PricingSection() {
	const [type, setType] = useState("seeker");

	return (
		<section className="bg-black px-4 py-20">
			<div className="mx-auto max-w-7xl">
				<div className="text-center">
					<h1 className="text-5xl font-bold text-white">Simple Pricing</h1>

					<p className="mt-4 text-zinc-500">
						Choose the perfect plan for your needs.
					</p>
				</div>

				{/* Toggle */}
				<div className="mt-10 flex justify-center">
					<div className="flex rounded-2xl border border-white/10 bg-[#202024] p-1">
						<button
							onClick={() => setType("seeker")}
							className={`
								rounded-xl px-6 py-3 transition
								${type === "seeker" ? "bg-[#6D5DFD] text-white" : "text-zinc-400"}
							`}
						>
							For Job Seekers
						</button>

						<button
							onClick={() => setType("recruiter")}
							className={`
								rounded-xl px-6 py-3 transition
								${type === "recruiter" ? "bg-[#6D5DFD] text-white" : "text-zinc-400"}
							`}
						>
							For Recruiters
						</button>
					</div>
				</div>

				{/* Cards */}
				<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{pricingPlans[type].map((plan) => (
						<PricingCard key={plan.name} plan={plan} />
					))}
				</div>

				<PricingFAQ />
			</div>
		</section>
	);
}
