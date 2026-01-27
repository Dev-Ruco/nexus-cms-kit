import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/Logotipo_oficial.png';

const quickLinks = [
  { key: 'nav.about', href: '/sobre' },
  { key: 'nav.activities', href: '/actividades' },
  { key: 'nav.data', href: '/dados' },
  { key: 'nav.publications', href: '/publicacoes' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="CIBERCIDADÃOS" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              {t('footer.contact_us')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">
                  Av. Julius Nyerere, 1234<br />
                  Maputo, Moçambique
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+258841234567" className="text-white/70 hover:text-white transition-colors text-sm">
                  +258 84 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:info@cibercidadaos.org" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@cibercidadaos.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              {t('footer.newsletter')}
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Subscreva para receber actualizações sobre as nossas actividades.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-secondary hover:bg-secondary/90 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} CIBERCIDADÃOS. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacidade" className="text-white/60 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-white/60 hover:text-white text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
