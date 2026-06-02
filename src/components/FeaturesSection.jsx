import {
	ArrowUpRight,
	Bookmark,
	Building2,
	FileText,
	Search,
	Target,
	TrendingUp,
	Zap,
} from "lucide-react";

const features = [
	{
		icon: Search,
		title: "Smart Search",
		description: "Find your ideal job with advanced filters.",
	},
	{
		icon: TrendingUp,
		title: "Salary Insights",
		description: "Get real salary data to negotiate confidently.",
	},
	{
		icon: Building2,
		title: "Top Companies",
		description: "Apply to vetted companies that are hiring.",
	},
	{
		icon: Bookmark,
		title: "Saved Jobs",
		description: "Manage apps & favorites on your dashboard.",
	},
	{
		icon: Zap,
		title: "One-Click Apply",
		description: "Simplify your job applications for an easier process!",
	},
	{
		icon: FileText,
		title: "Resume Builder",
		description: "Create professional resumes with modern templates.",
	},
	{
		icon: Target,
		title: "Skill-Based Matching",
		description: "Discover jobs that match your skills and experience.",
	},
	{
		icon: ArrowUpRight,
		title: "Career Growth Resources",
		description: "Boost your career with quick interview tips.",
	},
];

export default function FeaturesSection() {
	return (
		<section className="bg-[#151516] py-24">
			<div className="mx-auto max-w-7xl px-4">
				{/* Header */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-2">
						<div className="h-1 w-1 rounded-full bg-[#6D5DFD]" />

						<span className=" text-xs uppercase tracking-[0.25em] text-zinc-400">
							Features Job
						</span>

						<div className="h-1 w-1 rounded-full bg-[#6D5DFD]" />
					</div>

					<h2 className=" mx-auto mt-5 max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl">
						Everything you need
						<br />
						to succeed
					</h2>
				</div>

				{/* Features Grid */}
				<div className=" mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature) => {
						const Icon = feature.icon;

						return (
							<div
								key={feature.title}
								className=" flex items-start gap-4"
							>
								<div className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111116]">
									<Icon size={20} className="text-[#D89CFF]" />
								</div>

								<div>
									<h3 className=" text-lg font-medium text-white">
										{feature.title}
									</h3>

									<p className=" mt-2 text-sm leading-6 text-zinc-500">
										{feature.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
