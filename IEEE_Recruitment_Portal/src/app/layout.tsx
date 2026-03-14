import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { getSession } from '@/lib/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HireX | Live Interview Portal',
  description: 'AI-Powered Recruitment & Interview Platform by HireX',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-[#F5F5F7] print:bg-white">
          {/* Hide Nav if no session (Login Page handles its own layout or it's hidden) */}
          <div className="print:hidden">
            {session && <Navigation user={session} />}
          </div>
          <main className={session ? "flex-1 ml-64 p-8 overflow-y-auto h-screen print:ml-0 print:p-0 print:h-auto print:overflow-visible" : "flex-1 p-8 overflow-y-auto h-screen"}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

