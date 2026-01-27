import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Users, Wifi, Smartphone, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { provinces, nationalStats } from '@/data/mockData';
import type { Province } from '@/data/mockData';

// SVG paths for Mozambique provinces (simplified representations)
const provincePaths: Record<string, string> = {
  'niassa': 'M120,20 L180,25 L190,80 L160,100 L110,90 L100,50 Z',
  'cabo-delgado': 'M180,25 L250,30 L255,90 L190,80 Z',
  'nampula': 'M160,100 L190,80 L255,90 L250,150 L180,160 L140,140 Z',
  'zambezia': 'M110,140 L140,140 L180,160 L175,210 L130,220 L90,180 Z',
  'tete': 'M60,100 L110,90 L140,140 L110,140 L90,180 L40,170 Z',
  'manica': 'M40,170 L90,180 L95,230 L50,240 Z',
  'sofala': 'M90,180 L130,220 L120,270 L80,280 L50,240 L95,230 Z',
  'inhambane': 'M80,280 L120,270 L130,330 L90,350 L70,320 Z',
  'gaza': 'M70,320 L90,350 L85,420 L60,430 L50,380 Z',
  'maputo-provincia': 'M50,380 L60,430 L85,420 L90,460 L55,470 L40,440 Z',
  'maputo-cidade': 'M55,470 L90,460 L95,490 L60,500 Z',
};

export function MapSection() {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const { t } = useLanguage();

  const handleProvinceClick = (provinceId: string) => {
    const province = provinces.find(p => p.id === provinceId);
    setSelectedProvince(province || null);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t('map.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('map.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* National Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-1"
          >
            <div className="card-elevated p-6">
              <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                Moçambique
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">População</span>
                  </div>
                  <span className="font-semibold">
                    {(nationalStats.population / 1000000).toFixed(1)}M
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Utilizadores Internet</span>
                  </div>
                  <span className="font-semibold">
                    {(nationalStats.internetUsers / 1000000).toFixed(1)}M
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Penetração Mobile</span>
                  </div>
                  <span className="font-semibold">{nationalStats.mobilePenetration}%</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Literacia Digital</span>
                  </div>
                  <span className="font-semibold">{nationalStats.averageDigitalLiteracy}%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:order-2 flex justify-center"
          >
            <div className="relative">
              <svg
                viewBox="0 0 300 520"
                className="w-full max-w-[300px] h-auto"
                role="img"
                aria-label="Mapa de Moçambique"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {Object.entries(provincePaths).map(([id, path]) => (
                  <path
                    key={id}
                    d={path}
                    className={`province-path ${selectedProvince?.id === id ? 'active' : ''}`}
                    onClick={() => handleProvinceClick(id)}
                    role="button"
                    aria-label={provinces.find(p => p.id === id)?.name}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleProvinceClick(id)}
                  />
                ))}
              </svg>

              {/* Province Labels (for accessibility) */}
              <div className="sr-only">
                {provinces.map(province => (
                  <button
                    key={province.id}
                    onClick={() => handleProvinceClick(province.id)}
                  >
                    {province.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Province Detail Panel */}
          <div className="lg:order-3">
            <AnimatePresence mode="wait">
              {selectedProvince ? (
                <motion.div
                  key={selectedProvince.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                  className="card-elevated p-6"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-serif text-xl font-semibold">
                        {selectedProvince.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Capital: {selectedProvince.capital}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProvince(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">População</span>
                      <span className="font-semibold">
                        {(selectedProvince.population / 1000000).toFixed(2)}M
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Penetração Internet</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-accent rounded-full"
                            style={{ width: `${selectedProvince.internetPenetration}%` }}
                          />
                        </div>
                        <span className="font-semibold text-sm">
                          {selectedProvince.internetPenetration}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Utilizadores Mobile</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-accent rounded-full"
                            style={{ width: `${selectedProvince.mobileUsers}%` }}
                          />
                        </div>
                        <span className="font-semibold text-sm">
                          {selectedProvince.mobileUsers}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-muted-foreground">Literacia Digital</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-accent rounded-full"
                            style={{ width: `${selectedProvince.digitalLiteracy}%` }}
                          />
                        </div>
                        <span className="font-semibold text-sm">
                          {selectedProvince.digitalLiteracy}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full btn-gradient">
                    <Link to={`/provincias/${selectedProvince.id}`}>
                      {t('map.view_details')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="card-elevated p-8 text-center"
                >
                  <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {t('map.select_province')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
