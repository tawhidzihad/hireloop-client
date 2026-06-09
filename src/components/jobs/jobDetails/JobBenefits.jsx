import { ShieldCheck } from "lucide-react";

export default function JobBenefits({ benefits }) {
	const items = benefits?.split(",")?.map((item) => item.trim());

	return (
		<div className="mt-10">
			<h3 className="text-xl font-semibold text-white">Benefits</h3>

			<div className="mt-6 grid gap-4 sm:grid-cols-2">
				{items?.map((benefit, index) => (
					<div
						key={index}
						className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
					>
						<ShieldCheck size={18} className="text-zinc-400" />

						<span className="text-zinc-300">{benefit}</span>
					</div>
				))}
			</div>
		</div>
	);
}
