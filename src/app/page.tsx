import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIsKindred from '@/components/WhatIsKindred';
import HowItWorks from '@/components/HowItWorks';
import WhySafe from '@/components/WhySafe';
import WhoFor from '@/components/WhoFor';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsKindred />
        <HowItWorks />
        <WhySafe />
        <WhoFor />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
