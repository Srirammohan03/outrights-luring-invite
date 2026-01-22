import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Check, Play, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import VideoPreview, { VideoPlatform } from "@/components/shared/VideoPreview";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    language: "English",
    notes: "",
  });

  const [videoOpen, setVideoOpen] = useState(false);

  if (!product) return <div>Product not found</div>;

  const currentUrl = window.location.href;

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in: ${product.title}\n\nProduct Link: ${currentUrl}\nPrice: Starting at ₹${product.priceFrom}\n\nMy Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nOccasion Date: ${formData.date}\nLanguage: ${formData.language}\nNotes: ${formData.notes}`,
    );

    window.open(
      `https://api.whatsapp.com/send?phone=919121080131&text=${message}`,
      "_blank",
    );
  };

  const handleEmailEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We will contact you soon.",
    });
  };

  const hasVideo = !!product.video?.url;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8">
        <div className="container-custom section-padding">
          <Link
            to={`/collections/${product.collectionSlug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {product.collection}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-border bg-muted relative">
                {hasVideo ? (
                  <>
                    <div className="absolute inset-0 pointer-events-none">
                      <VideoPreview
                        url={product.video!.url}
                        platform={product.video!.platform as VideoPlatform}
                        thumbnail={product.video!.thumbnail}
                        title={product.title}
                        mode="card"
                        interactive={false}
                        className="w-full h-full"
                        mediaClassName="w-full h-full object-cover"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setVideoOpen(true)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Play video"
                    >
                      <span className="w-16 h-16 rounded-full bg-background/85 border border-border flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                        <Play className="w-7 h-7" />
                      </span>
                    </button>
                  </>
                ) : (
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>

            {/* Details & Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
                  {product.title}
                </h1>
                {/* <p className="text-2xl font-bold text-primary mb-4">
                  Starting at ₹{product.priceFrom.toLocaleString()}
                </p> */}

                {/* <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Clock className="w-4 h-4" /> {product.deliveryTime} delivery
                </div> */}

                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-lg">What's Included</h3>
                <ul className="space-y-2">
                  {product.whatIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enquiry Form */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Enquire Now</h3>

                <form onSubmit={handleEmailEnquiry} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="date"
                    placeholder="Occasion Date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />

                  <select
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background"
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Telugu</option>
                  </select>

                  <Textarea
                    placeholder="Additional notes..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="whatsapp"
                      size="lg"
                      className="flex-1"
                      onClick={handleWhatsAppEnquiry}
                    >
                      WhatsApp Enquiry
                    </Button>
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="flex-1"
                    >
                      Email Enquiry
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* ✅ Video Modal */}
      <AnimatePresence>
        {videoOpen && hasVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
              onClick={() => setVideoOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="
                relative z-10 w-full
                sm:max-w-[520px]
                bg-background
                rounded-t-2xl sm:rounded-2xl
                overflow-hidden border border-border shadow-xl
                flex flex-col
              "
              style={{ height: "90vh" }}
              initial={{ y: 16, scale: 0.99, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 16, scale: 0.99, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Preview</p>
                  <p className="font-semibold truncate">{product.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1  bg-black items-center justify-center">
                <div className="w-full h-full aspect-video">
                  <VideoPreview
                    url={product.video!.url}
                    platform={product.video!.platform as VideoPlatform}
                    thumbnail={product.video!.thumbnail}
                    title={product.title}
                    mode="modal"
                    interactive={true}
                    className="w-full h-full"
                    mediaClassName="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
