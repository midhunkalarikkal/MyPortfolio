import './globals.css';
        

import { Orbitron, Poppins, Audiowide } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-orbitron',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins',
});

const audioWide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
});

export const metadata = {
  title: 'Midhun K Paniker',
  description: 'midhun k paniker portfolio website',
  icons: {
    icon: "/midhun.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en" className={`${orbitron.variable} ${poppins.variable} ${audioWide.variable}`}>
    <head>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    </head>
      <body className="font-['poppins'] bg-neutral-950 min-h-screen w-full">{children}</body>
    </html>
  )
}
