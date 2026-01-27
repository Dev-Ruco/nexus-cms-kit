import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CreditCard, 
  Calendar, 
  FileText, 
  TrendingUp, 
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useRole } from '@/hooks/useRole';

interface Stats {
  totalMembers: number;
  pendingMembers: number;
  pendingPayments: number;
  upcomingEvents: number;
  totalActivities: number;
}

interface RecentMember {
  id: string;
  full_name: string;
  email: string;
  status: string;
  created_at: string;
}

interface UpcomingEvent {
  id: string;
  title_pt: string;
  date: string;
  event_type: string;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalMembers: 0,
    pendingMembers: 0,
    pendingPayments: 0,
    upcomingEvents: 0,
    totalActivities: 0,
  });
  const [recentMembers, setRecentMembers] = useState<RecentMember[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin, isModerator } = useRole();

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);

      try {
        // Fetch stats in parallel
        const [
          membersResult,
          pendingMembersResult,
          pendingPaymentsResult,
          eventsResult,
          activitiesResult,
          recentMembersResult,
          upcomingEventsResult,
        ] = await Promise.all([
          supabase.from('members').select('id', { count: 'exact', head: true }),
          supabase.from('members').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
          supabase.from('member_payments').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
          supabase.from('events').select('id', { count: 'exact', head: true }).gte('date', new Date().toISOString().split('T')[0]),
          supabase.from('activities').select('id', { count: 'exact', head: true }),
          supabase.from('members').select('id, full_name, email, status, created_at').order('created_at', { ascending: false }).limit(5),
          supabase.from('events').select('id, title_pt, date, event_type').gte('date', new Date().toISOString().split('T')[0]).order('date', { ascending: true }).limit(5),
        ]);

        setStats({
          totalMembers: membersResult.count || 0,
          pendingMembers: pendingMembersResult.count || 0,
          pendingPayments: pendingPaymentsResult.count || 0,
          upcomingEvents: eventsResult.count || 0,
          totalActivities: activitiesResult.count || 0,
        });

        setRecentMembers(recentMembersResult.data || []);
        setUpcomingEvents(upcomingEventsResult.data || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: 'Total de Membros',
      value: stats.totalMembers,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      href: '/admin/members',
    },
    {
      title: 'Membros Pendentes',
      value: stats.pendingMembers,
      icon: Clock,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      href: '/admin/members?status=pending',
      alert: stats.pendingMembers > 0,
    },
    {
      title: 'Pagamentos Pendentes',
      value: stats.pendingPayments,
      icon: CreditCard,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      href: '/admin/payments?status=pending',
      alert: stats.pendingPayments > 0,
    },
    {
      title: 'Próximos Eventos',
      value: stats.upcomingEvents,
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      href: '/admin/events',
    },
    {
      title: 'Actividades',
      value: stats.totalActivities,
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      href: '/admin/activities',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pendente</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Aprovado</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejeitado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case 'presencial':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Presencial</Badge>;
      case 'online':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Online</Badge>;
      case 'hibrido':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Híbrido</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao painel de administração</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {statCards.map((stat) => (
          <Link key={stat.title} to={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  {stat.alert && (
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Members */}
        {(isAdmin || isModerator) && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Membros Recentes</CardTitle>
                  <CardDescription>Últimos candidatos a membro</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/admin/members">
                    Ver todos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {recentMembers.length === 0 ? (
                <p className="text-muted-foreground text-sm">Nenhum membro registado</p>
              ) : (
                <div className="space-y-4">
                  {recentMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{member.full_name}</p>
                        <p className="text-sm text-muted-foreground truncate">{member.email}</p>
                      </div>
                      {getStatusBadge(member.status)}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Próximos Eventos</CardTitle>
                <CardDescription>Eventos agendados</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/events">
                  Ver todos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {upcomingEvents.length === 0 ? (
              <p className="text-muted-foreground text-sm">Nenhum evento agendado</p>
            ) : (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{event.title_pt}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('pt-PT', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    {getEventTypeBadge(event.event_type)}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acções Rápidas</CardTitle>
          <CardDescription>Tarefas comuns do painel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/admin/activities/new">
                <FileText className="mr-2 h-4 w-4" />
                Nova Actividade
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/admin/events/new">
                <Calendar className="mr-2 h-4 w-4" />
                Novo Evento
              </Link>
            </Button>
            {(isAdmin || isModerator) && stats.pendingMembers > 0 && (
              <Button asChild variant="secondary">
                <Link to="/admin/members?status=pending">
                  <Users className="mr-2 h-4 w-4" />
                  Aprovar Membros ({stats.pendingMembers})
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
