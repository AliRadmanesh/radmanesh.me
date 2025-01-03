import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/utils/css";
import { CodeXml, Menu } from "lucide-react";
import Link from "next/link";
import { headerItems } from "./data";

import styles from "./styles.module.css";

const HeaderItems = ({ mobile }: { mobile?: boolean }) =>
	headerItems.map((item) => (
		<Link
			key={item.name}
			href={item.href}
			className={cn(
				styles["header-item"],
				mobile && styles["header-item-mobile"],
			)}
			prefetch={false}
		>
			{item.name}
		</Link>
	));

export const Header = () => (
	<header className="sticky top-0 z-50 w-full outline outline-1 outline-border bg-white dark:outline-gray-800 dark:bg-gray-950">
		<div className="container mx-auto flex h-header max-w-6xl items-center justify-between px-4 md:px-6">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<CodeXml className="h-8 w-8" />
				<span className="sr-only">Website icon</span>
			</Link>
			{/* Desktop */}
			<nav className="hidden items-center gap-10 text-sm font-medium md:flex">
				<HeaderItems />
			</nav>
			{/* Mobile */}
			<div className="flex md:hidden items-center gap-4">
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="rounded-3xl md:hidden bg-primary-blue px-7 hover:bg-primary-blue-dark"
						>
							<Menu className="h-8 w-8 text-white dark:text-white" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent
						side="top"
						className="md:hidden fixed top-0 left-0 w-screen h-screen bg-white dark:bg-gray-950"
					>
						<div className="grid gap-4 p-4 mt-4 h-3/4 text-center justify-center items-center">
							<HeaderItems mobile />
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</header>
);
