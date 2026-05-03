import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, Home as HomeIcon, MonitorPlay, CheckCircle2, Star, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Home() {
  const { t, language } = useLanguage();

  const pillars = [
    { id: "english", icon: BookOpen, color: "bg-blue-100 text-blue-700" },
    { id: "career", icon: Briefcase, color: "bg-emerald-100 text-emerald-700" },
    { id: "life", icon: HomeIcon, color: "bg-orange-100 text-orange-700" },
    { id: "business", icon: MonitorPlay, color: "bg-purple-100 text-purple-700" },
  ];

  const pricingPlans = ["starter", "premium", "careerBoost", "canadaReady"];
  const prices = ["$79", "$129", "$179", "$249"];

  const whatWeHelpItems = t("whatWeHelp.items") as unknown as string[];
  const weeklyDays = t("weeklySchedule.days") as unknown as { day: string; name: string; desc: string }[];

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Canada Ready Academy
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button size="lg" className="text-base md:text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25" data-testid="button-hero-assessment">
                  {t("hero.cta")}
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="text-base md:text-lg px-8 h-14 rounded-full" data-testid="button-hero-join">
                  {t("hero.secondaryCta")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              {t("whatWeHelp.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.isArray(whatWeHelpItems) && whatWeHelpItems.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-primary-foreground/80" />
                  <span className="font-semibold text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS — 4 Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("howItWorks.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("howItWorks.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => {
              const steps = t("howItWorks.steps") as unknown as { title: string; desc: string }[];
              const step = Array.isArray(steps) ? steps[i] : null;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-extrabold mb-4 shadow-md shadow-primary/30">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step?.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step?.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <Button variant="outline" className="rounded-full px-8" data-testid="link-how-it-works-full">
                {t("common.learnMore")} →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 CORE PILLARS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("pillars.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("pillars.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-border/50">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${pillar.color}`}>
                        <Icon size={22} />
                      </div>
                      <CardTitle className="text-xl">{t(`pillars.${pillar.id}.title`)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t(`pillars.${pillar.id}.desc`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEEKLY SCHEDULE */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t("weeklySchedule.title")}</h2>
            <p className="text-muted-foreground">{t("weeklySchedule.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.isArray(weeklyDays) && weeklyDays.map((day, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="text-center border-primary/20 bg-card">
                  <CardContent className="pt-6 pb-6">
                    <div className="bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider rounded-full px-4 py-1 inline-block mb-4">
                      {day.day}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{day.name}</h3>
                    <p className="text-muted-foreground text-sm">{day.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS & PRICING PREVIEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("pricing.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("pricing.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => {
              const isPopular = index === 1;
              const features = t(`pricing.${plan}.features`) as unknown as string[];
              return (
                <motion.div
                  key={plan}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex flex-col rounded-2xl border p-6 ${isPopular ? "border-primary shadow-lg ring-2 ring-primary/20 bg-primary/3" : "border-border bg-card"}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      {t("common.popular")}
                    </div>
                  )}
                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-xl font-bold mb-1">{t(`pricing.${plan}.name`)}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{t(`pricing.${plan}.bestFor`)}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold">{prices[index]}</span>
                      <span className="text-muted-foreground text-sm">{t("common.monthly")}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {Array.isArray(features) && features.slice(0, 6).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feat}</span>
                      </li>
                    ))}
                    {Array.isArray(features) && features.length > 6 && (
                      <li className="text-xs text-primary font-medium ps-6">+ {features.length - 6} more included</li>
                    )}
                  </ul>
                  <Link href="/assessment">
                    <Button
                      className="w-full rounded-full"
                      variant={isPopular ? "default" : "outline"}
                      data-testid={`button-plan-${plan}`}
                    >
                      {t("common.bookAssessment")}
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/programs">
              <Button variant="ghost" className="text-primary font-semibold" data-testid="link-see-all-programs">
                {t("common.seeAll")} →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("testimonials.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("testimonials.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => {
              const stories = t("testimonials.stories") as unknown as { name: string; origin: string; text: string }[];
              const story = Array.isArray(stories) ? stories[i] : null;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[0,1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>
                      <p className="text-foreground/85 italic mb-6 leading-relaxed">"{story?.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center text-sm">
                          {story?.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{story?.name}</p>
                          <p className="text-xs text-muted-foreground">{story?.origin}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline" className="rounded-full px-8" data-testid="link-all-testimonials">
                {t("common.learnMore")} →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-16 bg-[#075E54] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                <Phone size={32} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("contact.whatsappSection.title")}</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              {t("contact.whatsappSection.desc")}
            </p>
            <a
              href="https://wa.me/15870000000"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-cta"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              <Phone size={22} />
              {t("contact.whatsappSection.cta")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Start Your Journey in Canada Today" : "ابدأ رحلتك في كندا اليوم"}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {language === "en"
                ? "Book your free assessment and take the first step toward confidence, career, and a better life in Canada."
                : "احجز تقييمك المجاني واتخذ أول خطوة نحو الثقة والمهنة وحياة أفضل في كندا."}
            </p>
            <Link href="/assessment">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-10 h-14 text-lg font-bold"
                data-testid="button-final-cta"
              >
                {t("hero.cta")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
