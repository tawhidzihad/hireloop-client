"use client";

import { updatedStatus } from "@/lib/actions/companies";
import { CircleCheckFill, Xmark } from "@gravity-ui/icons";
import { Avatar, Button, Chip, Pagination, Table } from "@heroui/react";
import { Clock } from "lucide-react";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const statusColorMap = {
	Pending: "warning",
	Approved: "success",
	Rejected: "danger",
};

export default function CompanyRegistrationsTable({ companies = [] }) {
	const [page, setPage] = useState(1);

	const rowsPerPage = 10;

	const totalPages = Math.ceil(companies.length / rowsPerPage);

	const paginatedCompanies = useMemo(() => {
		const start = (page - 1) * rowsPerPage;

		const end = start + rowsPerPage;

		return companies.slice(start, end);
	}, [companies, page]);

	const startItem = companies.length === 0 ? 0 : (page - 1) * rowsPerPage + 1;

	const endItem = Math.min(page * rowsPerPage, companies.length);

	// Handle Company Approve button
	const handleApprove = async (companyId) => {
		const data = await updatedStatus(companyId, { status: "Approved" });
		if (data.modifiedCount) {
			toast.success("Company approved successfully!");
		}
	};

	// Handle Company Reject button
	const handleReject = async (companyId) => {
		const data = await updatedStatus(companyId, { status: "Rejected" });
		if (data.modifiedCount) {
			toast.error("Company rejected successfully.");
		}
	};

	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024]">
			{/* Mobile View */}
			<div className="space-y-4 p-4 lg:hidden">
				{paginatedCompanies.map((company) => (
					<div
						key={company._id}
						className="rounded-2xl border border-white/10 bg-black/20 p-4"
					>
						<div className="flex items-center gap-3">
							<Avatar size="md" className="rounded">
								<Avatar.Image alt={company.name} src={company.logo} />
								<Avatar.Fallback>
									{company.name
										?.split(" ")
										.map((word) => word[0])
										.slice(0, 2)
										.join("")}
								</Avatar.Fallback>
							</Avatar>

							<div className="min-w-0 flex-1">
								<h3 className="truncate font-medium text-white">
									{company.name}
								</h3>

								<p className="truncate text-sm text-zinc-500">
									{company.recruiterEmail}
								</p>
							</div>
						</div>

						<div className="mt-4 space-y-3">
							<div className="flex justify-between text-sm">
								<span className="text-zinc-500">Industry</span>

								<span className="text-white">{company.category}</span>
							</div>

							<div className="flex justify-between text-sm">
								<span className="text-zinc-500">Status</span>

								<Chip size="sm" color={statusColorMap[company.status]}>
									{company.status}
								</Chip>
							</div>

							<div className="flex justify-between text-sm">
								<span className="text-zinc-500">Submitted</span>

								<span className="text-white">
									{new Date(company.createdAt).toLocaleDateString(
										"en-US",
										{
											year: "numeric",
											month: "long",
											day: "numeric",
										},
									)}
								</span>
							</div>
						</div>

						<div className="mt-4 flex gap-2">
							{company.status === "Pending" ? (
								<div className="flex gap-2">
									<Button
										size="sm"
										className={"rounded"}
										variant="secondary"
										onPress={() => handleApprove(company._id)}
									>
										Approve
									</Button>

									<Button
										size="sm"
										className={"rounded"}
										variant="danger"
										onPress={() => handleReject(company._id)}
									>
										Reject
									</Button>
								</div>
							) : company.status === "Approved" ? (
								<div className=" inline-flex items-center justify-center rounded border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm font-medium text-green-400 cursor-not-allowed select-none">
									Approved
								</div>
							) : (
								<div className="inline-flex items-center justify-center rounded border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 cursor-not-allowed select-none">
									Rejected
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Desktop View */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content
							aria-label="Companies Table"
							className="min-w-275"
						>
							<Table.Header>
								<Table.Column isRowHeader>Company</Table.Column>

								<Table.Column>Recruiter Email</Table.Column>

								<Table.Column>Industry</Table.Column>

								<Table.Column>Total Jobs</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column>Date Submitted</Table.Column>

								<Table.Column>Actions</Table.Column>
							</Table.Header>

							<Table.Body>
								{paginatedCompanies.map((company) => (
									<Table.Row key={company._id} id={company._id}>
										<Table.Cell>
											<div className="flex items-center gap-3">
												<Avatar size="md" className="rounded">
													<Avatar.Image
														alt={company.name}
														src={company.logo}
													/>
													<Avatar.Fallback>
														{company.name
															?.split(" ")
															.map((word) => word[0])
															.slice(0, 2)
															.join("")}
													</Avatar.Fallback>
												</Avatar>

												<span>{company.name}</span>
											</div>
										</Table.Cell>

										<Table.Cell>{company.recruiterEmail}</Table.Cell>

										<Table.Cell>{company.category}</Table.Cell>

										<Table.Cell>{company.jobCount} Job</Table.Cell>

										<Table.Cell>
											{company.status === "Approved" ? (
												<Chip color="success">
													<CircleCheckFill width={12} />
													<Chip.Label>{company.status}</Chip.Label>
												</Chip>
											) : company.status === "Rejected" ? (
												<Chip color="danger">
													<Xmark width={12} />
													<Chip.Label>{company.status}</Chip.Label>
												</Chip>
											) : (
												<Chip color="warning">
													<Clock width={12} />
													<Chip.Label>{company.status}</Chip.Label>
												</Chip>
											)}
										</Table.Cell>

										<Table.Cell>
											{new Date(
												company.createdAt,
											).toLocaleDateString("en-US", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</Table.Cell>

										<Table.Cell>
											{company.status === "Pending" ? (
												<div className="flex gap-2">
													<Button
														size="sm"
														className={"rounded"}
														variant="secondary"
														onPress={() =>
															handleApprove(company._id)
														}
													>
														Approve
													</Button>

													<Button
														size="sm"
														className={"rounded"}
														variant="danger"
														onPress={() =>
															handleReject(company._id)
														}
													>
														Reject
													</Button>
												</div>
											) : company.status === "Approved" ? (
												<div className=" inline-flex items-center justify-center rounded border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm font-medium text-green-400 cursor-not-allowed select-none">
													Approved
												</div>
											) : (
												<div className="inline-flex items-center justify-center rounded border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 cursor-not-allowed select-none">
													Rejected
												</div>
											)}
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>

					<Table.Footer>
						<Pagination size="sm">
							<Pagination.Summary>
								{startItem} - {endItem} of {companies.length} companies
							</Pagination.Summary>

							<Pagination.Content>
								<Pagination.Item>
									<Pagination.Previous
										isDisabled={page === 1}
										onPress={() =>
											setPage((prev) => Math.max(prev - 1, 1))
										}
									>
										Prev
									</Pagination.Previous>
								</Pagination.Item>

								{Array.from(
									{
										length: totalPages,
									},
									(_, index) => index + 1,
								).map((pageNumber) => (
									<Pagination.Item key={pageNumber}>
										<Pagination.Link
											isActive={page === pageNumber}
											onPress={() => setPage(pageNumber)}
										>
											{pageNumber}
										</Pagination.Link>
									</Pagination.Item>
								))}

								<Pagination.Item>
									<Pagination.Next
										isDisabled={page === totalPages}
										onPress={() =>
											setPage((prev) =>
												Math.min(prev + 1, totalPages),
											)
										}
									>
										Next
									</Pagination.Next>
								</Pagination.Item>
							</Pagination.Content>
						</Pagination>
					</Table.Footer>
				</Table>
			</div>

			{/* Mobile Pagination */}
			<div className="flex items-center justify-between border-t border-white/10 p-4 lg:hidden">
				<button
					onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
					disabled={page === 1}
					className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white disabled:opacity-40"
				>
					Prev
				</button>

				<div className="text-sm text-zinc-400">
					Page {page} of {totalPages}
				</div>

				<button
					onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
					disabled={page === totalPages}
					className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white disabled:opacity-40"
				>
					Next
				</button>
			</div>
		</div>
	);
}
