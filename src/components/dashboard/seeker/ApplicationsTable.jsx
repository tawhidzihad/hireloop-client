"use client";

import { Button, Chip, Table } from "@heroui/react";
import { BriefcaseBusiness, Eye } from "lucide-react";
import Link from "next/link";

const statusColorMap = {
	Applied: "default",
	Review: "warning",
	Shortlisted: "success",
	Rejected: "danger",
	Offered: "secondary",
};

export default function ApplicationsTable({ applications = [] }) {
	if (!applications.length) {
		return (
			<div className="flex min-h-75 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#202024] p-8 text-center">
				<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
					<BriefcaseBusiness size={28} className="text-zinc-500" />
				</div>

				<h3 className="mt-5 text-xl font-semibold text-white">
					No Applications Yet
				</h3>

				<p className="mt-2 max-w-md text-zinc-500">
					You haven&apos;t applied for any jobs yet. Start exploring
					opportunities and submit your first application.
				</p>

				<Link
					href="/jobs"
					className="mt-6 rounded-xl bg-[#6D5DFD] px-5 py-3 font-medium text-white transition hover:bg-[#7b6dff]"
				>
					Browse Jobs
				</Link>
			</div>
		);
	}

	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024] p-4 md:p-6">
			{/* Header */}
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-white">
					My Applications
				</h2>

				<p className="mt-1 text-sm text-zinc-500">
					Track your job applications and hiring progress.
				</p>
			</div>

			{/* Mobile Cards */}
			<div className="space-y-4 md:hidden">
				{applications.map((application) => (
					<div
						key={application._id}
						className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-4"
					>
						<div className="flex items-start justify-between gap-3">
							<div>
								<h3 className="font-medium text-white">
									{application.jobTitle}
								</h3>

								<p className="mt-1 text-sm text-zinc-500">
									{application.companyName}
								</p>
							</div>

							<Chip
								size="sm"
								variant="soft"
								color={statusColorMap[application.status]}
							>
								{application.status}
							</Chip>
						</div>

						<div className="mt-4 space-y-2 text-sm">
							<div className="flex justify-between">
								<span className="text-zinc-500">Type</span>

								<span className="text-white">
									{application.jobType}
								</span>
							</div>

							<div className="flex justify-between">
								<span className="text-zinc-500">Applied</span>

								<span className="text-white">
									{application.appliedAt}
								</span>
							</div>
						</div>

						<Link href={`/applications/${application._id}`}>
							<Button
								size="sm"
								className="mt-4 w-full"
								variant="bordered"
							>
								View Details
							</Button>
						</Link>
					</div>
				))}
			</div>

			{/* Desktop Table */}
			<div className="hidden md:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content
							aria-label="Applications Table"
							className="min-w-225"
						>
							<Table.Header>
								<Table.Column isRowHeader>Job Title</Table.Column>

								<Table.Column>Company</Table.Column>

								<Table.Column>Applied</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column className="text-end">Action</Table.Column>
							</Table.Header>

							<Table.Body>
								{applications.map((application) => (
									<Table.Row
										key={application._id}
										id={application._id}
									>
										<Table.Cell>
											<div>
												<h3 className="font-medium text-white">
													{application.jobTitle}
												</h3>

												<p className="text-sm text-zinc-500">
													{application.jobType}
												</p>
											</div>
										</Table.Cell>

										<Table.Cell>{application.companyName}</Table.Cell>

										<Table.Cell>{application.appliedAt}</Table.Cell>

										<Table.Cell>
											<Chip
												size="sm"
												variant="soft"
												color={statusColorMap[application.status]}
											>
												{application.status}
											</Chip>
										</Table.Cell>

										<Table.Cell>
											<div className="flex justify-end">
												<Link
													href={`/applications/${application._id}`}
												>
													<Button
														isIconOnly
														size="sm"
														variant="ghost"
													>
														<Eye size={16} />
													</Button>
												</Link>
											</div>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</div>

			{/* Footer */}
			<div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-xs text-zinc-500">
					Showing {applications.length} applications
				</p>

				<div className="flex items-center gap-2">
					<button className="h-9 w-9 rounded-lg border border-white/10 text-sm text-white">
						1
					</button>

					<button className="h-9 w-9 rounded-lg border border-white/10 text-sm text-zinc-500">
						2
					</button>

					<button className="h-9 w-9 rounded-lg border border-white/10 text-sm text-zinc-500">
						3
					</button>
				</div>
			</div>
		</div>
	);
}
