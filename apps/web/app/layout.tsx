import { Header } from "@/components/common/header";
import { interTightVariableFont } from "@/utils/fonts";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="en">
			<body className={interTightVariableFont.variable}>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
