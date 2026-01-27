import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  BookOpen, 
  Image, 
  Video, 
  Users, 
  Handshake, 
  UserCircle, 
  CreditCard, 
  BarChart3, 
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useRole } from '@/hooks/useRole';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import logo from '@/assets/Logotipo_oficial.png';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  roles?: string[];
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: 'Geral',
    items: [
      { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Conteúdo',
    items: [
      { title: 'Actividades', href: '/admin/activities', icon: FileText },
      { title: 'Eventos', href: '/admin/events', icon: Calendar },
      { title: 'Publicações', href: '/admin/publications', icon: BookOpen },
      { title: 'Galeria', href: '/admin/gallery', icon: Image },
      { title: 'Vídeos', href: '/admin/videos', icon: Video },
    ],
  },
  {
    title: 'Organização',
    items: [
      { title: 'Equipa', href: '/admin/team', icon: Users },
      { title: 'Parceiros', href: '/admin/partners', icon: Handshake },
    ],
  },
  {
    title: 'Membros',
    items: [
      { title: 'Gestão de Membros', href: '/admin/members', icon: UserCircle, roles: ['admin', 'moderator'] },
      { title: 'Pagamentos', href: '/admin/payments', icon: CreditCard, roles: ['admin', 'moderator'] },
    ],
  },
  {
    title: 'Sistema',
    items: [
      { title: 'Dados e Estatísticas', href: '/admin/data', icon: BarChart3 },
      { title: 'Configurações', href: '/admin/settings', icon: Settings, roles: ['admin'] },
    ],
  },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { isAdmin, isEditor, isModerator, hasRole } = useRole();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth/login');
  };

  const canAccessItem = (item: NavItem) => {
    if (!item.roles) return true;
    return item.roles.some(role => hasRole(role as any));
  };

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <Link to="/admin" className="flex items-center gap-2">
              <img src={logo} alt="CIBERCIDADÃOS" className="h-10 w-auto" />
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="px-3 space-y-6">
              {navigation.map((group) => {
                const visibleItems = group.items.filter(canAccessItem);
                if (visibleItems.length === 0) return null;

                return (
                  <div key={group.title}>
                    <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {group.title}
                    </h3>
                    <div className="space-y-1">
                      {visibleItems.map((item) => {
                        const isActive = location.pathname === item.href || 
                          (item.href !== '/admin' && location.pathname.startsWith(item.href));
                        
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                              isActive 
                                ? "bg-primary text-primary-foreground" 
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </nav>
          </ScrollArea>

          {/* User section */}
          <div className="p-4 border-t border-border">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Voltar ao Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-card border-b border-border">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex-1" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {getInitials(user?.user_metadata?.full_name || user?.email)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm font-medium">
                  {user?.user_metadata?.full_name || user?.email}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Terminar Sessão
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
