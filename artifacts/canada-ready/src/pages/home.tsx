import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Briefcase, Home as HomeIcon, MonitorPlay, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t, language } = useLanguage();

  const isRtl = language === 'ar';

  const pillars = [
    { id: 'english', icon: BookOpen, color: 'text-blue-500' },
    { id: 'career', icon: Briefcase, color: 'text-green-500' },
    { id: 'life', icon: HomeIcon, color: 'text-orange-500' },
    { id: 'business', icon: MonitorPlay, color: 'text-purple-500' }
  ];

  const pricingPlans = ['starter', 'premium', 'careerBoost', 'canadaReady'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-md" data-testid="button-assessment">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full bg-background/50 backdrop-blur-sm" data-testid="button-programs">
                  {t('hero.secondaryCta')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pillars.title')}</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.id} variants={itemVariants}>
                  <Card className="h-full border-muted/50 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${pillar.color}`}>
                        <Icon size={24} />
                      </div>
                      <CardTitle>{t(`pillars.${pillar.id}.title`)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{t(`pillars.${pillar.id}.desc`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How it works simple */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howItWorks.title')}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[0, 1, 2].map((step) => (
                <div key={step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-sm">
                    {step + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t(`howItWorks.steps.${step}.title`)}</h3>
                    <p className="text-muted-foreground text-lg">{t(`howItWorks.steps.${step}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/how-it-works">
                <Button variant="link" className="text-primary text-lg" data-testid="link-how-it-works">
                  {t('common.learnMore')} →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const isPopular = index === 1;
              const features = t(`pricing.${plan}.features`) as unknown as string[];
              
              return (
                <Card key={plan} className={`relative flex flex-col ${isPopular ? 'border-primary shadow-md scale-105 z-10' : 'border-muted'}`}>
                  {isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {t('common.popular')}
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{t(`pricing.${plan}.name`)}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{t(`pricing.${plan}.price`)}</span>
                      <span className="text-muted-foreground">{t('common.monthly')}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-4 mb-8 flex-1">
                      {Array.isArray(features) && features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/programs">
                      <Button className="w-full" variant={isPopular ? "default" : "outline"} data-testid={`button-plan-${plan}`}>
                        {t('common.learnMore')}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
