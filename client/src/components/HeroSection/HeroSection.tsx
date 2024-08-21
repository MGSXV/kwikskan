import BluryBlob from "../common/BluryBlob";
import PreviewProduct from "./PreviewProduct";

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