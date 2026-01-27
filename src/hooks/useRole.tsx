import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import type { Database } from '@/integrations/supabase/types';

type AppRole = Database['public']['Enums']['app_role'];

interface UseRoleReturn {
  roles: AppRole[];
  loading: boolean;
  hasRole: (role: AppRole) => boolean;
  isAdmin: boolean;
  isEditor: boolean;
  isModerator: boolean;
  isMember: boolean;
  isAdminOrEditor: boolean;
}

export function useRole(): UseRoleReturn {
  const { user } = useAuth();
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setRoles([]);
      setLoading(false);
      return;
    }

    const fetchRoles = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching roles:', error);
        setRoles([]);
      } else {
        setRoles(data?.map(r => r.role) || []);
      }
      setLoading(false);
    };

    fetchRoles();
  }, [user]);

  const hasRole = (role: AppRole) => roles.includes(role);

  return {
    roles,
    loading,
    hasRole,
    isAdmin: hasRole('admin'),
    isEditor: hasRole('editor'),
    isModerator: hasRole('moderator'),
    isMember: hasRole('member'),
    isAdminOrEditor: hasRole('admin') || hasRole('editor'),
  };
}
