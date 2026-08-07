import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Akavin Visualizer',
  description: 'Room Product Visualizer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
