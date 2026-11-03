import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

// Re-render pages daily so seasonal copy (src/lib/seasons.ts) switches over on
// its own instead of waiting for the next deploy.
export const revalidate = 86400;

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
