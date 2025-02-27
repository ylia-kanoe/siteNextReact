import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<StoreProvider>
				<body className={`font-sans`}>
					{children}
				</body>
			</StoreProvider>
		</html>
	);
}
