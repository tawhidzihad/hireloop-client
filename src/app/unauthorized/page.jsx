import { ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
	return (
		<section className="flex min-h-[80vh] items-center justify-center bg-black px-4 py-10">
			<div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-[#202024] p-8 md:p-12">
				{/* Glow */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,93,253,0.12),transparent_60%)]" />

				<div className="relative text-center">
					{/* Icon */}
					<div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
						<ShieldAlert size={56} className="text-red-400" />
					</div>

					{/* Error Code */}
					<div className="mt-8">
						<span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
							Error 401
						</span>
					</div>

					{/* Title */}
					<h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
						Access Denied
					</h1>

					<p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-400">
						You don&apos;t have permission to access this page. This area may
						require a different account type or additional authorization.
					</p>

					{/* Decorative barrier */}
					<div className="mt-12 flex items-center justify-center gap-4">
						<div className="h-0.5flex-1 max-w-35 bg-linear-to-r from-transparent to-red-500/40" />

						<div className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
							Restricted Area
						</div>

						<div className="h-0.5 flex-1 max-w-35 bg-linear-to-l from-transparent to-red-500/40" />
					</div>

					{/* Actions */}
					<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
						<Link
							href="/"
							className=" inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6D5DFD] px-6 py-3 font-medium text-white transition hover:bg-[#7d70ff]"
						>
							<ArrowLeft size={16} />
							Back to Home
						</Link>

						<Link
							href="/jobs"
							className=" rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
						>
							Browse Jobs
						</Link>
					</div>

					<p className="mt-8 text-sm text-zinc-500">
						If you believe this is a mistake, please contact support.
					</p>
				</div>
			</div>
		</section>
	);
}
