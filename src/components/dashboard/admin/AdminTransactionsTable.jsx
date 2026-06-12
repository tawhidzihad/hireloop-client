"use client";

import { Chip, Table } from "@heroui/react";

const statusColorMap = {
	Success: "success",
	Pending: "warning",
	Failed: "danger",
};

const transactions = [
	{
		id: 1,
		name: "Marcus Kensington",
		company: "TechCorp Inc.",
		plan: "Enterprise Monthly",
		transactionId: "#TX-982341",
		amount: "1,299",
		date: "Oct 24, 2026",
		status: "Success",
	},
	{
		id: 2,
		name: "Sarah Lee",
		company: "Creative Studio",
		plan: "Professional Annual",
		transactionId: "#TX-882163",
		amount: "499",
		date: "Oct 24, 2026",
		status: "Success",
	},
	{
		id: 3,
		name: "John Doe",
		company: "Freelance Org",
		plan: "Starter Monthly",
		transactionId: "#TX-774129",
		amount: "49",
		date: "Oct 23, 2026",
		status: "Pending",
	},
	{
		id: 4,
		name: "Admin Global",
		company: "Retail Global",
		plan: "Enterprise Monthly",
		transactionId: "#TX-582814",
		amount: "1,299",
		date: "Oct 23, 2026",
		status: "Failed",
	},
];

export default function AdminTransactionsTable({}) {
	// Empty State
	if (!transactions.length) {
		return (
			<div className="rounded-3xl border border-white/10 bg-[#202024] p-10 text-center">
				<h3 className="text-xl font-semibold text-white">
					No Transactions Found
				</h3>

				<p className="mt-2 text-zinc-500">
					There are currently no subscription transactions available.
				</p>
			</div>
		);
	}

	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024]">
			{/* Header */}
			<div className="flex flex-col gap-4 border-b border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 className="text-2xl font-semibold text-white">
						Recent Subscription Transactions
					</h2>

					<p className="mt-1 text-sm text-zinc-500">
						Track platform revenue and subscription activities.
					</p>
				</div>

				<button className="text-sm text-zinc-400 transition hover:text-white">
					View All Activity
				</button>
			</div>

			{/* Mobile Cards */}
			<div className="space-y-4 p-4 md:hidden">
				{transactions.map((transaction) => (
					<div
						key={transaction.id}
						className="rounded-2xl border border-white/10 bg-black/20 p-4"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white">
								{transaction.name?.charAt(0)}
							</div>

							<div>
								<h3 className="font-medium text-white">
									{transaction.name}
								</h3>

								<p className="text-xs text-zinc-500">
									{transaction.company}
								</p>
							</div>
						</div>

						<div className="mt-4 space-y-2 text-sm">
							<div className="flex justify-between">
								<span className="text-zinc-500">Plan</span>

								<span className="text-white">{transaction.plan}</span>
							</div>

							<div className="flex justify-between">
								<span className="text-zinc-500">Amount</span>

								<span className="font-medium text-white">
									${transaction.amount}
								</span>
							</div>

							<div className="flex justify-between">
								<span className="text-zinc-500">Date</span>

								<span className="text-white">{transaction.date}</span>
							</div>
						</div>

						<div className="mt-4">
							<Chip
								size="sm"
								variant="soft"
								color={statusColorMap[transaction.status]}
							>
								{transaction.status}
							</Chip>
						</div>
					</div>
				))}
			</div>

			{/* Desktop Table */}
			<div className="hidden md:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content
							aria-label="Transactions Table"
							className="min-w-250"
						>
							<Table.Header>
								<Table.Column isRowHeader>
									User / Recruiter
								</Table.Column>

								<Table.Column>Plan Type</Table.Column>

								<Table.Column>Transaction ID</Table.Column>

								<Table.Column>Amount</Table.Column>

								<Table.Column>Date</Table.Column>

								<Table.Column>Status</Table.Column>
							</Table.Header>

							<Table.Body>
								{transactions.map((transaction) => (
									<Table.Row key={transaction.id} id={transaction.id}>
										<Table.Cell>
											<div className="flex items-center gap-3">
												<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white">
													{transaction.name?.charAt(0)}
												</div>

												<div>
													<h3 className="font-medium text-white">
														{transaction.name}
													</h3>

													<p className="text-sm text-zinc-500">
														{transaction.company}
													</p>
												</div>
											</div>
										</Table.Cell>

										<Table.Cell>{transaction.plan}</Table.Cell>

										<Table.Cell>
											{transaction.transactionId}
										</Table.Cell>

										<Table.Cell>${transaction.amount}</Table.Cell>

										<Table.Cell>{transaction.date}</Table.Cell>

										<Table.Cell>
											<Chip
												size="sm"
												variant="soft"
												color={statusColorMap[transaction.status]}
											>
												{transaction.status}
											</Chip>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</div>

			{/* Footer */}
			<div className="flex flex-col gap-3 border-t border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-xs text-zinc-500">
					Showing {transactions.length} transactions
				</p>

				<div className="flex items-center gap-2">
					<button className="h-8 w-8 rounded-lg border border-white/10 bg-white text-black">
						1
					</button>

					<button className="h-8 w-8 rounded-lg border border-white/10 text-zinc-400">
						2
					</button>

					<button className="h-8 w-8 rounded-lg border border-white/10 text-zinc-400">
						3
					</button>
				</div>
			</div>
		</div>
	);
}
