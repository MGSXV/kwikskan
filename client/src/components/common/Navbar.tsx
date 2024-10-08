import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Fragment } from "react";
import { buttonVariants } from "../ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {

	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="flex z-14 font-semibold">
						<span>kwikskan</span><span className="font-bold text-blue-600">.</span>
					</Link>
					{/* TODO: add mobile navbar */}
					<div className="hidden items-center space-x-4 sm:flex">
						<Fragment>
							<Link href="/pricing" className={buttonVariants({
								variant: "ghost", size: "sm"
							})}>pricing</Link>
							<LoginLink className={buttonVariants({
									variant: "ghost", size: "sm"
								})}>
								Sign in
							</LoginLink>
							<RegisterLink className={buttonVariants({
									size: "sm"
								})}>
								Get started <ArrowRight className="ml-1.5 size-5" />
							</RegisterLink>
						</Fragment>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar;