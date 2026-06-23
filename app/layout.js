import "./globals.css";

// --- GLOBAL SEO METADATA ---
export const metadata = {
  metadataBase: new URL('https://www.digroz.com'), // Replace with your live URL
  title: {
    default: "Digroz Studio | Powerful Apps for Creators",
    template: "%s | Digroz Studio", // Automatically adds the brand name to child pages
  },
  description: "Digroz Studio empowers independent creators with a high-performance, privacy-first suite of media tools including photo mastering, video editing, and audio playback.",
  keywords: ["Digroz Studio", "creator tools", "video editor", "photo editor", "privacy-first apps", "multimedia streaming"],
  authors: [{ name: "Digroz Studio" }],
  creator: "Digroz Studio",
  publisher: "Digroz Studio",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.digroz.com",
    siteName: "Digroz Studio",
    title: "Digroz Studio | Powerful Apps for Creators",
    description: "A high-performance, privacy-first suite of media tools ensuring your creative workflow remains entirely under your control.",
    images: [
      {
        url: "/assets/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Digroz Studio App Ecosystem",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digroz Studio | Powerful Apps for Creators",
    description: "Built on a strict privacy-first foundation, our apps combine minimalist design with professional-grade features.",
    images: ["/assets/hero_bg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="h-full antialiased"
    >
      <meta name="google-site-verification" content="0mcqBiKdiJqE0YI0hajhy2z782UvXFEkE5Avqqem0i4" />

      <body className="h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}