import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/Logotipo_oficial.png';

const navItems = [
  { key: 'nav.home', href: '/' },
  { 
    key: 'nav.about', 
    href: '/sobre',
    submenu: [
      { key: 'nav.about.organization', href: '/sobre/cibercidadaos' },
      { key: 'nav.about.governance', href: '/sobre/governanca' },
    ]
  },
  { key: 'nav.activities', href: '/actividades' },
  { key: 'nav.press', href: '/imprensa' },
  { key: 'nav.data', href: '/dados' },
  { key: 'nav.publications', href: '/publicacoes' },
  { key: 'nav.contact', href: '/contacto' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <img
              src={logo}
              alt="CIBERCIDADÃOS"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.key)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={cn(
                        'px-4 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1',
                        isActive(item.href) && 'text-secondary'
                      )}
                    >
                      {t(item.key)}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        activeSubmenu === item.key && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeSubmenu === item.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-border/50 py-2 min-w-[200px] z-50"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.key}
                              to={subItem.href}
                              className={cn(
                                'block px-4 py-2 text-sm text-primary hover:text-secondary hover:bg-secondary/5 transition-colors',
                                location.pathname === subItem.href && 'text-secondary bg-secondary/5'
                              )}
                            >
                              {t(subItem.key)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors link-underline',
                      isActive(item.href) && 'text-secondary'
                    )}
                  >
                    {t(item.key)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* CTA Button - Desktop */}
            <Button
              asChild
              className="hidden lg:inline-flex btn-gradient text-sm px-5 py-2 h-auto rounded-full"
            >
              <Link to="/membro">{t('nav.become_member')}</Link>
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary hover:text-secondary hover:bg-secondary/5 gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary hover:bg-secondary/5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="container-custom py-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.key ? null : item.key)}
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-primary hover:text-secondary hover:bg-secondary/5 rounded-lg transition-colors',
                          isActive(item.href) && 'text-secondary bg-secondary/5'
                        )}
                      >
                        {t(item.key)}
                        <ChevronDown className={cn(
                          "h-5 w-5 transition-transform",
                          activeSubmenu === item.key && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === item.key && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.key}
                                to={subItem.href}
                                className={cn(
                                  'block px-4 py-2 text-base text-muted-foreground hover:text-secondary transition-colors',
                                  location.pathname === subItem.href && 'text-secondary'
                                )}
                              >
                                {t(subItem.key)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        'block px-4 py-3 text-lg font-medium text-primary hover:text-secondary hover:bg-secondary/5 rounded-lg transition-colors',
                        isActive(item.href) && 'text-secondary bg-secondary/5'
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  )}
                </motion.div>
              ))}
              {/* CTA Button - Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4 mt-2 border-t border-border"
              >
                <Button asChild className="w-full btn-gradient text-base py-3 h-auto rounded-full">
                  <Link to="/membro">{t('nav.become_member')}</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
