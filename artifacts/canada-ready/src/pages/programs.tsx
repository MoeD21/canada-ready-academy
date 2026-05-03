import { useLanguage } from "@/lib/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Programs() {
  const { t } = useLanguage();

  const pricingPlans = ['starter', 'premium', 'careerBoost', 'canadaReady'];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('pricing.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find the right level of support for your journey in Canada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => {
          const isPopular = index === 1;
          const features = t(`pricing.${plan}.features`) as unknown as string[];
          
          return (
            <Card key={plan} className={`relative flex flex-col h-full ${isPopular ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-muted/50'}`}>
              {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {t('common.popular')}
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{t(`pricing.${plan}.name`)}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{t(`pricing.${plan}.price`)}</span>
                  <span className="text-muted-foreground font-medium">{t('common.monthly')}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {Array.isArray(features) && features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href="/assessment">
                    <Button className="w-full h-12 rounded-lg text-md font-semibold" variant={isPopular ? "default" : "outline"} data-testid={`button-enroll-${plan}`}>
                      {t('common.bookNow')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
