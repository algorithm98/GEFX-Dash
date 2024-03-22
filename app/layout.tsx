import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const jost = Jost({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://thcl.in/tstech/"),

	title: {
		template: "GEFX 2.0 | TSTECH - THCL",
		default: "GEFX 2.0 | TSTECH - THCL",
	},
	authors: {
		name: "Prakalp Hodavadekar - TSTECH | THCL",
	},
	description:
		"GlobalEmpireFX - User Dashboard.",
	openGraph: {
		title: "GEFX 2.0 By TSTECH - THCl",
		description: "Globalempirefx - Dashboard ",
		url: "https://thcl.in/tstech",
		siteName: "GEFX 2.0 - Prakalp",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Tstech", "Prakalp", "Thcl", "Touchwood Creations"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${jost.className} antialiased dark:bg-[#09090B]`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<main className="">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
