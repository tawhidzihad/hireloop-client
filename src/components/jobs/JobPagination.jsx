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
