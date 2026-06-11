import { createSubscription } from "@/lib/actions/subscriptions";
import { stripe } from "@/lib/stripe";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Success({ searchParams }) {
	const { session_id } = await searchParams;

	if (!session_id) {
		throw new Error("Please provide a valid session_id (`cs_test_...`)");
	}

	const {
		status,
		customer_details: { email: customerEmail },
		metadata,
	} = await stripe.checkout.sessions.retrieve(session_id, {
		expand: ["line_items", "payment_intent"],
	});

	if (status === "open") {
		redirect("/");
	}

	if (status === "complete") {
		// update user plan
		const subscriberInfo = {
			email: customerEmail,
			planId: metadata.planId,
		};
		await createSubscription(subscriberInfo);

		return (
			<section className="flex min-h-[80vh] items-center justify-center bg-black px-4 py-12">
				<div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#202024] p-8 md:p-12">
					{/* Glow */}
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,93,253,0.15),transparent_60%)]" />

					<div className="relative text-center">
						<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
							<CheckCircle2 size={52} className="text-green-400" />
						</div>

						<h1 className="mt-8 text-4xl font-bold text-white">
							Payment Successful 🎉
						</h1>

						<p className="mt-4 leading-7 text-zinc-400">
							Thank you for your purchase. Your subscription has been
							activated successfully and a confirmation email has been
							sent to:
						</p>

						<p className="mt-3 break-all font-medium text-white">
							{customerEmail}
						</p>

						<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
							<h3 className="font-medium text-white">
								What&apos;s next?
							</h3>

							<ul className="mt-4 space-y-3 text-sm text-zinc-400">
								<li>✓ Your plan is now active.</li>

								<li>✓ Premium features are available immediately.</li>

								<li>
									✓ You can manage your subscription from your
									dashboard.
								</li>
							</ul>
						</div>

						<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
							<Link
								href="/"
								className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6D5DFD] px-6 py-3 font-medium text-white transition hover:bg-[#7d70ff]"
							>
								Go to Dashboard
								<ArrowRight size={16} />
							</Link>

							<Link
								href="/jobs"
								className="rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/5"
							>
								Browse Jobs
							</Link>
						</div>

						<p className="mt-8 text-sm text-zinc-500">
							Need help? Contact our support team anytime.
						</p>
					</div>
				</div>
			</section>
		);
	}

	return null;
}
