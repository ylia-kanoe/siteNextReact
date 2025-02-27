import { Header } from "@/components/header";
import { Product } from "../[products]";
import { Footer } from "@/components/footer";

export default function Products() {
	return (
		<>
			<Header />
			<div>
				<div className="container mx-auto">
					<div className="max-w-[1440px] m-auto">
						<Product />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}