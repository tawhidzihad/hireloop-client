import { Button } from "@heroui/react";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

// const jobs = Array.from({ length: 6 }, (_, i) => ({}));

const jobs = [
	{
		id: 1,
		title: "Frontend Developer",
		description:
			"Build responsive and modern user interfaces using React and Next.js.",
		location: "New York, USA",
		type: "Hybrid",
		salary: "€25–€40/hour",
	},
	{
		id: 2,
		title: "Backend Developer",
		description:
			"Develop scalable APIs and backend services with Node.js and Express.",
		location: "Berlin, Germany",
		type: "Remote",
		salary: "€35–€55/hour",
	},
	{
		id: 3,
		title: "Full Stack Developer",
		description:
			"Work across frontend and backend systems to deliver complete solutions.",
		location: "Toronto, Canada",
		type: "Full-Time",
		salary: "€50k–€80k/year",
	},
	{
		id: 4,
		title: "UI/UX Designer",
		description:
			"Design intuitive and visually appealing user experiences for web products.",
		location: "London, UK",
		type: "Hybrid",
		salary: "€30–€45/hour",
	},
	{
		id: 5,
		title: "DevOps Engineer",
		description:
			"Manage CI/CD pipelines, cloud infrastructure, and deployment workflows.",
		location: "Amsterdam, Netherlands",
		type: "Remote",
		salary: "€60k–€90k/year",
	},
	{
		id: 6,
		title: "AI Engineer",
		description:
			"Build and deploy machine learning models and AI-powered applications.",
		location: "San Francisco, USA",
		type: "Full-Time",
		salary: "€80k–€130k/year",
	},
	{
		id: 7,
		title: "Product Manager",
		description:
			"Lead product strategy and collaborate with engineering and design teams.",
		location: "Sydney, Australia",
		type: "Hybrid",
		salary: "€70k–€100k/year",
	},
	{
		id: 8,
		title: "Mobile App Developer",
		description:
			"Create high-performance mobile applications using React Native.",
		location: "Singapore",
		type: "Remote",
		salary: "€40–€60/hour",
	},
	{
		id: 9,
		title: "Cyber Security Analyst",
		description:
			"Monitor systems, identify threats, and improve security infrastructure.",
		location: "Dublin, Ireland",
		type: "Full-Time",
		salary: "€55k–€85k/year",
	},
];

export default function FeaturedJobsSection() {
	return (
		<section className="bg-black py-24">
			<div className="mx-auto max-w-7xl px-4">
				{/* Header */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-2">
						<div className="h-1 w-1 rounded-full bg-[#6D5DFD]" />

						<span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
							Smart Job Discovery
						</span>

						<div className="h-1 w-1 rounded-full bg-[#6D5DFD]" />
					</div>

					<h2 className=" mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
						The roles you&apos;d never
						<br />
						find by searching
					</h2>
				</div>

				{/* Cards */}
				<div className=" mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{jobs.map((job) => (
						<div
							key={job.id}
							className=" rounded-[24px] border border-white/5 bg-[#0E0E12] p-6 transition-all hover:border-white/10 hover:bg-[#111118]"
						>
							<h3 className="text-3xl font-medium text-white">
								{job.title}
							</h3>

							<p className="mt-4 text-sm leading-7 text-zinc-500">
								{job.description}
							</p>

							<div className="mt-8 flex flex-wrap gap-2">
								<div className=" flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
									<MapPin size={12} />
									{job.location}
								</div>

								<div className=" flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
									<Briefcase size={12} />
									{job.type}
								</div>

								<div className=" rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
									{job.salary}
								</div>
							</div>

							<button className=" mt-12 flex items-center gap-2 text-sm text-white transition hover:text-[#6D5DFD]">
								Apply Now
								<ArrowRight size={15} />
							</button>
						</div>
					))}
				</div>

				{/* Bottom Button */}
				<div className="mt-14 flex justify-center">
					<Button className=" bg-white text-black font-medium px-8 h-12 rounded-xl">
						View all job open
					</Button>
				</div>
			</div>
		</section>
	);
}
