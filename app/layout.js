import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FIVE Palm Jumeirah | Luxury Hotel &amp; Resort in Dubai",
  description:
    "Hotels and Resorts in Dubai | FIVE Palm Jumeirah Hotel and Resort in Dubai has 470 luxurious and elegant rooms, many enjoying views of the Arabian Gulf and Dubai Skyline. FIVE Palm Jumeirah Hotel in Dubai is for the experience seeker, the life and soul of the party, the thrill maker; those who live the moment in Dubai’s most iconic location.",
  icon: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
