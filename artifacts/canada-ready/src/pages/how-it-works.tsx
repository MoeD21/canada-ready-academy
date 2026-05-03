import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Users, BookOpen, Award } from "lucide-react";

const icons = [CheckCircle2, Users, BookOpen, Calendar, Award];

export default function HowItWorks() {
  const { t, language } = useLanguage();
  const steps = t("howItWorks.steps") as unknown as { title: string; desc: string }[];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("howItWorks.title")}</h1>
          <p className="text-muted-foreground text-xl max-w-xl mx-auto">{t("howItWorks.subtitle")}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-primary/15 hidden md:block" style={{ left: "2.5rem" }} />

            <div className="space-y-10">
              {Array.isArray(steps) && steps.map((step, i) => {
                const Icon = icons[i] || CheckCircle2;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="flex gap-6 items-start"
                  >
                    {/* Circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-xl shadow-md shadow-primary/25 z-10 relative">
                        {i + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-muted/30 rounded-2xl p-6 border border-border/50">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What happens during assessment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {language === "en" ? "What Happens During the Assessment?" : "ماذا يحدث خلال التقييم؟"}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {language === "en"
                  ? "Your free 15–20 minute assessment call is the most important step. It is completely free and commits you to nothing. We use this time to understand you fully before recommending anything."
                  : "مكالمة التقييم المجانية التي تستغرق 15–20 دقيقة هي أهم خطوة. مجانية تماماً ولا تُلزمك بشيء. نستخدم هذا الوقت لفهمك جيداً قبل أن نوصي بأي شيء."}
              </p>
              <ul className="space-y-3">
                {(t("assessment.whatHappens.items") as unknown as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-xl mb-2">
                {language === "en" ? "After the Assessment, You Will:" : "بعد التقييم ستحصل على:"}
              </h3>
              {[
                language === "en" ? "Be placed in Beginner or Intermediate group" : "التوزيع في مجموعة المبتدئين أو المتوسطين",
                language === "en" ? "Receive a recommended plan (Starter → Canada Ready)" : "الحصول على توصية بالخطة الأنسب",
                language === "en" ? "Get your WhatsApp group invite" : "الحصول على دعوة مجموعة واتساب",
                language === "en" ? "Receive Zoom links for your classes" : "استلام روابط زووم لحصصك",
                language === "en" ? "Get your welcome booklet and class schedule" : "الحصول على الكتيب الترحيبي وجدول الحصص",
                language === "en" ? "Access homework and practice materials" : "الوصول للواجبات ومواد التمرين",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" ? "Ready to Start?" : "مستعد للبدء؟"}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {language === "en"
              ? "Book your free assessment today. It takes 15–20 minutes and it could change your life in Canada."
              : "احجز تقييمك المجاني اليوم. يستغرق 15–20 دقيقة وقد يغير حياتك في كندا."}
          </p>
          <Link href="/assessment">
            <Button variant="secondary" size="lg" className="rounded-full px-10 h-14 text-lg font-bold" data-testid="button-how-cta">
              {t("common.bookAssessment")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
