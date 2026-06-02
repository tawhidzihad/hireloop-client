import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
	return (
		<section className="bg-black">
			<div className="mx-auto max-w-7xl px-4">
				<div className="relative overflow-hidden">
					{/* Background Image */}
					<Image
						src="/images/cta-bg.png"
						alt="CTA Background"
						fill
						priority
						className="object-cover object-top"
					/>

					{/* Purple / Blue Glow */}
					<div className=" absolute left-1/2 top-0 h-70 w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(91,77,255,0.7)_0%,rgba(91,77,255,0.25)_45%,transparent_80%)]" />

					{/* Content */}
					<div className=" relative z-10 flex min-h-105 flex-col items-center justify-center px-6 text-center">
						<h2 className=" max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
							Your next role is
							<br />
							already looking for you
						</h2>

						<p className=" mt-5 max-w-2xl text-sm text-zinc-400 md:text-base">
							Build a profile in three minutes. The matches start
							arriving tomorrow morning.
						</p>

						<div className=" mt-10 flex flex-col gap-4 sm:flex-row">
							<Link
								href="/register"
								className=" inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 font-medium text-black transition hover:opacity-90"
							>
								Create a free account
							</Link>

							<Link
								href="/pricing"
								className=" inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 px-7 font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
							>
								View pricing
							</Link>
						</div>
					</div>

					{/* Bottom Fade */}
					<div className=" absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />
				</div>
			</div>
		</section>
	);
}
