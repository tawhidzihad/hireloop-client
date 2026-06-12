import { User } from "lucide-react";

export default function DashboardProfile() {
	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024] p-6">
			<div className="flex flex-col items-center text-center">
				<div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
					<User size={40} className="text-zinc-400" />
				</div>

				<h3 className="mt-5 text-2xl font-semibold text-white">
					Alex Rivera
				</h3>

				<p className="text-zinc-500">alex.rivera@example.com</p>

				<button className="mt-8 w-full rounded-xl border border-white/10 py-3 text-white transition hover:bg-white/5">
					Edit Profile
				</button>
			</div>
		</div>
	);
}
