import { useLanguage } from "@/lib/language-context";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45 } }),
};

export default function Programs() {
  const { t, language } = useLanguage();

  const plans = [
    { key: "starter", color: "border-slate-200", badge: "", price: "$79" },
    { key: "premium", color: "border-primary ring-2 ring-primary/20", badge: t("common.popular"), price: "$129" },
    { key: "careerBoost", color: "border-orange-200", badge: "", price: "$179" },
    { key: "canadaReady", color: "border-purple-200", badge: "", price: "$249" },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("pricing.title")}</h1>
          <p className="text-muted-foreground text-xl">{t("pricing.subtitle")}</p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map(({ key: plan, color, badge, price }, index) => {
              const features = t(`pricing.${plan}.features`) as unknown as string[];
              const isPopular = index === 1;
              return (
                <motion.div
                  key={plan}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex flex-col"
                >
                  <Card className={`flex flex-col h-full border-2 ${color} shadow-sm hover:shadow-md transition-shadow`}>
                    {badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap z-10">
                        {badge}
                      </div>
                    )}
                    <CardHeader className="text-center pt-8 pb-6">
                      <h2 className="text-2xl font-extrabold mb-1">{t(`pricing.${plan}.name`)}</h2>
                      <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{t(`pricing.${plan}.bestFor`)}</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-extrabold">{price}</span>
                        <span className="text-muted-foreground">{t("common.monthly")}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col px-6 pb-8">
                      <ul className="space-y-3 mb-8 flex-1">
                        {Array.isArray(features) && features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? "text-primary" : "text-emerald-600"}`} />
                            <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto space-y-3">
                        <Link href="/assessment">
                          <Button
                            className="w-full h-12 rounded-full text-sm font-bold"
                            variant={isPopular ? "default" : "outline"}
                            data-testid={`button-enroll-${plan}`}
                          >
                            {t("common.bookAssessment")}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How classes are organized */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {language === "en" ? "How Classes Are Organized" : "كيف تُنظَّم الحصص"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en"
                ? "All plans share the same 3 live classes per week. Plans only differ in coaching calls, resources, and personal support."
                : "جميع الخطط تشترك في نفس 3 حصص مباشرة أسبوعياً. تختلف الخطط فقط في مكالمات التوجيه والموارد والدعم الشخصي."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold">B</div>
                  <h3 className="font-bold text-lg">
                    {language === "en" ? "Beginner Group" : "مجموعة المبتدئين"}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {language === "en"
                    ? "For newcomers with basic or no English. Focus on building foundations, confidence, and daily communication."
                    : "للوافدين الجدد ذوي الإنجليزية الأساسية أو المنعدمة. التركيز على بناء الأساسيات والثقة والتواصل اليومي."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">I</div>
                  <h3 className="font-bold text-lg">
                    {language === "en" ? "Intermediate Group" : "مجموعة المتوسطين"}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {language === "en"
                    ? "For newcomers who can communicate but need job-level English, career support, and Canadian life guidance."
                    : "للوافدين القادرين على التواصل لكن يحتاجون إنجليزية على مستوى العمل ودعم مهني وتوجيه للحياة الكندية."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly coaching per plan */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {language === "en" ? "Monthly Coaching Calls" : "مكالمات التوجيه الشهرية"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Private 1-on-1 calls with your coach, based on your plan."
                : "مكالمات خاصة 1-على-1 مع مدربك حسب خطتك."}
            </p>
          </div>
          <div className="space-y-4">
            {[
              { plan: language === "en" ? "Starter" : "البداية", calls: language === "en" ? "No private calls (group support only)" : "بدون مكالمات خاصة (دعم جماعي فقط)", icon: "—" },
              { plan: language === "en" ? "Premium" : "المميز", calls: language === "en" ? "1 monthly 1-on-1 coaching call" : "مكالمة توجيه خاصة واحدة شهرياً", icon: "1" },
              { plan: language === "en" ? "Career Boost" : "الانطلاقة المهنية", calls: language === "en" ? "2 monthly 1-on-1 coaching calls" : "مكالمتا توجيه خاصة شهرياً", icon: "2" },
              { plan: language === "en" ? "Canada Ready" : "جاهز لكندا", calls: language === "en" ? "3 monthly 1-on-1 coaching calls" : "3 مكالمات توجيه خاصة شهرياً", icon: "3" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-xl border border-border/60 bg-muted/20">
                <span className="font-bold">{row.plan}</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-extrabold text-sm flex items-center justify-center">
                    {row.icon}
                  </div>
                  <span className="text-muted-foreground text-sm">{row.calls}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <Star className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" ? "Not sure which plan is right for you?" : "لست متأكداً من أي خطة تناسبك؟"}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            {language === "en"
              ? "Book your free assessment and we will recommend the best plan for your level and goals."
              : "احجز تقييمك المجاني وسنوصي لك بأفضل خطة تناسب مستواك وأهدافك."}
          </p>
          <Link href="/assessment">
            <Button variant="secondary" size="lg" className="rounded-full px-10 h-14 text-lg font-bold" data-testid="button-programs-cta">
              {t("common.bookAssessment")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
