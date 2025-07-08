import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'DEMO FTAPP GAME',
  description: 'Demo del juego multijugador - 3 fichas gratis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="app-container">
          <div className="app-title">
            <img src="/images/logo.png" alt="FTAPP GAME" className="logo-image" />
          </div>
          {children}
          <WhatsAppButton phoneNumber="573018695692" />
        </div>
      </body>
    </html>
  );
}