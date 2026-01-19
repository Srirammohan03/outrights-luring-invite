import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import PageHero from '@/components/shared/PageHero';
import { motion } from 'framer-motion';
import { Video, Image, Palette, PenTool, Gift, Sparkles, Clock, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/home/ContactFormSection';

const services = [
  {
    icon: Video,
    title: 'AI Video Invitations',
    description: 'Experience the future of invitations with our AI-powered video creations. Our 3D animated invitations bring your love story to life with stunning visuals, cinematic transitions, and personalized narratives that captivate your guests from the first frame.',
    features: ['3D Palace Animations', 'Custom Storyboards', 'AI Voice Narration', 'Cinematic Quality'],
    link: '/collections?category=ai-video-invites',
    price: 'Starting from ₹3,499',
  },
  {
    icon: Image,
    title: 'Digital Invitations',
    description: 'Elegant digital invitations crafted with love for every occasion. From traditional motifs to modern minimalist designs, our digital invites are perfect for weddings, anniversaries, birthdays, and all of life\'s celebrations.',
    features: ['Multiple Design Styles', 'Quick Turnaround', 'Print-Ready Files', 'Social Media Optimized'],
    link: '/collections?category=digital-invites',
    price: 'Starting from ₹799',
  },
  {
    icon: Palette,
    title: 'Custom Logo Design',
    description: 'Create a unique identity for your celebration with our custom couple monograms and wedding logos. These beautiful designs become the signature of your event, appearing on all your stationery and decor.',
    features: ['3 Concept Options', 'Unlimited Color Variations', 'Vector Files', 'Brand Guidelines'],
    link: '/collections/logo',
    price: 'Starting from ₹1,999',
  },
  {
    icon: PenTool,
    title: 'Caricature Art',
    description: 'Add a playful and personal touch to your invitations with our custom caricature illustrations. Our artists capture your likeness in a fun, artistic style that brings smiles to everyone who receives your invite.',
    features: ['Custom Couple Portraits', 'Themed Backgrounds', 'Outfit Customization', 'Multiple Poses'],
    link: '/collections/caricature',
    price: 'Starting from ₹2,499',
  },
  {
    icon: Gift,
    title: 'Complete Stationery',
    description: 'Get everything you need for your celebration with our complete stationery suites. From save the dates to thank you cards, we ensure all your wedding communications share a cohesive, beautiful design.',
    features: ['Save the Date', 'RSVP Cards', 'Menu Cards', 'Thank You Notes'],
    link: '/collections/stationery',
    price: 'Starting from ₹2,999',
  },
  {
    icon: Sparkles,
    title: 'Rush Delivery',
    description: 'Need your invitations urgently? Our express service delivers stunning designs within 24 hours. We understand that sometimes plans change quickly, and we\'re here to help without compromising on quality.',
    features: ['24-Hour Turnaround', 'Priority Support', 'Quick Revisions', 'Dedicated Designer'],
    link: '/contact',
    price: 'Express charges apply',
  },
];

const features = [
  { icon: Clock, title: '24-72 Hour Delivery', description: 'Quick turnaround without compromising quality' },
  { icon: Users, title: 'Personal Designer', description: 'Work one-on-one with our creative experts' },
  { icon: Award, title: 'Premium Quality', description: 'High-resolution files ready for any use' },
  { icon: Heart, title: 'Unlimited Revisions', description: 'We work until you\'re completely satisfied' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Our Services" 
          subtitle="Comprehensive invitation design services for every celebration"
          backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
        />

        {/* Features Bar */}
        <section className="py-8 md:py-12 bg-muted/30 border-y border-border">
          <div className="container-custom px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 md:gap-4"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-foreground">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-colors"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-primary font-semibold mb-3">{service.price}</p>
                        <p className="text-muted-foreground text-sm md:text-base mb-4">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature) => (
                            <span key={feature} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <Link to={service.link}>
                          <Button variant="outline" size="sm">
                            Explore →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
