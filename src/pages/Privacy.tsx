import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="font-heading text-4xl text-foreground mb-8">Privacy Policy</h1>
          <div className="prose text-muted-foreground space-y-4">
            <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
            <h2 className="text-xl font-semibold text-foreground mt-6">Information We Collect</h2>
            <p>We collect personal information you provide when making enquiries, including name, email, phone number, and event details.</p>
            <h2 className="text-xl font-semibold text-foreground mt-6">How We Use Your Information</h2>
            <p>We use your information to process enquiries, deliver services, and communicate with you about your orders.</p>
            <h2 className="text-xl font-semibold text-foreground mt-6">Contact Us</h2>
            <p>For questions about this policy, contact us at hello@outrightsluringinvite.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
