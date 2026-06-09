import { Card } from "@heroui/react";

export default function StateCard({ icon, title, value, className = "" }) {
	return (
		<Card
			className={` group p-6 border border-white/10 bg-zinc-900/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6D5DFD]/40 hover:shadow-[0_0_30px_rgba(109,93,253,0.15)] ${className}`}
		>
			<div className=" flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-zinc-300 transition-all duration-300 group-hover:bg-[#6D5DFD]/15 group-hover:text-[#8B7BFF]">
				{icon}
			</div>

			<p className="mt-8 text-sm text-zinc-400">{title}</p>

			<h3 className="mt-2 text-3xl font-semibold text-white">{value}</h3>
		</Card>
	);
}
