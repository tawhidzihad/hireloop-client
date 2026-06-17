"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const setUserRole = async (userId, role) => {
	const data = await auth.api.setRole({
		body: {
			userId: userId,
			role: role,
		},
		headers: await headers(),
	});
	return data;
};
