import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
	return (
		<Container>
			<h1 className="lg:w-[30ch] text-3xl md:text-6xl font-medium text-primary text-center leading-relaxed lg:leading-[1.3] mx-4 lg:mx-auto mt-10 lg:mt-20">
				<span className="text-3xl md:text-6xl font-medium text-secondary-gray">
					I'm Ali,{" "}
				</span>
				a software engineer passionate about solving problems and creating
				impactful solutions with technology.
			</h1>
			<div className="flex gap-4 justify-center mt-6 lg:mt-10">
				<Button size="lg" className="rounded-3xl bg-primary-blue p-6 text-base">
					Let's Talk <ArrowRight />
				</Button>
				<Button
					variant="outline"
					size="lg"
					className="rounded-3xl p-6 text-base border-primary"
				>
					My Services
				</Button>
			</div>
		</Container>
	);
};

export { Hero };
