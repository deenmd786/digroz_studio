import "./globals.css";

// --- GLOBAL SEO METADATA ---
export const metadata = {
  metadataBase: new URL('https://www.digroz.com'), // Replace with your live URL
  title: {
    default: "Digroz Studio | Powerful Apps for Creators",
    template: "%s | Digroz Studio", 
  },
  description: "Digroz Studio empowers independent creators with a high-performance, privacy-first suite of media tools including photo mastering, video editing, and audio playback.",
  keywords: ["Digroz Studio", "creator tools", "video editor", "photo editor", "privacy-first apps", "multimedia streaming"],
  authors: [{ name: "Digroz Studio" }],
  creator: "Digroz Studio",
  publisher: "Digroz Studio",
  
  // 1. ADD YOUR FAVICONS HERE
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    // If you ever add an apple touch icon to your public folder, you can link it here:
    // apple: ['/apple-touch-icon.png'],
  },

  // 2. PROPERLY ADD GOOGLE SITE VERIFICATION HERE
  verification: {
    google: 'Rp_0rNiNE5_jH5jZJn9nm__Zo2BxRlt_Ogb6vS9HAqU',
  },
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
      <body className="h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}