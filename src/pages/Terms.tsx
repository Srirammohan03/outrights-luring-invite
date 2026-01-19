import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="font-heading text-4xl text-foreground mb-8">Terms of Service</h1>
          <div className="prose text-muted-foreground space-y-4">
            <p>By using our services, you agree to these terms. Please read them carefully.</p>
            <h2 className="text-xl font-semibold text-foreground mt-6">Services</h2>
            <p>We provide digital invitation design and video creation services. Delivery times vary based on package selection.</p>
            <h2 className="text-xl font-semibold text-foreground mt-6">Revisions</h2>
            <p>Each package includes a specific number of revision rounds. Additional revisions may incur extra charges.</p>
            <h2 className="text-xl font-semibold text-foreground mt-6">Payment</h2>
            <p>Payment terms will be communicated during the enquiry process. We accept various payment methods.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
