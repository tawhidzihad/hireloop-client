"use client";

import { Pagination } from "@heroui/react";

export default function JobPagination({
	page,
	itemsPerPage,
	totalItems,
	setPage,
	getPageNumbers,
	totalPages,
}) {
	const startItem = (page - 1) * itemsPerPage + 1;
	const endItem = Math.min(page * itemsPerPage, totalItems);

	return (
		<Pagination className="w-full">
			<Pagination.Summary>
				Showing {startItem}-{endItem} of {totalItems} results
			</Pagination.Summary>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous
						isDisabled={page === 1}
						onPress={() => setPage((p) => p - 1)}
					>
						<Pagination.PreviousIcon />
						<span>Previous</span>
					</Pagination.Previous>
				</Pagination.Item>
				{getPageNumbers().map((p, i) =>
					p === "ellipsis" ? (
						<Pagination.Item key={`ellipsis-${i}`}>
							<Pagination.Ellipsis />
						</Pagination.Item>
					) : (
						<Pagination.Item key={i}>
							<Pagination.Link
								isActive={p === page}
								onPress={() => setPage(p)}
							>
								{p}
							</Pagination.Link>
						</Pagination.Item>
					),
				)}
				<Pagination.Item>
					<Pagination.Next
						isDisabled={page === totalPages}
						onPress={() => setPage((p) => p + 1)}
					>
						<span>Next</span>
						<Pagination.NextIcon />
					</Pagination.Next>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination>
	);
}
