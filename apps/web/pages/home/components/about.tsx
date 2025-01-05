import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const About = () => {
	return (
		<Container className="px-4 lg:px-20">
			<h1 className="text-3xl md:text-6xl font-medium text-primary text-center mt-20 mb-16 lg:mt-40 lg:mb-32">
				About Me
			</h1>
			<div className="flex flex-col items-center lg:items-start lg:flex-row gap-8">
				<Image
					width={312}
					height={465}
					alt="Ali Radmanesh"
					className="rounded-xl"
					src="/images/ali-radmanesh.webp"
				/>
				<div className="flex flex-col justify-evenly h-full items-center lg:items-start gap-6 lg:gap-12 lg:w-1/2">
					<h2 className="text-2xl lg:text-4xl font-medium">
						My journey as a developer
					</h2>
					<div>
						<p className="text-lg">
							I am a software engineer and a self-taught developer. I have a
							passion for creating innovative and user-friendly software
							solutions that make a positive impact on people's lives. I am
							constantly learning and improving my skills to stay at the
							forefront of technology.
						</p>
						<p className="text-lg">
							I am currently working as a software engineer at a leading tech
							company, where I am responsible for developing and maintaining
							cutting-edge software solutions. I am also an active member of the
							open-source community, contributing to various projects and
							collaborating with like-minded individuals.
						</p>
					</div>
					<Button
						size="lg"
						className="rounded-3xl bg-primary-blue p-6 text-base w-max"
					>
						Download CV <ArrowRight />
					</Button>
				</div>
			</div>
		</Container>
	);
};

export { About };
