import { ArrowRight, Check } from "lucide-react";

export default function PricingCard({ plan }) {
	return (
		<div
			className={` group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f12] p-6 transition-all duration-300 hover:border-[#6D5DFD]/30 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(109,93,253,0.08)] ${plan.popular ? "ring-1 ring-[#6D5DFD]/20" : ""}`}
		>
			{/* Glow */}
			{plan.popular && (
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,93,253,0.15),transparent_60%)]" />
			)}

			<div className="relative">
				{/* Header */}
				<div className="flex items-start justify-between">
					<div className="flex items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
							<plan.icon size={18} className="text-[#B88CFF]" />
						</div>

						<div>
							<h3 className="text-3xl font-semibold text-white">
								{plan.name}
							</h3>

							{plan.popular && (
								<p className="mt-1 text-xs text-[#B88CFF]">
									Most Popular
								</p>
							)}
						</div>
					</div>

					<div className="text-right">
						<h2 className="text-6xl font-bold tracking-tight text-white">
							{plan.price}
						</h2>

						<p className="mt-1 text-sm text-zinc-500">{plan.period}</p>
					</div>
				</div>

				{/* Feature Intro */}
				<p className="mt-10 font-medium text-white">
					What&apos;s included:
				</p>

				{/* Features */}
				<ul className="mt-6 space-y-4">
					{plan.features.map((feature) => (
						<li key={feature} className="flex items-start gap-3">
							<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-white/5">
								<Check size={14} className="text-zinc-300" />
							</div>

							<span className="text-zinc-400">{feature}</span>
						</li>
					))}
				</ul>

				{/* CTA */}
				<form action="/api/checkout_sessions" method="POST">
					<input type="hidden" name="plan_id" value={plan.id} />
					<section>
						<button
							type="submit"
							role="link"
							className={`group/btn mt-10 h-14 w-full justify-center gap-3 rounded-2xl flex items-center ${
								plan.popular
									? "bg-white text-black hover:bg-zinc-200"
									: "bg-white/5 text-white hover:bg-white/10"
							}`}
						>
							<span className="font-medium">
								{plan.price === "$0"
									? "Start for Free"
									: `Choose ${plan.name}`}
							</span>
							<ArrowRight
								size={18}
								className="transition-transform duration-300 group-hover/btn:translate-x-1"
							/>
						</button>
					</section>
				</form>
			</div>
		</div>
	);
}
