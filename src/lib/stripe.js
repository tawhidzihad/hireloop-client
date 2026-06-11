import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
	seeker_pro: "price_1TgjoJQ60DevPMutbzB3I93h",
	seeker_premium: "price_1TgkBVQ60DevPMutOXA2O8E2",
	recruiter_growth: "price_1TgkCNQ60DevPMutMzhBxuwK",
	recruiter_enterprise: "price_1TgkCxQ60DevPMutMYvgeXbJ",
	seeker_free: "price_1TgkZ8Q60DevPMutAGKRU0vn",
	recruiter_free: "price_1TgkaWQ60DevPMut3D4aUPz4",
};
