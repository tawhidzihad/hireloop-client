"use client";

import { setUserRole } from "@/lib/actions/users";
import { authClient } from "@/lib/auth-client";
import {
	BriefcaseFill,
	CircleCheckFill,
	Person,
	PersonMagnifier,
} from "@gravity-ui/icons";
import { Chip, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import UserMobileCard from "./UserMobileCard";

export default function UsersManagementTable({ users }) {
	const router = useRouter();

	const handleRoleChange = async (userId, role) => {
		const data = await setUserRole(userId, role);
		if (data) {
			router.refresh();
			toast.success("Role update successful!");
		}
	};

	// Suspend users
	const handleSuspend = async (userId) => {
		const data = await authClient.admin.banUser({
			userId: userId,
		});
		if (data) {
			router.refresh();
			toast.success("User Suspend successfully!");
		}
	};

	// Unsuspend users
	const handleUnsuspend = async (userId) => {
		const data = await authClient.admin.unbanUser({
			userId: userId,
		});
		if (data) {
			router.refresh();
			toast.success("User Unsuspend successfully!");
		}
	};

	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024]">
			{/* Mobile */}
			<div className="space-y-4 p-4 lg:hidden">
				{users.map((user) => (
					<UserMobileCard
						key={user.id}
						user={user}
						handleRoleChange={handleRoleChange}
						handleSuspend={handleSuspend}
						handleUnsuspend={handleUnsuspend}
					/>
				))}
			</div>

			{/* Desktop */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content aria-label="Users Table" className="min-w-275">
							<Table.Header>
								<Table.Column isRowHeader>User</Table.Column>

								<Table.Column>Email</Table.Column>

								<Table.Column>Role</Table.Column>

								<Table.Column>Join Date</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column>Actions</Table.Column>
							</Table.Header>

							<Table.Body>
								{users.map((user) => (
									<Table.Row key={user.id} id={user.id}>
										<Table.Cell>
											<div className="flex items-center gap-3">
												<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
													{user.name?.charAt(0)}
												</div>

												<span>{user.name}</span>
											</div>
										</Table.Cell>

										<Table.Cell>{user.email}</Table.Cell>

										<Table.Cell className={"capitalize"}>
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
										</Table.Cell>

										<Table.Cell>
											{user.createdAt.toLocaleString("en-US", {
												year: "numeric",
												month: "long",
												day: "numeric",
												hour: "2-digit",
												minute: "2-digit",
											})}
										</Table.Cell>

										<Table.Cell>
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
										</Table.Cell>

										<Table.Cell>
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
															onClick={() =>
																handleRoleChange(
																	user.id,
																	"seeker",
																)
															}
															className="cursor-pointer rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-medium text-cyan-400 transition hover:bg-cyan-500/20"
														>
															Seeker
														</button>
													)}

													{user.role !== "recruiter" && (
														<button
															onClick={() =>
																handleRoleChange(
																	user.id,
																	"recruiter",
																)
															}
															className="cursor-pointer rounded-lg border border-[#6D5DFD]/20 bg-[#6D5DFD]/10 px-2.5 py-1.5 text-xs font-medium text-[#8B7EFF] transition hover:bg-[#6D5DFD]/20"
														>
															Recruiter
														</button>
													)}

													<button
														onClick={() =>
															handleRoleChange(user.id, "admin")
														}
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
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</div>
		</div>
	);
}
