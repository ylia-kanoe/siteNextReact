import { Header } from "@/components/header";
import { Product } from ".";
import { Footer } from "@/components/footer";

export default function Products() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="max-w-[1200px] m-auto">
					<Product />
				</div>
			</div>
			<Footer />
		</>
	);
}
