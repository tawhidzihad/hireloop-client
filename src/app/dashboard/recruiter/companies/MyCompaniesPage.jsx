"use client";

import { useState } from "react";

import CompanyForm from "@/components/dashboard/CompanyForm";
import EmptyCompanyState from "@/components/dashboard/EmptyCompanyState";
import CompanyProfileCard from "@/components/ui/CompanyProfileCard";

export default function MyCompaniesPage({ recruiter, recruiterCompany }) {
	const [company, setCompany] = useState(recruiterCompany);
	const [isEditing, setIsEditing] = useState(false);

	const handleSaveCompany = (companyData) => {
		setCompany(companyData);
		setIsEditing(false);
	};

	return (
		<section className="pt-10">
			{!company?._id ? (
				<>
					{isEditing ? (
						<CompanyForm
							company={null}
							onSubmit={handleSaveCompany}
							recruiter={recruiter}
							onCancel={() => setIsEditing(false)}
						/>
					) : (
						<EmptyCompanyState onRegister={() => setIsEditing(true)} />
					)}
				</>
			) : isEditing ? (
				<CompanyForm
					company={company}
					onSubmit={handleSaveCompany}
					onCancel={() => setIsEditing(false)}
				/>
			) : (
				<CompanyProfileCard
					company={company}
					onEdit={() => setIsEditing(true)}
				/>
			)}
		</section>
	);
}

//
//
//
//

// import { Building2, Plus } from "lucide-react";
// import Link from "next/link";

// export default function MyCompaniesPage() {
// 	return (
// 		<section>
// 			<div className="flex py-10 items-center justify-center px-4">
// 				<div className="relative w-full max-w-md text-center">
// 					{/* Glow */}
// 					<div className="absolute inset-0 -z-10">
// 						<div className="mx-auto h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
// 					</div>

// 					{/* Floating Icon */}
// 					<div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-xl">
// 						<Building2 size={42} className="text-zinc-500" />

// 						<div className=" absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl">
// 							<Plus size={20} />
// 						</div>
// 					</div>

// 					{/* Content */}
// 					<h2 className="text-3xl font-semibold text-white">
// 						Company not registered yet
// 					</h2>

// 					<p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-zinc-500">
// 						Set up your business profile to start posting high-performance
// 						job listings and manage your talent pipeline.
// 					</p>

// 					{/* Buttons */}
// 					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
// 						<Link
// 							href="/"
// 							className=" inline-flex h-12 items-center gap-3 justify-center rounded-xl bg-white px-6 font-medium text-black transition hover:opacity-90"
// 						>
// 							<Plus size={16} />
// 							Register your company
// 						</Link>

// 						<Link
// 							href="/"
// 							className=" inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/70 px-6 font-medium text-white transition hover:bg-zinc-800"
// 						>
// 							View FAQ
// 						</Link>
// 					</div>

// 					{/* Footer Text */}
// 					<p className="mt-10 text-xs text-zinc-600">
// 						Need specialized assistance? Contact our enterprise support
// 						team.
// 					</p>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

/* Companies data
const companies = [
	{
		id: 1,
		logo: "https://i.ibb.co.com/3msn5Ssv/images-q-tbn-ANd9-Gc-R1x0r-Xxu-Qo61p9q-Xvl-6k-D5b-Eacd-PPGignzw-s.png",
		name: "Vercel",
		category: "Technology",
		description:
			"Vercel is the platform for frontend developers, providing speed and reliability. Experience the best workflow for React, Next.js, and more.",
		location: "San Francisco, USA",
		size: "201-500 employees",
		website: "https://vercel.com",
		status: "PENDING",
	},
	{
		id: 2,
		logo: "https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png",
		name: "Figma",
		category: "Technology",
		description:
			"Figma is the collaborative interface design tool for teams. Design, prototype, and gather feedback in one place.",
		location: "San Francisco, USA",
		size: "501-1000 employees",
		website: "https://figma.com",
		status: "APPROVED",
	},
	{
		id: 3,
		logo: "https://i.ibb.co.com/W471NYss/images-q-tbn-ANd9-Gc-S0mx-Yh-N7lz-Wu0z-Ge-ixy5c-Z-3-Lsgue-PXEUw-Q-s.jpg",
		name: "Enosis Solutions",
		category: "Software Development",
		description:
			"Trusted software development partner helping businesses build scalable digital products and engineering teams.",
		location: "Dhaka, Bangladesh",
		size: "51-200 employees",
		website: "https://enosisbd.com",
		status: "PENDING",
	},
	{
		id: 4,
		logo: "https://i.ibb.co.com/tpw3GMS2/images-q-tbn-ANd9-Gc-REFG-shbx-V7ib4ez-JAaos2-Dc-Q95-T6j-AC8ng-s.png",
		name: "Stripe",
		category: "Fintech",
		description:
			"Stripe provides online payment infrastructure for internet businesses of all sizes around the world.",
		location: "South San Francisco, USA",
		size: "5000+ employees",
		website: "https://stripe.com",
		status: "APPROVED",
	},
	{
		id: 5,
		logo: "https://w7.pngwing.com/pngs/353/16/png-transparent-notion-alt-macos-bigsur-icon-thumbnail.png",
		name: "Notion",
		category: "Productivity",
		description:
			"Notion combines notes, docs, tasks, and knowledge management into a single collaborative workspace.",
		location: "New York, USA",
		size: "1001-5000 employees",
		website: "https://notion.so",
		status: "APPROVED",
	},
	{
		id: 6,
		logo: "https://static.vecteezy.com/system/resources/previews/067/565/523/non_2x/shopify-rounded-logo-design-free-png.png",
		name: "Shopify",
		category: "E-Commerce",
		description:
			"Shopify helps entrepreneurs start, run, and grow online businesses with powerful commerce tools.",
		location: "Ottawa, Canada",
		size: "10000+ employees",
		website: "https://shopify.com",
		status: "REJECTED",
	},
];*/

/*** Company Card <>
<div className=" mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
	<div>
		<h1 className="text-3xl font-semibold text-white">
			My Companies
		</h1>
		<p className="mt-2 text-zinc-400">
			Manage your registered companies and their
			verification states.
		</p>
	</div>
	<Link
		href="/"
		className=" inline-flex h-12 items-center gap-3 justify-center rounded-xl bg-white px-6 font-text-black transition hover:opacity-90"
	>
		<Plus size={16} />
		Register your company
	</Link>
</div>

<div className=" grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
	{companies.map((company) => (
		<MyCompanyCard key={company.id} {...company} />
	))}
</div>
</> */
