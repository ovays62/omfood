import "./globals.css";


export const metadata = {

  title: {
    default: "OmFood | AI Food Experience",
    template: "%s | OmFood"
  },

  description:
    "OmFood - Premium AI powered food ordering platform",

  keywords: [
    "food",
    "AI food",
    "3D food builder",
    "online ordering",
    "OmFood"
  ],

  authors: [
    {
      name: "OmFood Team"
    }
  ],

  creator: "OmFood",

  openGraph: {

    title:
      "OmFood | AI Food Experience",

    description:
      "Create your dream food with AI",

    type:
      "website",

    locale:
      "fa_IR"

  },

  robots: {

    index:
      true,

    follow:
      true

  }

};



export const viewport = {

  width:
    "device-width",

  initialScale:
    1,

  themeColor:
    "#050510"

};



export default function RootLayout({
  children
}) {


  return (

    <html
      lang="fa"
      dir="rtl"
    >

      <body>

        {children}

      </body>

    </html>

  );

}
