"use server";

import { serverMutaion } from "../core/server";

export const createSubscription = async (subscriptionData) => {
	return serverMutaion("/api/subscriptions", "POST", subscriptionData);
};
