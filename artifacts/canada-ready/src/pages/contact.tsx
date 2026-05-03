import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const createContact = useCreateContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", whatsapp: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    createContact.mutate(
      { data },
      {
        onSuccess: () => {
          toast({ title: t("common.success"), description: t("contact.form.success") });
          form.reset();
        },
        onError: () => {
          toast({ variant: "destructive", title: t("common.error"), description: language === "en" ? "Something went wrong. Please try again." : "حدث خطأ. يرجى المحاولة مرة أخرى." });
        },
      }
    );
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("contact.title")}</h1>
          <p className="text-muted-foreground text-xl">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="py-10 bg-[#075E54]">
        <div className="container mx-auto px-4 max-w-3xl text-center text-white">
          <h2 className="text-2xl font-bold mb-2">{t("contact.whatsappSection.title")}</h2>
          <p className="text-white/80 mb-6">{t("contact.whatsappSection.desc")}</p>
          <a
            href="https://wa.me/15870000000"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-contact-whatsapp"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            <Phone size={22} />
            {t("contact.whatsappSection.cta")}
          </a>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6">
                  {language === "en" ? "Our Contact Details" : "تفاصيل التواصل"}
                </h2>
                <div className="space-y-6">
                  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.channels.whatsapp")}</h3>
                      <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-whatsapp">
                        +1 (587) 000-0000
                      </a>
                    </div>
                  </motion.div>

                  <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.channels.email")}</h3>
                      <a href="mailto:hello@canadareadyacademy.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                        hello@canadareadyacademy.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <Facebook size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.channels.facebook")}</h3>
                      <a href="https://facebook.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook">
                        @CanadaReadyAcademy
                      </a>
                    </div>
                  </motion.div>

                  <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center flex-shrink-0">
                      <Instagram size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.channels.instagram")}</h3>
                      <a href="https://instagram.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
                        @canadareadyacademy
                      </a>
                    </div>
                  </motion.div>

                  <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{language === "en" ? "Location" : "الموقع"}</h3>
                      <p className="text-muted-foreground">{language === "en" ? "Online — Serving all of Canada" : "عبر الإنترنت — نخدم جميع أنحاء كندا"}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3">
              <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold mb-6">{t("contact.form.title")}</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.name")}</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-contact-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.email")}</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.whatsapp")}</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-contact-whatsapp" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.messagePlaceholder")}
                              className="min-h-[140px]"
                              {...field}
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-12 rounded-full font-bold"
                      disabled={createContact.isPending}
                      data-testid="button-submit-contact"
                    >
                      {createContact.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
