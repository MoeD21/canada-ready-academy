import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Briefcase, Home as HomeIcon, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export default function About() {
  const { t, language } = useLanguage();

  const whoWeHelpItems = t("about.whoWeHelp.items") as unknown as string[];
  const sellingItems = t("about.selling.items") as unknown as string[];

  const whatWeTeachItems = [
    { key: "english", icon: BookOpen, color: "bg-blue-100 text-blue-700" },
    { key: "careers", icon: Briefcase, color: "bg-emerald-100 text-emerald-700" },
    { key: "canadaLife", icon: HomeIcon, color: "bg-orange-100 text-orange-700" },
    { key: "business", icon: MonitorPlay, color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("about.title")}</h1>
          <p className="text-2xl text-muted-foreground font-medium mb-2">{t("about.subtitle")}</p>
          <p className="text-primary font-semibold text-lg">{t("about.tagline")}</p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("about.whoWeHelp.title")}</h2>
              <ul className="space-y-4">
                {Array.isArray(whoWeHelpItems) && whoWeHelpItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("about.mission")}</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">{t("about.missionText")}</p>
              <div className="bg-primary/8 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-primary mb-3">{t("about.difference")}</h3>
                <p className="text-foreground/80 leading-relaxed">{t("about.differenceText")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Teach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{t("about.whatWeTeach.title")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatWeTeachItems.map(({ key, icon: Icon, color }, i) => (
              <motion.div
                key={key}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{t(`about.whatWeTeach.${key}.title`)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(`about.whatWeTeach.${key}.desc`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are Really Selling */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/15">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("about.selling.title")}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t("about.selling.desc")}</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.isArray(sellingItems) && sellingItems.map((item, i) => (
                  <div key={i} className="bg-background/70 rounded-xl p-4 flex items-start gap-3 border border-border/40">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/85 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" ? "Join Canada Ready Academy Today" : "انضم إلى أكاديمية كندا ريدي اليوم"}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {language === "en"
              ? "Start with a free assessment. No commitment, no payment required to begin."
              : "ابدأ بتقييم مجاني. لا التزام، ولا دفع مطلوب للبداية."}
          </p>
          <Link href="/assessment">
            <Button variant="secondary" size="lg" className="rounded-full px-10 h-14 text-lg font-bold" data-testid="button-about-cta">
              {t("common.bookAssessment")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
