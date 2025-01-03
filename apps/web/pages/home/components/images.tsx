import { Container } from "@/components/common/container";
import Image from "next/image";

const Images = () => {
	return (
		<Container className="lg:flex lg:justify-center mt-20 w-full max-w-[100vw] overflow-x-auto overflow-y-hidden no-scrollbar">
			<div className="flex gap-2 w-max">
				<div className="w-[166.5px] lg:w-[333px] h-[327px] lg:h-[654px] overflow-hidden rounded-xl">
					<Image
						src="/images/mobile.webp"
						alt="Mobile Design"
						className="w-full h-full object-cover flex-shrink-0"
						width={333}
						height={654}
					/>
				</div>
				<div className="w-[512px] lg:w-[1024px] h-[327px] lg:h-[654px] overflow-hidden rounded-xl">
					<Image
						src="/images/desktop.webp"
						alt="Desktop Design"
						className="w-full h-full object-cover flex-shrink-0"
						width={1024}
						height={654}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Images;
