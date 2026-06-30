import SignInPage from "./SignInPage";

const Signinpage = async ({ searchParams }) => {
	const params = await searchParams;
	const redirectTo = params?.redirect || "/";
	return <SignInPage redirectTo={redirectTo}></SignInPage>;
};

export default Signinpage;
