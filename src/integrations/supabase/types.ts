export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          category: string
          content_en: string
          content_pt: string
          created_at: string | null
          created_by: string | null
          date: string
          featured: boolean | null
          id: string
          image_url: string | null
          is_published: boolean | null
          summary_en: string
          summary_pt: string
          title_en: string
          title_pt: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content_en: string
          content_pt: string
          created_at?: string | null
          created_by?: string | null
          date: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          summary_en: string
          summary_pt: string
          title_en: string
          title_pt: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content_en?: string
          content_pt?: string
          created_at?: string | null
          created_by?: string | null
          date?: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          summary_en?: string
          summary_pt?: string
          title_en?: string
          title_pt?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_read: boolean | null
          message: string
          name: string
          phone: string | null
          replied_at: string | null
          replied_by: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_read?: boolean | null
          message: string
          name: string
          phone?: string | null
          replied_at?: string | null
          replied_by?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_read?: boolean | null
          message?: string
          name?: string
          phone?: string | null
          replied_at?: string | null
          replied_by?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      data_indicators: {
        Row: {
          display_order: number | null
          icon: string | null
          id: string
          is_visible: boolean | null
          key: string
          label_en: string
          label_pt: string
          updated_at: string | null
          value: string
        }
        Insert: {
          display_order?: number | null
          icon?: string | null
          id?: string
          is_visible?: boolean | null
          key: string
          label_en: string
          label_pt: string
          updated_at?: string | null
          value: string
        }
        Update: {
          display_order?: number | null
          icon?: string | null
          id?: string
          is_visible?: boolean | null
          key?: string
          label_en?: string
          label_pt?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          description_en: string
          description_pt: string
          event_type: Database["public"]["Enums"]["event_type"]
          featured: boolean | null
          id: string
          image_url: string | null
          is_published: boolean | null
          location_en: string
          location_pt: string
          registration_url: string | null
          time: string
          title_en: string
          title_pt: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          description_en: string
          description_pt: string
          event_type: Database["public"]["Enums"]["event_type"]
          featured?: boolean | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          location_en: string
          location_pt: string
          registration_url?: string | null
          time: string
          title_en: string
          title_pt: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          description_en?: string
          description_pt?: string
          event_type?: Database["public"]["Enums"]["event_type"]
          featured?: boolean | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          location_en?: string
          location_pt?: string
          registration_url?: string | null
          time?: string
          title_en?: string
          title_pt?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          caption_en: string | null
          caption_pt: string | null
          created_at: string | null
          date: string | null
          display_order: number | null
          event_id: string | null
          id: string
          is_published: boolean | null
          url: string
        }
        Insert: {
          caption_en?: string | null
          caption_pt?: string | null
          created_at?: string | null
          date?: string | null
          display_order?: number | null
          event_id?: string | null
          id?: string
          is_published?: boolean | null
          url: string
        }
        Update: {
          caption_en?: string | null
          caption_pt?: string | null
          created_at?: string | null
          date?: string | null
          display_order?: number | null
          event_id?: string | null
          id?: string
          is_published?: boolean | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_images_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      member_payments: {
        Row: {
          amount: number
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string | null
          currency: string | null
          id: string
          member_id: string
          notes: string | null
          payment_method: Database["public"]["Enums"]["payment_method"] | null
          period_end: string
          period_start: string
          reference_number: string | null
          status: Database["public"]["Enums"]["payment_status"] | null
        }
        Insert: {
          amount: number
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          member_id: string
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          period_end: string
          period_start: string
          reference_number?: string | null
          status?: Database["public"]["Enums"]["payment_status"] | null
        }
        Update: {
          amount?: number
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          member_id?: string
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          period_end?: string
          period_start?: string
          reference_number?: string | null
          status?: Database["public"]["Enums"]["payment_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "member_payments_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          age: number | null
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          email: string
          full_name: string
          how_found: string | null
          id: string
          membership_number: string | null
          motivation: string | null
          phone: string | null
          province: string | null
          status: Database["public"]["Enums"]["member_status"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          age?: number | null
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          email: string
          full_name: string
          how_found?: string | null
          id?: string
          membership_number?: string | null
          motivation?: string | null
          phone?: string | null
          province?: string | null
          status?: Database["public"]["Enums"]["member_status"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          age?: number | null
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          how_found?: string | null
          id?: string
          membership_number?: string | null
          motivation?: string | null
          phone?: string | null
          province?: string | null
          status?: Database["public"]["Enums"]["member_status"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      page_headers: {
        Row: {
          background_image_url: string | null
          id: string
          page_key: string
          subtitle_en: string | null
          subtitle_pt: string | null
          title_en: string
          title_pt: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          background_image_url?: string | null
          id?: string
          page_key: string
          subtitle_en?: string | null
          subtitle_pt?: string | null
          title_en: string
          title_pt: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          background_image_url?: string | null
          id?: string
          page_key?: string
          subtitle_en?: string | null
          subtitle_pt?: string | null
          title_en?: string
          title_pt?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          category: string | null
          created_at: string | null
          display_order: number | null
          featured: boolean | null
          id: string
          is_active: boolean | null
          logo_url: string
          name: string
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          display_order?: number | null
          featured?: boolean | null
          id?: string
          is_active?: boolean | null
          logo_url: string
          name: string
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          display_order?: number | null
          featured?: boolean | null
          id?: string
          is_active?: boolean | null
          logo_url?: string
          name?: string
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      provinces: {
        Row: {
          code: string
          digital_literacy_rate: number | null
          id: string
          internet_users: number | null
          name_en: string
          name_pt: string
          population: number | null
          updated_at: string | null
        }
        Insert: {
          code: string
          digital_literacy_rate?: number | null
          id?: string
          internet_users?: number | null
          name_en: string
          name_pt: string
          population?: number | null
          updated_at?: string | null
        }
        Update: {
          code?: string
          digital_literacy_rate?: number | null
          id?: string
          internet_users?: number | null
          name_en?: string
          name_pt?: string
          population?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      publications: {
        Row: {
          created_at: string | null
          created_by: string | null
          description_en: string | null
          description_pt: string | null
          download_count: number | null
          id: string
          is_published: boolean | null
          pdf_url: string
          publication_type: Database["public"]["Enums"]["publication_type"]
          published_date: string | null
          thumbnail_url: string | null
          title_en: string
          title_pt: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description_en?: string | null
          description_pt?: string | null
          download_count?: number | null
          id?: string
          is_published?: boolean | null
          pdf_url: string
          publication_type: Database["public"]["Enums"]["publication_type"]
          published_date?: string | null
          thumbnail_url?: string | null
          title_en: string
          title_pt: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description_en?: string | null
          description_pt?: string | null
          download_count?: number | null
          id?: string
          is_published?: boolean | null
          pdf_url?: string
          publication_type?: Database["public"]["Enums"]["publication_type"]
          published_date?: string | null
          thumbnail_url?: string | null
          title_en?: string
          title_pt?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      site_content: {
        Row: {
          content_en: Json
          content_pt: Json
          display_order: number | null
          id: string
          is_visible: boolean | null
          section_key: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          content_en?: Json
          content_pt?: Json
          display_order?: number | null
          id?: string
          is_visible?: boolean | null
          section_key: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          content_en?: Json
          content_pt?: Json
          display_order?: number | null
          id?: string
          is_visible?: boolean | null
          section_key?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio_en: string | null
          bio_pt: string | null
          created_at: string | null
          display_order: number | null
          email: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          linkedin_url: string | null
          name: string
          role_en: string
          role_pt: string
          twitter_url: string | null
          updated_at: string | null
        }
        Insert: {
          bio_en?: string | null
          bio_pt?: string | null
          created_at?: string | null
          display_order?: number | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          linkedin_url?: string | null
          name: string
          role_en: string
          role_pt: string
          twitter_url?: string | null
          updated_at?: string | null
        }
        Update: {
          bio_en?: string | null
          bio_pt?: string | null
          created_at?: string | null
          display_order?: number | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          linkedin_url?: string | null
          name?: string
          role_en?: string
          role_pt?: string
          twitter_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          created_at: string | null
          description_en: string | null
          description_pt: string | null
          display_order: number | null
          id: string
          is_published: boolean | null
          thumbnail_url: string | null
          title_en: string
          title_pt: string
          youtube_id: string
        }
        Insert: {
          created_at?: string | null
          description_en?: string | null
          description_pt?: string | null
          display_order?: number | null
          id?: string
          is_published?: boolean | null
          thumbnail_url?: string | null
          title_en: string
          title_pt: string
          youtube_id: string
        }
        Update: {
          created_at?: string | null
          description_en?: string | null
          description_pt?: string | null
          display_order?: number | null
          id?: string
          is_published?: boolean | null
          thumbnail_url?: string | null
          title_en?: string
          title_pt?: string
          youtube_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin_or_editor: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "editor" | "moderator" | "member"
      event_type: "presencial" | "online" | "hibrido"
      member_status: "pending" | "approved" | "rejected" | "suspended"
      payment_method: "mpesa" | "emola" | "bank_transfer" | "cash"
      payment_status: "pending" | "confirmed" | "failed" | "refunded"
      publication_type: "relatorio" | "estudo" | "guia" | "artigo" | "manual"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "moderator", "member"],
      event_type: ["presencial", "online", "hibrido"],
      member_status: ["pending", "approved", "rejected", "suspended"],
      payment_method: ["mpesa", "emola", "bank_transfer", "cash"],
      payment_status: ["pending", "confirmed", "failed", "refunded"],
      publication_type: ["relatorio", "estudo", "guia", "artigo", "manual"],
    },
  },
} as const
