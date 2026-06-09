"use client";

import { Building2, Plus } from "lucide-react";

export default function EmptyCompanyState({ onRegister }) {
	return (
		<div className="flex items-center justify-center px-4">
			<div className="relative w-full max-w-md text-center">
				{/* Glow */}
				<div className="absolute inset-0 -z-10">
					<div className="mx-auto h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
				</div>

				{/* Floating Icon */}
				<div className=" relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-xl">
					<Building2 size={42} className="text-zinc-500" />

					<div className=" absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl">
						<Plus size={20} />
					</div>
				</div>

				{/* Content */}
				<h2 className="text-3xl font-semibold text-white">
					Company not registered yet
				</h2>

				<p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-zinc-500">
					Set up your business profile to start posting job listings,
					manage applications, and build your employer brand.
				</p>

				{/* Actions */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<button
						onClick={onRegister}
						className=" inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-medium text-black transition hover:opacity-90"
					>
						<Plus size={16} />
						Register Company
					</button>

					<p className=" inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/70 px-6 font-medium text-white transition hover:bg-zinc-800">
						View FAQ
					</p>
				</div>

				{/* Footer */}
				<p className="mt-10 text-xs text-zinc-600">
					Need help? Contact our support team for assistance.
				</p>
			</div>
		</div>
	);
}
