"use server";

import { serverMutaion } from "../core/server";

export const createCompany = async (companyData) => {
	return serverMutaion("/api/companies", "POST", companyData);
};
