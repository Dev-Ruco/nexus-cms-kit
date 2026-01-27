

# Plano: Botao Dinamico de Autenticacao no Header

## Resumo

Implementar um botao inteligente no Header que alterna entre "Tornar-se Membro" (para novos visitantes) e "Entrar" (para utilizadores autenticados), com redireccionamento baseado na role do utilizador.

---

## Fluxo de Utilizacao

```text
VISITANTE NOVO                    UTILIZADOR AUTENTICADO
     |                                      |
     v                                      v
[Tornar-se Membro]                    [Entrar]
     |                                      |
     v                                      v
 /membro                            Verifica Role
(formulario de adesao)                      |
     |                              +-------+-------+
     v                              |               |
Registo + Auto-login           Admin/Editor     Membro
     |                              |               |
     v                              v               v
[Entrar] visivel              /admin      /member/portal
```

---

## Alteracoes Necessarias

### 1. Header.tsx - Botao Dinamico

**Logica:**
- Importar `useAuth` e `useRole`
- Se `user` existe: mostrar "Entrar" com icone de utilizador
- Se `user` nao existe: mostrar "Tornar-se Membro"
- Click em "Entrar" redireciona baseado na role

**Exemplo Visual:**

```text
Desktop (nao autenticado):
[Logo] [Menu...] [Tornar-se Membro] [PT]

Desktop (autenticado):
[Logo] [Menu...] [Joao Silva ▼] [PT]
                      |
                  Dropdown:
                  - Minha Area
                  - Terminar Sessao

Mobile (autenticado):
Menu mobile com:
- Items de navegacao
- Separador
- Minha Area
- Terminar Sessao
```

### 2. Redireccionamento Pos-Login

Na pagina de Login, apos autenticacao bem sucedida, verificar roles e redirecionar:

```typescript
// Logica de redireccionamento
if (isAdmin || isEditor || isModerator) {
  navigate('/admin');
} else if (isMember) {
  navigate('/member/portal');
} else {
  navigate('/'); // Default para utilizadores sem role especifica
}
```

### 3. BecomeMember.tsx - Registo com Auto-Login

Converter o formulario de adesao para:
1. Criar conta no Supabase Auth
2. Criar registo na tabela `members` com status "pending"
3. Utilizador fica automaticamente autenticado
4. Redireciona para portal de membro (com mensagem de "aguardar aprovacao")

---

## Detalhes Tecnicos

### 3.1 Novas Traducoes

```typescript
// Adicionar ao LanguageContext
'nav.enter': 'Entrar',
'nav.my_area': 'Minha Area',
'nav.dashboard': 'Painel de Controlo',
'nav.member_portal': 'Portal do Membro',
```

### 3.2 Componente AuthButton (novo)

Componente reutilizavel para o Header:

```typescript
function AuthButton() {
  const { user, signOut } = useAuth();
  const { isAdmin, isEditor, isModerator, isMember, loading } = useRole();
  const { t } = useLanguage();
  
  if (loading) return <Skeleton />;
  
  if (!user) {
    return (
      <Button asChild>
        <Link to="/membro">{t('nav.become_member')}</Link>
      </Button>
    );
  }
  
  const dashboardPath = (isAdmin || isEditor || isModerator) 
    ? '/admin' 
    : '/member/portal';
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar />
        {user.user_metadata?.full_name || user.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to={dashboardPath}>{t('nav.my_area')}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut}>
          {t('auth.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### 3.3 Fluxo de Registo Actualizado

```typescript
// BecomeMember.tsx - Novo fluxo
const handleSubmit = async (formData) => {
  // 1. Criar conta no Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password, // Novo campo necessario
    options: {
      data: { full_name: formData.name }
    }
  });
  
  if (error) { handleError(); return; }
  
  // 2. Criar registo na tabela members
  await supabase.from('members').insert({
    user_id: data.user.id,
    full_name: formData.name,
    email: formData.email,
    phone: formData.phone,
    province: formData.province,
    status: 'pending' // Aguarda aprovacao
  });
  
  // 3. Utilizador ja esta autenticado (auto-login)
  // 4. Redirecionar para portal
  navigate('/member/portal');
};
```

---

## Ficheiros a Modificar

| Ficheiro | Alteracao |
|----------|-----------|
| `src/components/layout/Header.tsx` | Adicionar logica de autenticacao e botao dinamico |
| `src/pages/BecomeMember.tsx` | Converter para registo real com Supabase |
| `src/pages/auth/Login.tsx` | Melhorar redireccionamento baseado em roles |
| `src/contexts/LanguageContext.tsx` | Adicionar novas traducoes |

---

## Ficheiros a Criar

| Ficheiro | Descricao |
|----------|-----------|
| `src/pages/member/Portal.tsx` | Portal basico do membro (placeholder) |

---

## Layout do Botao no Header

### Desktop - Nao Autenticado
```text
+------------------------------------------------------------------+
| [Logo]  [Inicio] [Sobre ▼] [Actividades] ... [Tornar-se Membro] [PT] |
+------------------------------------------------------------------+
                                               ^^^^^^^^^^^^^^^^^
                                               Botao CTA verde
```

### Desktop - Autenticado
```text
+------------------------------------------------------------------+
| [Logo]  [Inicio] [Sobre ▼] [Actividades] ... [👤 Nome ▼] [PT]    |
+------------------------------------------------------------------+
                                               ^^^^^^^^^^^
                                               Dropdown menu
```

### Mobile - Autenticado
```text
Menu expandido:
+------------------+
| Inicio           |
| Sobre Nos ▼      |
| Actividades      |
| ...              |
| ──────────────── |
| 👤 Minha Area    |
| 🚪 Terminar Sessao|
+------------------+
```

---

## Campos Adicionais no Formulario de Adesao

O formulario actual nao tem campo de password. Sera necessario adicionar:

1. Campo de password
2. Campo de confirmacao de password
3. Validacao de password (minimo 6 caracteres)

Isto permite que o utilizador crie uma conta real durante a adesao.

---

## Estados de Membro

Apos registo, o membro tera status "pending". No portal:

```text
+------------------------------------------------------------------+
|  PORTAL DO MEMBRO                                                |
+------------------------------------------------------------------+
|                                                                   |
|  [⏳] A Sua Candidatura Esta em Analise                          |
|                                                                   |
|  Obrigado por se juntar a CIBERCIDADAOS!                         |
|  A sua candidatura esta a ser analisada pela nossa equipa.       |
|  Sera notificado por email quando for aprovado.                  |
|                                                                   |
|  Enquanto aguarda, pode:                                         |
|  - Ver proximos eventos                                          |
|  - Ler as nossas publicacoes                                     |
|                                                                   |
+------------------------------------------------------------------+
```

Apos aprovacao:
- Recebe role "member"
- Portal mostra opcoes de pagamento de quotas
- Historico de pagamentos
- Notificacoes de eventos

---

## Beneficios

1. **UX Intuitiva** - Botao muda automaticamente consoante estado
2. **Fluxo Simplificado** - Registo e adesao num unico passo
3. **Auto-Login** - Utilizador nao precisa fazer login separadamente
4. **Redireccionamento Inteligente** - Cada tipo de utilizador vai para a area correcta
5. **Consistencia** - Mesmo comportamento em desktop e mobile

