import { Globe, MapPin, Users } from "lucide-react";
/* benefits
: 
"Necessitatibus sit "
city
: 
"Quasi quos aut labor"
companyId
: 
"company_001"
country
: 
"Nisi tempora delenit"
currency
: 
"BDT"
deadline
: 
"2008-10-27"
isRemote
: 
false
jobCategory
: 
"design"
jobTitle
: 
"Corporis fugiat vol"
jobType
: 
"contract"
maxSalary
: 
"28"
minSalary
: 
"17"
requirements
: 
"Dolor voluptatem id"
responsibilities
: 
"Mollit officia asper"
status
: 
"active"
_id
: 
"6a214f921e6718249f6dcf46" */

export default function MyCompanyCard({
	logo,
	name,
	category,
	description,
	location,
	size,
	website,
	status,
}) {
	const statusStyles = {
		APPROVED: "bg-green-500/10 text-green-400 border-green-500/20",

		PENDING: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

		REJECTED: "bg-red-500/10 text-red-400 border-red-500/20",
	};

	return (
		<div className=" group rounded-2xl border border-white/10 bg-[#1f1f1f] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6D5DFD]/30 hover:shadow-[0_0_30px_rgba(109,93,253,0.08)]">
			{/* Header */}
			<div className="flex items-start justify-between gap-3">
				<div className="flex items-center gap-4">
					<div className=" flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
						{logo}
					</div>

					<div>
						<h3 className="font-semibold text-white">{name}</h3>

						<p className="text-sm text-zinc-500">{category}</p>
					</div>
				</div>

				<span
					className={` rounded-full border px-3 py-1 text-[10px] font-medium ${statusStyles[status]}`}
				>
					{status}
				</span>
			</div>

			{/* Description */}
			<p className=" mt-6 line-clamp-3 text-sm leading-7 text-zinc-400">
				{description}
			</p>

			{/* Divider */}
			<div className="my-6 border-t border-white/10" />

			{/* Info */}
			<div className="flex flex-wrap gap-5 text-sm text-zinc-400">
				<div className="flex items-center gap-2">
					<MapPin size={14} />
					<span>{location}</span>
				</div>

				<div className="flex items-center gap-2">
					<Users size={14} />
					<span>{size}</span>
				</div>
			</div>

			{/* Website */}
			<a
				href={website}
				target="_blank"
				rel="noreferrer"
				className=" mt-6 inline-flex items-center gap-2 text-sm text-white transition hover:text-[#6D5DFD]"
			>
				<Globe size={14} />
				Visit Website
			</a>
		</div>
	);
}
