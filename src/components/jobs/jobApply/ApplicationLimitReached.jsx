import { AlertCircle } from "lucide-react";

export default function ApplicationLimitReached({ planName }) {
	return (
		<div className="mt-6 py-10 flex items-center justify-center rounded-3xl border border-white/10 bg-[#202024] px-6">
			<div className="max-w-md text-center">
				<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
					<AlertCircle size={28} className="text-zinc-400" />
				</div>

				<h2 className="mt-6 text-2xl font-semibold text-white">
					Application Limit Reached
				</h2>

				<p className="mt-3 text-zinc-400 leading-7">
					You have exhausted all available job applications included in
					your <span className="font-medium text-white">{planName}</span>{" "}
					plan for this month.
				</p>

				<p className="mt-2 text-sm text-zinc-500">
					Upgrade your subscription to continue applying for jobs and
					unlock premium features.
				</p>
			</div>
		</div>
	);
}
