import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRole } from '@/hooks/useRole';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AuthButtonProps {
  variant?: 'desktop' | 'mobile';
  onItemClick?: () => void;
}

export function AuthButton({ variant = 'desktop', onItemClick }: AuthButtonProps) {
  const { user, signOut, loading: authLoading } = useAuth();
  const { isAdmin, isEditor, isModerator, loading: roleLoading } = useRole();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const loading = authLoading || roleLoading;

  const handleSignOut = async () => {
    await signOut();
    onItemClick?.();
    navigate('/');
  };

  const dashboardPath = (isAdmin || isEditor || isModerator) 
    ? '/admin' 
    : '/member/portal';

  // Loading state
  if (loading) {
    return variant === 'desktop' ? (
      <Skeleton className="h-10 w-32 rounded-full" />
    ) : null;
  }

  // Not authenticated - show "Tornar-se Membro" button
  if (!user) {
    if (variant === 'mobile') {
      return (
        <Button 
          asChild 
          className="w-full btn-gradient text-base py-3 h-auto rounded-full"
          onClick={onItemClick}
        >
          <Link to="/membro">{t('nav.become_member')}</Link>
        </Button>
      );
    }

    return (
      <Button
        asChild
        className="btn-gradient text-sm px-5 py-2 h-auto rounded-full"
      >
        <Link to="/membro">{t('nav.become_member')}</Link>
      </Button>
    );
  }

  // Authenticated - show dropdown with user info
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Utilizador';

  if (variant === 'mobile') {
    return (
      <div className="space-y-2">
        <Link
          to={dashboardPath}
          onClick={onItemClick}
          className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-primary hover:text-secondary hover:bg-secondary/5 rounded-lg transition-colors"
        >
          <LayoutDashboard className="h-5 w-5" />
          {t('nav.my_area')}
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 w-full px-4 py-3 text-lg font-medium text-destructive hover:bg-destructive/5 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5" />
          {t('auth.logout')}
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-2 text-primary hover:text-secondary hover:bg-secondary/5 px-3"
        >
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-secondary" />
          </div>
          <span className="hidden xl:inline max-w-[120px] truncate font-medium">
            {displayName}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white">
        <div className="px-3 py-2 border-b">
          <p className="text-sm font-medium truncate">{displayName}</p>
          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
        </div>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to={dashboardPath} className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            {t('nav.my_area')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleSignOut}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="h-4 w-4 mr-2" />
          {t('auth.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
