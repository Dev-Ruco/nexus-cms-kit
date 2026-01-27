import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Users, Wifi, Smartphone, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { provinces, nationalStats } from '@/data/mockData';
import type { Province } from '@/data/mockData';

// Geographically accurate SVG paths for Mozambique provinces
// Based on SimpleMaps and refined for web use
const provincePaths: Record<string, { d: string; labelX: number; labelY: number }> = {
  'niassa': {
    d: 'M280,20 Q320,25 340,45 L360,80 Q370,100 365,120 L340,150 Q320,160 290,155 L250,140 Q220,125 210,100 L215,60 Q225,35 250,25 Z',
    labelX: 285,
    labelY: 90
  },
  'cabo-delgado': {
    d: 'M340,45 Q380,40 420,50 L450,80 Q460,100 455,130 L430,160 Q400,175 365,165 L340,150 Q355,130 360,80 Z',
    labelX: 395,
    labelY: 100
  },
  'nampula': {
    d: 'M290,155 Q320,160 340,150 L365,165 Q400,175 410,200 L400,240 Q380,260 340,255 L290,240 Q260,225 255,190 L265,165 Z',
    labelX: 335,
    labelY: 200
  },
  'zambezia': {
    d: 'M220,220 Q255,215 290,240 L340,255 Q360,265 355,300 L320,340 Q290,355 250,345 L210,320 Q190,290 195,260 L210,235 Z',
    labelX: 275,
    labelY: 290
  },
  'tete': {
    d: 'M120,150 Q160,140 200,145 L240,155 Q265,165 265,190 L255,215 Q240,230 210,235 L160,220 Q130,200 125,175 Z',
    labelX: 185,
    labelY: 185
  },
  'manica': {
    d: 'M125,280 Q150,270 180,275 L210,290 Q230,305 225,335 L205,365 Q180,380 150,370 L130,345 Q115,315 120,295 Z',
    labelX: 170,
    labelY: 320
  },
  'sofala': {
    d: 'M195,320 Q225,315 250,330 L280,355 Q310,375 320,410 L310,450 Q290,475 250,470 L210,445 Q185,415 180,380 L185,345 Z',
    labelX: 250,
    labelY: 400
  },
  'inhambane': {
    d: 'M250,470 Q280,475 300,495 L320,530 Q330,560 325,590 L300,620 Q275,640 245,635 L220,605 Q200,575 205,540 L220,500 Z',
    labelX: 265,
    labelY: 550
  },
  'gaza': {
    d: 'M200,540 Q220,530 245,540 L265,565 Q285,590 280,625 L260,665 Q240,695 210,700 L180,680 Q155,650 155,615 L165,575 Z',
    labelX: 215,
    labelY: 620
  },
  'maputo-provincia': {
    d: 'M175,700 Q195,695 215,705 L240,725 Q260,750 255,780 L235,810 Q215,830 190,825 L165,800 Q145,775 150,745 L160,720 Z',
    labelX: 200,
    labelY: 760
  },
  'maputo-cidade': {
    d: 'M225,825 Q245,820 260,835 L275,855 Q285,875 280,895 L260,910 Q240,920 220,915 L205,895 Q195,875 200,855 L210,840 Z',
    labelX: 240,
    labelY: 870
  },
};

export function MapSection() {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const { t } = useLanguage();

  const handleProvinceClick = (provinceId: string) => {
    const province = provinces.find(p => p.id === provinceId);
    setSelectedProvince(province || null);
  };

  return (
    <section className="section-padding bg-white">
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
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-secondary" />
                Moçambique
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">População</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {(nationalStats.population / 1000000).toFixed(1)}M
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Utilizadores Internet</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {(nationalStats.internetUsers / 1000000).toFixed(1)}M
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Penetração Mobile</span>
                  </div>
                  <span className="font-semibold text-foreground">{nationalStats.mobilePenetration}%</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Literacia Digital</span>
                  </div>
                  <span className="font-semibold text-foreground">{nationalStats.averageDigitalLiteracy}%</span>
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
                viewBox="0 0 500 950"
                className="w-full max-w-[320px] h-auto"
                role="img"
                aria-label="Mapa de Moçambique"
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="provinceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(180, 100%, 32%)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(168, 100%, 41%)" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="provinceGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(180, 100%, 32%)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="hsl(168, 100%, 41%)" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="provinceGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(180, 100%, 32%)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(168, 100%, 41%)" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                
                {Object.entries(provincePaths).map(([id, { d }]) => (
                  <path
                    key={id}
                    d={d}
                    fill={selectedProvince?.id === id ? 'url(#provinceGradientActive)' : 'url(#provinceGradient)'}
                    stroke="hsl(180, 100%, 32%)"
                    strokeWidth={selectedProvince?.id === id ? 2 : 1}
                    className="cursor-pointer transition-all duration-300 hover:fill-[url(#provinceGradientHover)]"
                    style={{
                      filter: selectedProvince?.id === id ? 'drop-shadow(0 0 8px hsla(180, 100%, 32%, 0.5))' : 'none'
                    }}
                    onClick={() => handleProvinceClick(id)}
                    role="button"
                    aria-label={provinces.find(p => p.id === id)?.name}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleProvinceClick(id)}
                  />
                ))}

                {/* Province Labels */}
                {Object.entries(provincePaths).map(([id, { labelX, labelY }]) => {
                  const province = provinces.find(p => p.id === id);
                  return (
                    <text
                      key={`label-${id}`}
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      className="pointer-events-none select-none text-[10px] font-medium"
                      fill="hsl(213, 100%, 12%)"
                      opacity={0.7}
                    >
                      {province?.name.split(' ')[0]}
                    </text>
                  );
                })}
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
                  className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
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
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">População</span>
                      <span className="font-semibold text-foreground">
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
                        <span className="font-semibold text-sm text-foreground">
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
                        <span className="font-semibold text-sm text-foreground">
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
                        <span className="font-semibold text-sm text-foreground">
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
                  className="bg-card rounded-xl p-8 text-center border border-border/50 shadow-sm"
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
