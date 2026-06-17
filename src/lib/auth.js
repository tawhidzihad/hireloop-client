import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
	database: mongodbAdapter(db, { client }),
	emailAndPassword: { enabled: true },
	user: {
		additionalFields: {
			plan: {
				type: "string",
				default: "seeker_free",
			},
		},
	},
	databaseHooks: {
		user: {
			create: {
				before: async (user) => {
					const plan = user.plan || "seeker_free";
					const role = plan.startsWith("recruiter")
						? "recruiter"
						: "seeker";
					return {
						data: {
							...user,
							role,
							plan,
						},
					};
				},
			},
		},
	},
	plugins: [
		admin({
			defaultRole: "seeker",
		}),
	],
});
