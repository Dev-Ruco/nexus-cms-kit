import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Smartphone, GraduationCap, Users, Download, TrendingUp } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { provinces, dataIndicators, nationalStats } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Smartphone,
  GraduationCap,
  Users
};

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))'];

const Data = () => {
  const { language, t } = useLanguage();
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const chartData = provinces.map(p => ({
    name: p.code,
    fullName: p.name,
    internet: p.internetPenetration,
    mobile: p.mobileUsers,
    literacy: p.digitalLiteracy
  }));

  const pieData = [
    { name: language === 'pt' ? 'Com Internet' : 'With Internet', value: nationalStats.internetPenetration },
    { name: language === 'pt' ? 'Sem Internet' : 'Without Internet', value: 100 - nationalStats.internetPenetration }
  ];

  const selectedProvinceData = selectedProvince 
    ? provinces.find(p => p.id === selectedProvince) 
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('data.page.title')}
          subtitle={t('data.page.subtitle')}
          breadcrumbs={[
            { label: t('nav.data') }
          ]}
        />

        {/* National Indicators */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center"
            >
              {t('data.national_indicators')}
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {dataIndicators.map((indicator, index) => {
                const Icon = iconMap[indicator.icon] || Wifi;
                return (
                  <motion.div
                    key={indicator.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                          {indicator.value}
                        </div>
                        <div className="text-sm font-medium text-foreground mb-1">
                          {language === 'pt' ? indicator.label_pt : indicator.label_en}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === 'pt' ? indicator.description_pt : indicator.description_en}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-4">
                      {language === 'pt' ? 'Penetração de Internet por Província' : 'Internet Penetration by Province'}
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis dataKey="name" type="category" width={40} />
                          <Tooltip 
                            formatter={(value: number) => [`${value}%`, '']}
                            labelFormatter={(label) => chartData.find(d => d.name === label)?.fullName || label}
                          />
                          <Bar dataKey="internet" fill="hsl(var(--secondary))" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pie Chart */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-4">
                      {language === 'pt' ? 'Acesso à Internet Nacional' : 'National Internet Access'}
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {pieData.map((_, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number) => [`${value}%`, '']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Province Data */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center"
            >
              {t('data.by_province')}
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Province List */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-2 max-h-[400px] overflow-y-auto">
                      {provinces.map((province) => (
                        <button
                          key={province.id}
                          onClick={() => setSelectedProvince(province.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            selectedProvince === province.id
                              ? 'bg-secondary text-white'
                              : 'hover:bg-muted'
                          }`}
                        >
                          <div className="font-medium">{province.name}</div>
                          <div className={`text-sm ${selectedProvince === province.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                            {province.capital}
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Province Details */}
              <div className="lg:col-span-2">
                {selectedProvinceData ? (
                  <motion.div
                    key={selectedProvinceData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-serif font-bold text-2xl text-foreground mb-6">
                          {selectedProvinceData.name}
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              {language === 'pt' ? 'Capital' : 'Capital'}
                            </div>
                            <div className="font-semibold">{selectedProvinceData.capital}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              {language === 'pt' ? 'População' : 'Population'}
                            </div>
                            <div className="font-semibold">
                              {selectedProvinceData.population.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium">
                                {language === 'pt' ? 'Penetração de Internet' : 'Internet Penetration'}
                              </span>
                              <span className="text-sm text-secondary font-semibold">
                                {selectedProvinceData.internetPenetration}%
                              </span>
                            </div>
                            <Progress value={selectedProvinceData.internetPenetration} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium">
                                {language === 'pt' ? 'Utilizadores Mobile' : 'Mobile Users'}
                              </span>
                              <span className="text-sm text-secondary font-semibold">
                                {selectedProvinceData.mobileUsers}%
                              </span>
                            </div>
                            <Progress value={selectedProvinceData.mobileUsers} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium">
                                {language === 'pt' ? 'Literacia Digital' : 'Digital Literacy'}
                              </span>
                              <span className="text-sm text-secondary font-semibold">
                                {selectedProvinceData.digitalLiteracy}%
                              </span>
                            </div>
                            <Progress value={selectedProvinceData.digitalLiteracy} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center text-muted-foreground">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                      <p>{t('map.select_province')}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button className="bg-secondary hover:bg-secondary/90 rounded-full">
                <Download className="h-4 w-4 mr-2" />
                {t('data.download_report')}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Data;
