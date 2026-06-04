"use client";

import { Button, Chip, Table } from "@heroui/react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const statusColorMap = {
	active: "success",
	draft: "warning",
	closed: "danger",
};

export default function ManageJobsTable({ jobs }) {
	return (
		<>
			{/* Desktop Table */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content
							aria-label="Manage Jobs Table"
							className="min-w-225"
						>
							<Table.Header>
								<Table.Column isRowHeader>Job Title</Table.Column>

								<Table.Column>Type / Category</Table.Column>

								<Table.Column>Location</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column className="text-end">
									Actions
								</Table.Column>
							</Table.Header>

							<Table.Body>
								{jobs.map((job) => (
									<Table.Row key={job._id} id={job._id}>
										<Table.Cell>
											<h3 className="font-medium text-white capitalize">
												{job.jobTitle}
											</h3>
										</Table.Cell>

										<Table.Cell>
											<div>
												<p className="font-medium text-white capitalize">
													{job.jobType}
												</p>

												<p className="text-sm text-zinc-500 capitalize">
													{job.jobCategory}
												</p>
											</div>
										</Table.Cell>

										<Table.Cell className={"capitalize"}>
											{job.isRemote
												? "Remote"
												: `${job.city}, ${job.country}`}
										</Table.Cell>

										<Table.Cell>
											<Chip color={statusColorMap[job.status]} className="capitalize">
												{job.status}
											</Chip>
										</Table.Cell>

										<Table.Cell>
											<div className="flex justify-end gap-1">
												<Button variant="ghost">
													<Eye />
												</Button>

												<Button variant="ghost">
													<Pencil  />
												</Button>

												<Button variant="ghost">
													<Trash2 className="text-red-500" />
												</Button>
											</div>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</div>

			{/* Mobile Card View */}
			<div className="space-y-4 lg:hidden">
				{jobs.map((job) => (
					<div
						key={job._id}
						className=" rounded-2xl border border-white/10 bg-zinc-950 p-4"
					>
						<div className="flex items-start justify-between gap-3">
							<h3 className="font-semibold text-white capitalize">
								{job.jobTitle}
							</h3>

							<Chip color={statusColorMap[job.status]} className="capitalize">
								{job.status}
							</Chip>
						</div>

						<div className="mt-4 space-y-3">
							<div>
								<p className="text-xs text-zinc-500">Type</p>

								<p className="text-white capitalize">{job.jobType}</p>
							</div>

							<div>
								<p className="text-xs text-zinc-500">Category</p>

								<p className="text-white capitalize">
									{job.jobCategory}
								</p>
							</div>

							<div>
								<p className="text-xs text-zinc-500">Location</p>

								<p className="text-white capitalize">
									{job.isRemote
										? "Remote"
										: `${job.city}, ${job.country}`}
								</p>
							</div>
						</div>

						<div className="mt-5 flex justify-end gap-2 border-t border-white/10 pt-4">
							<Button variant="ghost">
								<Eye />
							</Button>

							<Button variant="ghost">
								<Pencil />
							</Button>

							<Button variant="light">
								<Trash2 className="text-red-500" />
							</Button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
