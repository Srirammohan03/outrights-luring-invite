import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import PageHero from '@/components/shared/PageHero';
import ProcessSection from '@/components/home/ProcessSection';
import ContactFormSection from '@/components/home/ContactFormSection';

export default function Process() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Our Process" 
          subtitle="From concept to delivery, we follow a meticulous process to ensure your invitation is perfect"
          backgroundImage="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=80"
        />
        <ProcessSection />
        <ContactFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
