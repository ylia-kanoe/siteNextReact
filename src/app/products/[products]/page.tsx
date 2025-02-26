import { Product } from "../[products]";

export default function Products() {
	return (
		<>
			<div>
				<div className="container mx-auto">
					<div className="max-w-[1440px] m-auto">
						<Product />
					</div>
				</div>
			</div>
		</>
	);
}