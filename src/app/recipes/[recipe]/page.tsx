import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Recipe } from ".";

export default function RecipePage() {
	return (
		<>
			<Header />
			<div>
				<div className="container mx-auto">
					<div className="max-w-[1440px] m-auto mt-[30px] mb-[90px]">
						<Recipe />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}