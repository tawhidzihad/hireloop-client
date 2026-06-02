import {
	BriefcaseBusiness,
	Building2,
	MapPin,
	Search,
	Star,
	Users,
} from "lucide-react";

const stats = [
	{
		icon: BriefcaseBusiness,
		value: "50K",
		label: "Active Jobs",
	},
	{
		icon: Building2,
		value: "12K",
		label: "Companies",
	},
	{
		icon: Users,
		value: "2M",
		label: "Job Seekers",
	},
	{
		icon: Star,
		value: "97%",
		label: "Satisfaction Rate",
	},
];

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-black">
			<div className="relative z-10 mx-auto max-w-7xl px-4">
				{/* Badge */}
				<div className="flex justify-center pt-20 md:pt-28">
					<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs md:text-sm text-zinc-300 backdrop-blur-xl">
						💼
						<span className="font-semibold text-white">50,000+</span>
						NEW JOBS THIS MONTH
					</div>
				</div>

				{/* Background Globe */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 rounded-t-xl"
					style={{
						backgroundImage: "url('/images/globe.png')",
					}}
				/>

				{/* Heading */}
				<div className="mx-auto mt-8 max-w-4xl text-center">
					<h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
						Find Your Dream Job Today
					</h1>

					<p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
						HireLoop connects top talent with world-class companies.
						Browse thousands of curated opportunities and land your next
						role — faster.
					</p>
				</div>

				{/* Search Bar */}
				<div className="mx-auto mt-10 max-w-4xl">
					<div className="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
						<div className="flex flex-1 items-center gap-3 px-5">
							<Search size={18} className="text-zinc-500" />

							<input
								type="text"
								placeholder="Job title, skill or company"
								className=" h-14 w-full bg-transparent text-white outline-none"
							/>
						</div>

						<div className="hidden md:block w-px bg-white/10" />

						<div className="flex flex-1 items-center gap-3 px-5">
							<MapPin size={18} className="text-zinc-500" />

							<input
								type="text"
								placeholder="Location or Remote"
								className=" h-14 w-full bg-transparent text-white outline-none"
							/>
						</div>

						<button className=" h-14 w-full md:w-16 bg-[#6D5DFD] flex items-center justify-center text-white transition hover:bg-[#7e70ff]">
							<Search size={18} />
						</button>
					</div>

					{/* Trending */}
					<div className="relative z-20 mt-4 flex flex-wrap items-center justify-center gap-2">
						<span className="text-xs text-muted">Trending Position</span>

						{[
							"Product Designer",
							"AI Engineering",
							"DevOps Engineer",
						].map((item) => (
							<span
								key={item}
								className=" rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
							>
								{item}
							</span>
						))}
					</div>
				</div>

				{/* Center Text */}
				<div className="mt-62.5 md:mt-95 text-center relative z-50">
					<h2 className=" text-3xl font-light leading-tight text-white md:text-5xl">
						Assisting over 15,000 job seekers
						<br />
						find their dream positions.
					</h2>
				</div>

				{/* Stats Cards */}
				<div className=" mt-16 grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((item) => {
						const Icon = item.icon;

						return (
							<div
								key={item.label}
								className=" rounded-3xl border bg-linear-to-b from-black/40 to-slate-900 p-6 backdrop-blur-xl min-h-45"
							>
								<Icon size={18} className="text-white" />

								<h3 className=" mt-8 text-5xl font-bold text-white">
									{item.value}
								</h3>

								<p className="mt-3 text-zinc-400">{item.label}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
