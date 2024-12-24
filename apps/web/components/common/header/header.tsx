import { cn } from "@/utils/css";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import { headerItems } from "./data";

import styles from "./styles.module.css";

export const Header = () => {
	return (
		<div className="container h-header mx-auto px-4 md:px-6 lg:px-8">
			<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
				<Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
					<CodeXml className="h-8 w-8" />
				</Link>
				<div className="ml-auto flex gap-2">
					{headerItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={cn("group", styles["header-item"])}
							prefetch={false}
						>
							{item.name}
						</Link>
					))}
				</div>
			</header>
		</div>
	);
};
