import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateAssessment } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, Phone } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { motion } from "framer-motion";

const assessmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  whatsapp: z.string().min(5, "WhatsApp is required"),
  englishLevel: z.string().min(1, "English level is required"),
  country: z.string().min(2, "Country is required"),
  careerGoals: z.string().min(5, "Career goals are required"),
  timeInCanada: z.string().min(1, "Time in Canada is required"),
  biggestChallenge: z.string().min(5, "Biggest challenge is required"),
});

type AssessmentFormValues = z.infer<typeof assessmentSchema>;

export default function Assessment() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const createAssessment = useCreateAssessment();
  const [submitted, setSubmitted] = useState(false);

  const whatHappensItems = t("assessment.whatHappens.items") as unknown as string[];

  const form = useForm<AssessmentFormValues>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: { name: "", whatsapp: "", englishLevel: "", country: "", careerGoals: "", timeInCanada: "", biggestChallenge: "" },
  });

  const onSubmit = (data: AssessmentFormValues) => {
    createAssessment.mutate(
      { data },
      {
        onSuccess: () => { setSubmitted(true); },
        onError: () => {
          toast({ variant: "destructive", title: t("common.error"), description: language === "en" ? "Something went wrong. Please try again." : "حدث خطأ. يرجى المحاولة مرة أخرى." });
        },
      }
    );
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
          <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-8">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{t("common.success")}</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t("assessment.form.success")}</p>
          <a
            href="https://wa.me/15870000000"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-success-whatsapp"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
          >
            <Phone size={22} />
            {t("assessment.form.successWhatsApp")}
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t("assessment.title")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{t("assessment.subtitle")}</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left: What happens */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-5">{t("assessment.whatHappens.title")}</h2>
                <ul className="space-y-4">
                  {Array.isArray(whatHappensItems) && whatHappensItems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 p-5 bg-muted/40 rounded-2xl border border-border/50">
                  <p className="font-bold mb-2 text-sm">
                    {language === "en" ? "After the assessment:" : "بعد التقييم:"}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{language === "en" ? "Get placed in the right group" : "التوزيع في المجموعة المناسبة"}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{language === "en" ? "Receive WhatsApp group invite" : "استلام دعوة مجموعة واتساب"}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{language === "en" ? "Get Zoom links & class schedule" : "الحصول على روابط زووم وجدول الحصص"}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{language === "en" ? "Access homework & welcome booklet" : "الوصول للواجبات والكتيب الترحيبي"}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3">
              <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("assessment.form.name")}</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-assessment-name" />
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
                            <FormLabel>{t("assessment.form.whatsapp")}</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 587 000 0000" {...field} data-testid="input-assessment-whatsapp" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="englishLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("assessment.form.englishLevel")}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-assessment-english">
                                  <SelectValue placeholder={language === "en" ? "Select level" : "اختر المستوى"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="beginner">{t("assessment.form.englishLevels.beginner")}</SelectItem>
                                <SelectItem value="intermediate">{t("assessment.form.englishLevels.intermediate")}</SelectItem>
                                <SelectItem value="advanced">{t("assessment.form.englishLevels.advanced")}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("assessment.form.country")}</FormLabel>
                            <FormControl>
                              <Input placeholder={language === "en" ? "e.g. Egypt, Syria, Iraq" : "مثل: مصر، سوريا، العراق"} {...field} data-testid="input-assessment-country" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="timeInCanada"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("assessment.form.timeInCanada")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-assessment-time">
                                <SelectValue placeholder={language === "en" ? "Select time" : "اختر المدة"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="justArrived">{t("assessment.form.times.justArrived")}</SelectItem>
                              <SelectItem value="lessThan1">{t("assessment.form.times.lessThan1")}</SelectItem>
                              <SelectItem value="oneToTwo">{t("assessment.form.times.oneToTwo")}</SelectItem>
                              <SelectItem value="moreThan2">{t("assessment.form.times.moreThan2")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="careerGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("assessment.form.careerGoals")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("assessment.form.careerGoalsPlaceholder")}
                              className="min-h-[100px]"
                              {...field}
                              data-testid="input-assessment-goals"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="biggestChallenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("assessment.form.biggestChallenge")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("assessment.form.biggestChallengePlaceholder")}
                              className="min-h-[100px]"
                              {...field}
                              data-testid="input-assessment-challenge"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-14 text-lg rounded-full font-bold"
                      disabled={createAssessment.isPending}
                      data-testid="button-submit-assessment"
                    >
                      {createAssessment.isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                      {language === "en" ? "Book My Free Assessment" : "احجز تقييمي المجاني"}
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
