import SignupPage from "./SignupPage";

const Signup = async ({ searchParams }) => {
	const params = await searchParams;
	const redirectTo = params?.redirect || "/";

	return <SignupPage redirectTo={redirectTo}></SignupPage>;
};

export default Signup;
