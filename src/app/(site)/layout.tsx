import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

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
