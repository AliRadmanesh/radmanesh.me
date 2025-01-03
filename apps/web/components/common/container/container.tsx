import { cn } from "@/utils/css";
import type { FC } from "react";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={cn("container mx-auto", className)}>{children}</div>;
};

export { Container };
