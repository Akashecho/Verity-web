import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verity Web',
  description: 'Verity Web Application',
  keywords: ['verity', 'web', 'application'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <div className="container-page py-8">
          {children}
        </div>
      </body>
    </html>
  );
}