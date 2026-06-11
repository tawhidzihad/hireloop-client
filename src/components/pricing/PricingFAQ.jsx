const faqs = [
	{
		q: "Can I cancel anytime?",
		a: "Yes. You can cancel your subscription at any time.",
	},
	{
		q: "Do you offer refunds?",
		a: "Refunds are handled according to our refund policy.",
	},
	{
		q: "What payment methods are supported?",
		a: "Visa, Mastercard, American Express and PayPal.",
	},
	{
		q: "Can I switch plans later?",
		a: "Absolutely. You can upgrade or downgrade anytime.",
	},
];

export default function PricingFAQ() {
	return (
		<div className="mt-20">
			<h2 className="text-center text-3xl font-bold text-white">
				Frequently Asked Questions
			</h2>

			<div className="mx-auto mt-10 max-w-4xl space-y-4">
				{faqs.map((faq) => (
					<details
						key={faq.q}
						className="rounded-2xl border border-white/10 bg-[#202024] p-5"
					>
						<summary className="cursor-pointer font-medium text-white">
							{faq.q}
						</summary>

						<p className="mt-4 text-zinc-400">{faq.a}</p>
					</details>
				))}
			</div>
		</div>
	);
}
