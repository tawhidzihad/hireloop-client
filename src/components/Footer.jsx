import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[#07070B]">
			<div className="relative mx-auto max-w-7xl px-6 py-20">
				{/* Top Section */}
				<div className="grid gap-16 lg:grid-cols-[1.8fr_2fr]">
					{/* Left Side */}
					<div>
						<Image
							src="/images/logo.png"
							alt="HireLoop"
							width={1000}
							height={1000}
							className="h-12 w-auto"
						/>

						<p className="mt-8 max-w-70 text-[15px] leading-8 text-zinc-500">
							The AI-native career platform. Built for people who take
							their work seriously.
						</p>
					</div>

					{/* Right Side */}
					<div className="grid grid-cols-2 gap-10 md:grid-cols-3">
						{/* Product */}
						<div>
							<h3 className="mb-6 font-medium text-[#6D5DFD]">
								Product
							</h3>

							<ul className="space-y-4">
								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Job discovery
									</Link>
								</li>

								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Worker AI
									</Link>
								</li>

								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Companies
									</Link>
								</li>

								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Salary data
									</Link>
								</li>
							</ul>
						</div>

						{/* Navigation */}
						<div>
							<h3 className="mb-6 font-medium text-[#6D5DFD]">
								Navigations
							</h3>

							<ul className="space-y-4">
								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Help center
									</Link>
								</li>

								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Career library
									</Link>
								</li>

								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Resources */}
						<div>
							<h3 className="mb-6 font-medium text-[#6D5DFD]">
								Resources
							</h3>

							<ul className="space-y-4">
								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Brand Guideline
									</Link>
								</li>

								<li>
									<Link
										href="#"
										className="text-zinc-500 transition hover:text-white"
									>
										Newsroom
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-16 border-t border-white/5 pt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					{/* Social Icons */}
					<div className="flex items-center gap-3">
						<Link
							href="#"
							className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition-all hover:bg-[#6D5DFD] hover:text-white"
						>
							<FaFacebookF size={16} />
						</Link>

						<Link
							href="#"
							className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6D5DFD] text-white"
						>
							<FaPinterestP size={16} />
						</Link>

						<Link
							href="#"
							className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition-all hover:bg-[#6D5DFD] hover:text-white"
						>
							<FaLinkedinIn size={16} />
						</Link>
					</div>

					{/* Copyright */}
					<div className="flex flex-col gap-4 text-sm text-zinc-500 lg:flex-row lg:items-center lg:gap-8">
						<p>Copyright 2026 — HireLoop</p>

						<Link href="/terms" className="transition hover:text-white">
							Terms & Policy
						</Link>

						<Link href="/privacy" className="transition hover:text-white">
							Privacy Guideline
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
