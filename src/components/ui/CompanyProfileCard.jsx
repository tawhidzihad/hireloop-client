"use client";

import { Globe, MapPin, Pencil, Users } from "lucide-react";
import Image from "next/image";

export default function CompanyProfileCard({ company, onEdit }) {
	const statusStyles = {
		Approved: "bg-green-500/10 text-green-400 border-green-500/20",

		Pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

		Rejected: "bg-red-500/10 text-red-400 border-red-500/20",
	};

	return (
		<div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1f1f1f]">
			{/* Header */}
			<div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
				<div className="flex items-center gap-4">
					<div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
						<Image
							src={company.logo}
							alt={company.name}
							fill
							className="object-cover"
						/>
					</div>

					<div>
						<div className="flex flex-wrap items-center gap-3">
							<h2 className="text-2xl font-semibold text-white">
								{company.name}
							</h2>

							<span
								className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[company.status]}`}
							>
								{company.status}
							</span>
						</div>

						<a
							href={`https://${company.website}`}
							target="_blank"
							className="mt-2 flex items-center gap-2 text-zinc-400"
						>
							<Globe size={15} />
							{company.website}
						</a>
					</div>
				</div>

				<button
					onClick={onEdit}
					className=" inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-white transition hover:border-[#6D5DFD]/30"
				>
					<Pencil size={16} />
					Edit Profile
				</button>
			</div>

			<div className="border-t border-white/10" />

			{/* Stats */}
			<div className="grid gap-4 p-6 md:grid-cols-3">
				<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
					<p className="text-xs uppercase tracking-wider text-zinc-500">
						Industry
					</p>

					<p className="mt-2 text-lg font-medium text-white">
						{company.category}
					</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
					<p className="text-xs uppercase tracking-wider text-zinc-500">
						Location
					</p>

					<p className="mt-2 flex items-center gap-2 text-lg font-medium text-white">
						<MapPin size={16} />
						{company.location}
					</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
					<p className="text-xs uppercase tracking-wider text-zinc-500">
						Company Size
					</p>

					<p className="mt-2 flex items-center gap-2 text-lg font-medium text-white">
						<Users size={16} />
						{company.size}
					</p>
				</div>
			</div>

			{/* About */}
			<div className="px-6 pb-6">
				<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
					About Our Vision & Culture
				</h3>

				<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
					<p className="leading-7 text-zinc-300">{company.description}</p>
				</div>
			</div>
		</div>
	);
}
