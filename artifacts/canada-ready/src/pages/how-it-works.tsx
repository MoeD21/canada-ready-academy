import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('howItWorks.title')}</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/20 ml-6 md:ml-0 md:border-l-0 md:space-y-12 space-y-8">
          {/* Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

          {[0, 1, 2, 3, 4].map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                
                {/* Desktop Left Side */}
                <div className={`hidden md:block w-1/2 pr-12 text-right ${!isEven ? 'opacity-0' : ''}`}>
                  {isEven && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{t(`howItWorks.steps.${step}.title`)}</h3>
                      <p className="text-muted-foreground">{t(`howItWorks.steps.${step}.desc`)}</p>
                    </>
                  )}
                </div>

                {/* Center Circle */}
                <div className="absolute -left-3 md:relative md:left-auto md:mx-auto w-6 h-6 rounded-full bg-primary border-4 border-background flex-shrink-0 z-10 group-hover:scale-125 transition-transform"></div>

                {/* Desktop Right Side */}
                <div className={`hidden md:block w-1/2 pl-12 text-left ${isEven ? 'opacity-0' : ''}`}>
                  {!isEven && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{t(`howItWorks.steps.${step}.title`)}</h3>
                      <p className="text-muted-foreground">{t(`howItWorks.steps.${step}.desc`)}</p>
                    </>
                  )}
                </div>

                {/* Mobile Content */}
                <div className="md:hidden pl-8 w-full">
                  <h3 className="text-xl font-bold mb-2">{t(`howItWorks.steps.${step}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`howItWorks.steps.${step}.desc`)}</p>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/assessment">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg" data-testid="button-start-now">
              {t('common.bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
