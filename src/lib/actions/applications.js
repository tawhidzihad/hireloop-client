"use server";

import { serverMutaion } from "../core/server";

export const submitApplication = async (newApplicationData) => {
	return serverMutaion("/api/applications", "POST", newApplicationData);
};
