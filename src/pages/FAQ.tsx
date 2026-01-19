import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import PageHero from '@/components/shared/PageHero';
import { motion } from 'framer-motion';
import { faqs } from '@/data/products';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactFormSection from '@/components/home/ContactFormSection';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Frequently Asked Questions" 
          subtitle="Find answers to commonly asked questions about our services"
          backgroundImage="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
        />

        <section className="section-padding">
          <div className="container-custom max-w-3xl px-4">
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-xl px-4 md:px-6">
                    <AccordionTrigger className="text-left font-medium text-sm md:text-base hover:text-primary hover:no-underline py-4 md:py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
