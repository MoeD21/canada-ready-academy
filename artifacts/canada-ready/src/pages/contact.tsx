import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const createContact = useCreateContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    createContact.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: t('common.success'),
            description: t('contact.form.success'),
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: t('common.error'),
            description: "Something went wrong. Please try again.",
          });
        }
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('contact.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">hello@canadaready.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                <p className="text-muted-foreground">+1 (587) 000-0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">Online & Across Canada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.name')}</FormLabel>
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
                    <FormLabel>{t('contact.form.email')}</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} data-testid="input-contact-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.whatsapp')}</FormLabel>
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
                    <FormLabel>{t('contact.form.message')}</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-[120px]" {...field} data-testid="input-contact-message" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={createContact.isPending} data-testid="button-submit-contact">
                {createContact.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t('common.submit')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
