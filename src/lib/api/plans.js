import { serverFetch } from "../core/server";

export const getPlanById = (plan) => {
	return serverFetch(`/api/plans?planId=${plan}`);
};
