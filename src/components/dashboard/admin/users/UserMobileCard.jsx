import {
	BriefcaseFill,
	CircleCheckFill,
	Person,
	PersonMagnifier,
} from "@gravity-ui/icons";
import { Chip } from "@heroui/react";

export default function UserMobileCard({
	user,
	handleRoleChange,
	handleSuspend,
	handleUnsuspend,
}) {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#202024] p-4">
			<div className="flex items-center gap-3">
				<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-semibold text-white">
					{user.name?.charAt(0)}
				</div>

				<div className="flex-1">
					<h3 className="font-medium text-white">{user.name}</h3>

					<p className="text-sm text-zinc-500">{user.email}</p>
				</div>

				<div>
					{user?.banned ? (
						<Chip color="danger" variant="primary">
							<Chip.Label>Suspend</Chip.Label>
						</Chip>
					) : (
						<Chip color="success">
							<CircleCheckFill width={12} />
							<Chip.Label>Active</Chip.Label>
						</Chip>
					)}
				</div>
			</div>

			<div className="mt-4 flex flex-wrap gap-2 capitalize">
				{user.role === "admin" ? (
					<Chip color="success">
						<PersonMagnifier width={12} />
						<Chip.Label>{user.role}</Chip.Label>
					</Chip>
				) : user.role === "recruiter" ? (
					<Chip color="warning">
						<BriefcaseFill width={12} />
						<Chip.Label>{user.role}</Chip.Label>
					</Chip>
				) : (
					<Chip>
						<Person width={12} />
						<Chip.Label>{user.role}</Chip.Label>
					</Chip>
				)}

				<Chip size="sm">
					{user.createdAt.toLocaleString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
					})}
				</Chip>
			</div>

			<div className="mt-4 flex gap-2">
				{user.role === "admin" ? (
					<div className="cursor-not-allowed inline-flex items-center rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
						Admin Account
					</div>
				) : user?.banned ? (
					<button
						onClick={() => handleUnsuspend(user.id)}
						className="cursor-pointer rounded-lg border border-green-500/20 bg-green-500/10 px-2.5 py-1.5 text-xs font-medium text-green-400 transition hover:bg-green-500/20"
					>
						Unsuspend
					</button>
				) : (
					<div className="flex flex-wrap gap-2">
						{user.role !== "seeker" && (
							<button
								onClick={() => handleRoleChange(user.id, "seeker")}
								className="cursor-pointer rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-medium text-cyan-400 transition hover:bg-cyan-500/20"
							>
								Seeker
							</button>
						)}

						{user.role !== "recruiter" && (
							<button
								onClick={() => handleRoleChange(user.id, "recruiter")}
								className="cursor-pointer rounded-lg border border-[#6D5DFD]/20 bg-[#6D5DFD]/10 px-2.5 py-1.5 text-xs font-medium text-[#8B7EFF] transition hover:bg-[#6D5DFD]/20"
							>
								Recruiter
							</button>
						)}

						<button
							onClick={() => handleRoleChange(user.id, "admin")}
							className="cursor-pointer rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1.5 text-xs font-medium text-amber-400 transition hover:bg-amber-500/20"
						>
							Admin
						</button>

						<button
							onClick={() => handleSuspend(user.id)}
							className="cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/20"
						>
							Suspend
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
