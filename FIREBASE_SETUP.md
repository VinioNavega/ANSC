# Configuração Completa do Firebase - Associação de Surf

## 1. Criando o Projeto no Firebase

### Passo 1: Acessar o Console do Firebase
1. Acesse [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Faça login com sua conta Google
3. Clique em "Criar um projeto" ou "Add project"

### Passo 2: Configurar o Projeto
1. **Nome do projeto**: `associacao-surf` (ou o nome que preferir)
2. **Google Analytics**: Pode desabilitar por enquanto (opcional)
3. Clique em "Criar projeto"
4. Aguarde a criação (pode levar alguns minutos)

### Passo 3: Adicionar App Web
1. No painel do projeto, clique no ícone `</>` (Web)
2. **Nome do app**: `Site Associação de Surf`
3. **Não** marque "Firebase Hosting" por enquanto
4. Clique em "Registrar app"
5. **IMPORTANTE**: Copie as credenciais que aparecem na tela

## 2. Configurando Authentication

### Passo 1: Habilitar Authentication
1. No menu lateral, clique em "Authentication"
2. Clique em "Get started"
3. Vá na aba "Sign-in method"
4. Clique em "Email/Password"
5. **Habilite** a primeira opção (Email/Password)
6. **NÃO** habilite "Email link (passwordless sign-in)"
7. Clique em "Save"

### Passo 2: Configurar Domínios Autorizados
1. Ainda em "Sign-in method"
2. Role para baixo até "Authorized domains"
3. Adicione seu domínio quando for fazer deploy (por enquanto localhost já está autorizado)

## 3. Configurando Firestore Database

### Passo 1: Criar o Database
1. No menu lateral, clique em "Firestore Database"
2. Clique em "Create database"
3. **Modo**: Selecione "Start in test mode" (por enquanto)
4. **Localização**: Escolha "southamerica-east1 (São Paulo)" para melhor performance no Brasil
5. Clique em "Done"

### Passo 2: Configurar Regras de Segurança
1. Vá na aba "Rules"
2. Substitua as regras padrão por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários podem ler e escrever apenas seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Notícias são públicas para leitura, apenas admins podem escrever
    match /news/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Eventos são públicos para leitura, apenas admins podem escrever
    match /events/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

3. Clique em "Publish"

## 4. Configurando Storage (Opcional)

### Passo 1: Habilitar Storage
1. No menu lateral, clique em "Storage"
2. Clique em "Get started"
3. **Regras de segurança**: Mantenha o padrão por enquanto
4. **Localização**: Escolha "southamerica-east1 (São Paulo)"
5. Clique em "Done"

## 5. Atualizando as Credenciais no Código

### Passo 1: Copiar Credenciais
1. Vá em "Project Settings" (ícone de engrenagem)
2. Role para baixo até "Your apps"
3. Clique no ícone de configuração do seu app web
4. Copie o objeto `firebaseConfig`

### Passo 2: Atualizar o Arquivo
Substitua as credenciais no arquivo `src/lib/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-project-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "seu-app-id"
};
```

## 6. Estrutura do Firestore Database

### Collections que serão criadas:

#### Collection: `users`
```
users/{userId}
├── name: string
├── email: string
├── phone: string
├── plan: string ('monthly' | 'yearly')
├── status: string ('active' | 'cancelled')
├── role: string ('user' | 'admin')
├── createdAt: timestamp
├── updatedAt: timestamp
└── events: array of strings (event IDs)
```

#### Collection: `news`
```
news/{newsId}
├── title: string
├── summary: string
├── content: string
├── imageUrl: string
├── author: string
├── date: string
├── createdAt: timestamp
└── published: boolean
```

#### Collection: `events`
```
events/{eventId}
├── title: string
├── description: string
├── fullDescription: string
├── date: string
├── location: string
├── imageUrl: string
├── photos: array of strings (URLs)
├── participants: number
├── category: string
└── createdAt: timestamp
```

## 7. Testando a Configuração

### Passo 1: Verificar Conexão
1. Abra o site no navegador
2. Abra o Console do Desenvolvedor (F12)
3. Vá na aba "Console"
4. Se não houver erros relacionados ao Firebase, a conexão está funcionando

### Passo 2: Testar Authentication
1. Vá na página "Associado"
2. Tente criar uma conta de teste
3. Verifique se o usuário aparece em "Authentication > Users" no console do Firebase

## 8. Próximos Passos

### Para Produção:
1. **Alterar regras do Firestore** para modo de produção
2. **Configurar domínio personalizado** no Firebase Hosting
3. **Implementar sistema de pagamento** (Mercado Pago, PagSeguro, etc.)
4. **Configurar backup automático** do Firestore
5. **Implementar monitoramento** e analytics

### Para Desenvolvimento:
1. **Criar dados de exemplo** usando o console do Firebase
2. **Testar todas as funcionalidades**
3. **Configurar variáveis de ambiente** para diferentes ambientes

## Troubleshooting Comum

### Erro: "Firebase: Error (auth/configuration-not-found)"
- Verifique se as credenciais estão corretas no arquivo `firebase.ts`
- Certifique-se de que o Authentication está habilitado

### Erro: "Missing or insufficient permissions"
- Verifique as regras do Firestore
- Certifique-se de que o usuário está autenticado

### Erro: "Firebase: Error (auth/unauthorized-domain)"
- Adicione seu domínio em "Authentication > Sign-in method > Authorized domains"

## Contatos para Suporte
- Documentação oficial: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- Stack Overflow: Tag `firebase`
- Comunidade Firebase: [https://firebase.google.com/community](https://firebase.google.com/community)