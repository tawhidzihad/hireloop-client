import { ChevronLeft, ChevronRight } from "lucide-react";

export default function JobPagination({
	currentPage,
	setCurrentPage,
	totalPages,
}) {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	if (totalPages <= 1) return null;

	return (
		<div className="mt-10 flex justify-center">
			<div className="flex items-center gap-2">
				{/* Previous */}
				<button
					onClick={handlePrevious}
					disabled={currentPage === 1}
					className=" flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition disabled:cursor-not-allowed disabled:opacity-40"
				>
					<ChevronLeft size={18} />
				</button>

				{/* Page Numbers */}
				{pages.map((page) => (
					<button
						key={page}
						onClick={() => setCurrentPage(page)}
						className={`
							h-10
							w-10
							rounded-xl
							transition
							${
								currentPage === page
									? "bg-white text-black"
									: "border border-white/10 text-white hover:bg-white/5"
							}
						`}
					>
						{page}
					</button>
				))}

				{/* Next */}
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className=" flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition disabled:cursor-not-allowed disabled:opacity-40"
				>
					<ChevronRight size={18} />
				</button>
			</div>
		</div>
	);
}

// "use client";

// import { Pagination } from "@heroui/react";
// import { useState } from "react";

// export default function JobPagination() {
// 	const [page, setPage] = useState(1);
// 	const totalPages = 12;
// 	const itemsPerPage = 10;
// 	const totalItems = 120;

// 	const getPageNumbers = () => {
// 		const pages = [];

// 		pages.push(1);

// 		if (page > 3) {
// 			pages.push("ellipsis");
// 		}

// 		const start = Math.max(2, page - 1);
// 		const end = Math.min(totalPages - 1, page + 1);

// 		for (let i = start; i <= end; i++) {
// 			pages.push(i);
// 		}

// 		if (page < totalPages - 2) {
// 			pages.push("ellipsis");
// 		}

// 		pages.push(totalPages);

// 		return pages;
// 	};

// 	const startItem = (page - 1) * itemsPerPage + 1;
// 	const endItem = Math.min(page * itemsPerPage, totalItems);

// 	return (
// 		<Pagination className="w-full">
// 			<Pagination.Summary>
// 				Showing {startItem}-{endItem} of {totalItems} results
// 			</Pagination.Summary>
// 			<Pagination.Content>
// 				<Pagination.Item>
// 					<Pagination.Previous
// 						isDisabled={page === 1}
// 						onPress={() => setPage((p) => p - 1)}
// 					>
// 						<Pagination.PreviousIcon />
// 						<span>Previous</span>
// 					</Pagination.Previous>
// 				</Pagination.Item>
// 				{getPageNumbers().map((p, i) =>
// 					p === "ellipsis" ? (
// 						<Pagination.Item key={`ellipsis-${i}`}>
// 							<Pagination.Ellipsis />
// 						</Pagination.Item>
// 					) : (
// 						<Pagination.Item key={p}>
// 							<Pagination.Link
// 								isActive={p === page}
// 								onPress={() => setPage(p)}
// 							>
// 								{p}
// 							</Pagination.Link>
// 						</Pagination.Item>
// 					),
// 				)}
// 				<Pagination.Item>
// 					<Pagination.Next
// 						isDisabled={page === totalPages}
// 						onPress={() => setPage((p) => p + 1)}
// 					>
// 						<span>Next</span>
// 						<Pagination.NextIcon />
// 					</Pagination.Next>
// 				</Pagination.Item>
// 			</Pagination.Content>
// 		</Pagination>
// 	);
// }
