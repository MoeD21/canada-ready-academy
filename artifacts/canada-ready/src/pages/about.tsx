import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('about.title')}</h1>
        <p className="text-2xl text-muted-foreground font-medium">{t('about.subtitle')}</p>
      </div>

      <div className="space-y-12">
        <section className="bg-card border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.mission')}</h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            {t('about.missionText')}
          </p>
        </section>

        <section className="bg-card border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.difference')}</h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            {t('about.differenceText')}
          </p>
        </section>
      </div>
    </div>
  );
}
