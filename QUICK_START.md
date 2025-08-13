# Guia Rápido - Configuração Firebase

## ⚡ Configuração Rápida (15 minutos)

### 1. Criar Projeto Firebase
1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em "Criar um projeto"
3. Nome: `associacao-surf`
4. Desabilite Google Analytics (por enquanto)
5. Clique em "Criar projeto"

### 2. Configurar Authentication
1. Menu lateral → "Authentication"
2. "Get started"
3. Aba "Sign-in method"
4. Clique em "Email/Password"
5. Habilite a primeira opção
6. Salvar

### 3. Configurar Firestore
1. Menu lateral → "Firestore Database"
2. "Create database"
3. "Start in test mode"
4. Localização: "southamerica-east1 (São Paulo)"
5. "Done"

### 4. Obter Credenciais
1. Ícone de engrenagem → "Project Settings"
2. Aba "General"
3. Role até "Your apps"
4. Clique no ícone `</>`
5. Nome: "Site Associação de Surf"
6. "Register app"
7. **COPIE** o objeto `firebaseConfig`

### 5. Atualizar Código
Cole suas credenciais em `src/lib/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "123456789",
  appId: "SEU_APP_ID"
};
```

### 6. Adicionar Dados de Exemplo

#### Via Console (Método Visual):
1. Firestore Database → "Start collection"
2. Collection ID: `news`
3. Document ID: `campeonato-municipal-2024`
4. Adicione os campos:
   - `title` (string): "Campeonato Municipal de Surf 2024"
   - `summary` (string): "As inscrições para o maior evento..."
   - `imageUrl` (string): "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800"
   - `author` (string): "João Silva"
   - `date` (string): "2024-02-15"
   - `published` (boolean): true

#### Via Código (Método Rápido):
1. Descomente as linhas no final do arquivo `src/utils/sampleData.ts`
2. Execute o site
3. Abra o console do navegador
4. Os dados serão criados automaticamente

### 7. Criar Usuário de Teste
1. Authentication → "Users"
2. "Add user"
3. Email: `joao.silva@email.com`
4. Password: `123456`
5. "Add user"

### 8. Testar
1. Abra o site
2. Vá em "Associado"
3. Faça login com:
   - Email: `joao.silva@email.com`
   - Senha: `123456`

## ✅ Checklist de Verificação

- [ ] Projeto Firebase criado
- [ ] Authentication configurado
- [ ] Firestore configurado
- [ ] Credenciais atualizadas no código
- [ ] Dados de exemplo adicionados
- [ ] Usuário de teste criado
- [ ] Login funcionando
- [ ] Notícias aparecendo na home
- [ ] Eventos aparecendo na página de eventos

## 🚨 Problemas Comuns

**Erro de conexão**: Verifique se as credenciais estão corretas
**Dados não aparecem**: Verifique se os dados foram salvos no Firestore
**Login não funciona**: Verifique se o Authentication está habilitado

## 📞 Precisa de Ajuda?

Se encontrar algum problema, verifique:
1. Console do navegador (F12) para erros
2. Console do Firebase para logs
3. Documentação oficial: [firebase.google.com/docs](https://firebase.google.com/docs)

---

**Tempo estimado**: 15-20 minutos
**Dificuldade**: Iniciante
**Pré-requisitos**: Conta Google