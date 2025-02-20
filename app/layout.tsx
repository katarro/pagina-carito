import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Carito Arte',
  description: 'Página web de Carito Arte',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">

      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
