import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Calendar, FileText, CreditCard, Bell } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import type { Database } from '@/integrations/supabase/types';

type MemberStatus = Database['public']['Enums']['member_status'];

interface MemberData {
  id: string;
  full_name: string;
  email: string;
  membership_number: string | null;
  status: MemberStatus;
  created_at: string;
}

export default function MemberPortal() {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [member, setMember] = useState<MemberData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemberData = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('members')
        .select('id, full_name, email, membership_number, status, created_at')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching member data:', error);
      } else {
        setMember(data);
      }
      setLoading(false);
    };

    fetchMemberData();
  }, [user]);

  const getStatusBadge = (status: MemberStatus) => {
    const statusConfig = {
      pending: { label: language === 'pt' ? 'Pendente' : 'Pending', variant: 'secondary' as const, icon: Clock },
      approved: { label: language === 'pt' ? 'Aprovado' : 'Approved', variant: 'default' as const, icon: CheckCircle },
      rejected: { label: language === 'pt' ? 'Rejeitado' : 'Rejected', variant: 'destructive' as const, icon: Clock },
      suspended: { label: language === 'pt' ? 'Suspenso' : 'Suspended', variant: 'outline' as const, icon: Clock },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container-custom max-w-4xl">
            <Skeleton className="h-8 w-64 mb-8" />
            <div className="grid gap-6">
              <Skeleton className="h-48" />
              <Skeleton className="h-32" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-8">
            {t('nav.member_portal')}
          </h1>

          {member?.status === 'pending' ? (
            // Pending status view
            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">
                  {language === 'pt' 
                    ? 'A Sua Candidatura Está em Análise' 
                    : 'Your Application is Under Review'}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === 'pt'
                    ? 'Obrigado por se juntar à CIBERCIDADÃOS! A sua candidatura está a ser analisada pela nossa equipa.'
                    : 'Thank you for joining CIBERCIDADÃOS! Your application is being reviewed by our team.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'pt' ? 'Enquanto aguarda, pode:' : 'While you wait, you can:'}
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/actividades" 
                        className="text-secondary hover:underline flex items-center gap-2"
                      >
                        <Calendar className="h-4 w-4" />
                        {language === 'pt' ? 'Ver próximos eventos' : 'View upcoming events'}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/publicacoes" 
                        className="text-secondary hover:underline flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        {language === 'pt' ? 'Ler as nossas publicações' : 'Read our publications'}
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {language === 'pt'
                    ? 'Será notificado por email quando a sua candidatura for aprovada.'
                    : 'You will be notified by email when your application is approved.'}
                </p>
              </CardContent>
            </Card>
          ) : member?.status === 'approved' ? (
            // Approved member view
            <div className="space-y-6">
              {/* Member Info Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{language === 'pt' ? 'Estado da Conta' : 'Account Status'}</CardTitle>
                    {getStatusBadge(member.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'pt' ? 'Número de Membro' : 'Member Number'}
                      </p>
                      <p className="font-mono font-semibold text-lg">
                        {member.membership_number || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'pt' ? 'Membro desde' : 'Member since'}
                      </p>
                      <p className="font-semibold">
                        {new Date(member.created_at).toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-US')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {language === 'pt' ? 'Pagar Quota' : 'Pay Membership'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'pt' ? 'Gerir pagamentos' : 'Manage payments'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Bell className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {language === 'pt' ? 'Notificações' : 'Notifications'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'pt' ? 'Ver eventos e novidades' : 'View events and news'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            // Other statuses (rejected, suspended)
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader className="text-center">
                <CardTitle>
                  {language === 'pt' ? 'Conta Inactiva' : 'Inactive Account'}
                </CardTitle>
                <CardDescription>
                  {language === 'pt'
                    ? 'A sua conta não está activa. Por favor, contacte-nos para mais informações.'
                    : 'Your account is not active. Please contact us for more information.'}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline">
                  <Link to="/contacto">
                    {language === 'pt' ? 'Contactar Suporte' : 'Contact Support'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

