"use server";

import { revalidatePath } from "next/cache";
import { serverMutaion } from "../core/server";

export const createCompany = async (companyData) => {
	return serverMutaion("/api/companies", "POST", companyData);
};

export const updatedStatus = async (id, data) => {
	const result = serverMutaion(`/api/companies/${id}`, "PATCH", data);
	revalidatePath("/dashboard/admin/companies");
	return result;
};
