import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  compact?: boolean;
}

export function PageHero({ title, subtitle, image, breadcrumbs, compact = false }: PageHeroProps) {
  return (
    <section 
      className={`relative ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28'} bg-primary overflow-hidden`}
      style={image ? {
        backgroundImage: `linear-gradient(to right, rgba(0, 26, 61, 0.9), rgba(0, 26, 61, 0.7)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 pt-16">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
            aria-label="Breadcrumb"
          >
            <Link 
              to="/" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="h-4 w-4" />
            </Link>
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {item.href ? (
                  <Link 
                    to={item.href} 
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
