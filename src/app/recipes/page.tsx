import { Header } from "@/components/header";
import { Recipes } from ".";
import { Footer } from "@/components/footer";

export default function RecipesPage() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="max-w-[1200px] m-auto">
					<Recipes />
				</div>
			</div>
			<Footer />
		</>
	);
}
