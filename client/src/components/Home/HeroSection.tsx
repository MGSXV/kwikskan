import Image from "next/image";
import BluryBlob from "../common/BluryBlob";

const PreviewProduct = () => (
	<div>
		<div className="mx-auto max-w-6xl px-6 lg:px-8">
			<div className="mt-16 flow-root sm:mt-24">
				<div className="-m-2 rounded-xl bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
					<Image src="/dashboard-preview.jpg" quality={100}
						width={1364} height={866} alt="product preview"
						className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10" />
				</div>
			</div>
		</div>
	</div>
)

const HeroSection = () => (
	<div>
		<div>
			<div className="relative isolate">
				<BluryBlob />
				<PreviewProduct />
				<BluryBlob className="left-[calc(50%-13rem)] sm:left-[clac(50%-36rem)]" />
			</div>
		</div>
	</div>
)

export default HeroSection;