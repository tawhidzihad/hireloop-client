"use server";

import { serverMutaion } from "../core/server";

export const createJob = async (newJobData) => {
	return serverMutaion("/api/jobs", "POST", newJobData);
};
