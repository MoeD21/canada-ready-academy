import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const stories = t("testimonials.stories") as unknown as { name: string; origin: string; text: string }[];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/8 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("testimonials.title")}</h1>
          <p className="text-muted-foreground text-xl">{t("testimonials.subtitle")}</p>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(stories) && stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow">
                  <CardContent className="p-7">
                    <div className="flex gap-1 mb-4">
                      {[0,1,2,3,4].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    <p className="text-foreground/85 italic mb-6 leading-relaxed text-base">
                      "{story.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                      <div className="w-12 h-12 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center text-base flex-shrink-0">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{story.name}</p>
                        <p className="text-sm text-muted-foreground">{story.origin}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: language === "en" ? "Students Helped" : "طالب تم مساعدتهم" },
              { number: "3", label: language === "en" ? "Live Classes/Week" : "حصص مباشرة/أسبوع" },
              { number: "4", label: language === "en" ? "Programs Available" : "برامج متاحة" },
              { number: "100%", label: language === "en" ? "Bilingual Support" : "دعم ثنائي اللغة" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6"
              >
                <p className="text-4xl font-extrabold text-primary mb-1">{stat.number}</p>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" ? "Your Success Story Starts Here" : "قصة نجاحك تبدأ هنا"}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {language === "en"
              ? "Join hundreds of newcomers who have already changed their lives with Canada Ready Academy."
              : "انضم إلى مئات الوافدين الذين غيّروا حياتهم بالفعل مع أكاديمية كندا ريدي."}
          </p>
          <Link href="/assessment">
            <Button variant="secondary" size="lg" className="rounded-full px-10 h-14 text-lg font-bold" data-testid="button-testimonials-cta">
              {t("common.bookAssessment")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
