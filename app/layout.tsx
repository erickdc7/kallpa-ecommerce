// app/layout.tsx
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartSidebar } from './components/CartSidebar';
import { CartProvider } from './contexts/CartContext';
import Preloader from './components/Preloader';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'K A L L P A',
  description: 'Bolsos y accesorios artesanales hechos a mano en Perú',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={lato.className} suppressHydrationWarning>
        {/* <Preloader  /> */}
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CartSidebar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}