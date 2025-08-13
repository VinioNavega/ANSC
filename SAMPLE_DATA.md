# Dados de Exemplo para o Firebase

## Como Adicionar os Dados de Exemplo

### 1. Acessar o Console do Firebase
1. Vá para [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Selecione seu projeto
3. Clique em "Firestore Database"
4. Clique em "Start collection"

### 2. Criar Collection "news"

#### Documento 1:
**Document ID**: `campeonato-municipal-2024`
```json
{
  "title": "Campeonato Municipal de Surf 2024 - Inscrições Abertas",
  "summary": "As inscrições para o maior evento de surf da cidade já estão abertas. Não perca essa oportunidade!",
  "content": "O Campeonato Municipal de Surf 2024 promete ser o maior evento do ano. Com categorias para todas as idades e níveis, desde iniciantes até profissionais, o campeonato acontecerá na Praia Central nos dias 15 e 16 de março. As inscrições custam R$ 50 para associados e R$ 80 para não associados. Haverá premiação em dinheiro para os três primeiros colocados de cada categoria, além de troféus e medalhas. O evento também contará com food trucks, música ao vivo e atividades para toda a família.",
  "imageUrl": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
  "author": "João Silva",
  "date": "2024-02-15",
  "createdAt": "2024-02-15T10:00:00Z",
  "published": true
}
```

#### Documento 2:
**Document ID**: `nova-parceria-loja-surf`
```json
{
  "title": "Nova Parceria com Loja de Surf Local",
  "summary": "Associados agora têm 20% de desconto em equipamentos na Surf Shop Central.",
  "content": "Temos o prazer de anunciar nossa nova parceria com a Surf Shop Central, a maior loja de equipamentos de surf da região. A partir de agora, todos os associados da nossa associação terão direito a 20% de desconto em pranchas, roupas de neoprene, acessórios e muito mais. Para usufruir do desconto, basta apresentar sua carteirinha de associado ou mostrar o comprovante no aplicativo. Esta parceria faz parte do nosso compromisso em oferecer cada vez mais benefícios aos nossos membros.",
  "imageUrl": "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
  "author": "Maria Santos",
  "date": "2024-02-10",
  "createdAt": "2024-02-10T14:30:00Z",
  "published": true
}
```

#### Documento 3:
**Document ID**: "clinica-surf-iniciantes"
```json
{
  "title": "Clínica de Surf para Iniciantes - Vagas Limitadas",
  "summary": "Aprenda a surfar com instrutores profissionais em nossa clínica gratuita para associados.",
  "content": "A Associação de Surf está oferecendo uma clínica gratuita para iniciantes, destinada exclusivamente aos nossos associados. O evento acontecerá no próximo sábado, das 8h às 12h, na Praia do Sol. Serão disponibilizadas pranchas e equipamentos de segurança. Os instrutores são profissionais certificados com mais de 10 anos de experiência. As vagas são limitadas a 20 participantes, então garante já a sua! Para se inscrever, entre em contato pelo WhatsApp ou compareça à nossa sede.",
  "imageUrl": "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800",
  "author": "Carlos Oliveira",
  "date": "2024-02-05",
  "createdAt": "2024-02-05T09:15:00Z",
  "published": true
}
```

### 3. Criar Collection "events"

#### Documento 1:
**Document ID**: `festival-verao-2024`
```json
{
  "title": "Festival de Verão Surf & Música 2024",
  "description": "Dois dias de surf, música e diversão na Praia do Sol com bandas locais e competições.",
  "fullDescription": "O Festival de Verão 2024 foi um sucesso absoluto! Durante dois dias, a Praia do Sol se transformou em um verdadeiro paraíso para os amantes do surf e da música. O evento contou com competições em várias categorias, shows de bandas locais, food trucks com deliciosas opções gastronômicas e atividades para toda a família. Mais de 200 pessoas participaram do evento, que se consolidou como um dos principais do calendário da associação. As condições do mar estiveram perfeitas, com ondas de 1 a 2 metros, proporcionando excelentes manobras e muito espetáculo para o público presente.",
  "date": "2024-01-20",
  "location": "Praia do Sol",
  "imageUrl": "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "photos": [
    "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "participants": 200,
  "category": "Festival",
  "createdAt": "2024-01-20T08:00:00Z"
}
```

#### Documento 2:
**Document ID**: `campeonato-municipal-2023`
```json
{
  "title": "Campeonato Municipal de Surf 2023",
  "description": "A maior competição de surf da cidade com atletas de todas as categorias e idades.",
  "fullDescription": "O Campeonato Municipal de Surf 2023 foi marcado por ondas excepcionais e performances incríveis dos atletas. Com mais de 150 competidores divididos em 8 categorias diferentes, o evento durou três dias e coroou os melhores surfistas da região. A categoria profissional masculina foi vencida por Pedro Santos, que executou manobras espetaculares na final. Na categoria feminina, Ana Costa mostrou sua técnica apurada e levou o título para casa. O evento também premiou as categorias juvenis e masters, incentivando surfistas de todas as idades a participarem do esporte que amamos.",
  "date": "2023-03-15",
  "location": "Praia Central",
  "imageUrl": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "photos": [
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "participants": 150,
  "category": "Competição",
  "createdAt": "2023-03-15T07:00:00Z"
}
```

#### Documento 3:
**Document ID**: `limpeza-praia-2023`
```json
{
  "title": "Mutirão de Limpeza da Praia",
  "description": "Ação de conscientização ambiental com a participação de associados e comunidade local.",
  "fullDescription": "O Mutirão de Limpeza da Praia foi uma iniciativa da associação para conscientizar sobre a importância da preservação do meio ambiente marinho. Mais de 80 voluntários, entre associados e membros da comunidade, se reuniram para limpar 2 km de extensão da Praia Central. Foram coletados mais de 300 kg de lixo, incluindo plásticos, vidros e outros materiais que prejudicam a vida marinha. Após a limpeza, foi realizada uma palestra sobre sustentabilidade e preservação dos oceanos. O evento mostrou como pequenas ações podem fazer uma grande diferença para o meio ambiente.",
  "date": "2023-06-05",
  "location": "Praia Central",
  "imageUrl": "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "photos": [
    "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "participants": 80,
  "category": "Ação Social",
  "createdAt": "2023-06-05T06:00:00Z"
}
```

### 4. Criar Usuário de Exemplo

#### Via Console do Firebase:
1. Vá em "Authentication" > "Users"
2. Clique em "Add user"
3. **Email**: `joao.silva@email.com`
4. **Password**: `123456`
5. Clique em "Add user"

#### Depois, adicionar dados do usuário no Firestore:
**Collection**: `users`
**Document ID**: `[UID do usuário criado]`
```json
{
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "phone": "(11) 99999-9999",
  "plan": "yearly",
  "status": "active",
  "role": "user",
  "createdAt": "2024-01-15T10:00:00Z",
  "updatedAt": "2024-01-15T10:00:00Z",
  "events": ["festival-verao-2024", "campeonato-municipal-2023"]
}
```

### 5. Criar Usuário Admin (Opcional)

#### Via Console do Firebase:
1. **Email**: `admin@associacaosurf.com`
2. **Password**: `admin123`

#### Dados no Firestore:
```json
{
  "name": "Administrador",
  "email": "admin@associacaosurf.com",
  "phone": "(11) 88888-8888",
  "plan": "yearly",
  "status": "active",
  "role": "admin",
  "createdAt": "2024-01-01T10:00:00Z",
  "updatedAt": "2024-01-01T10:00:00Z",
  "events": []
}
```

## Como Adicionar os Dados

### Método 1: Via Console do Firebase (Recomendado para iniciantes)
1. Acesse o console do Firebase
2. Vá em "Firestore Database"
3. Clique em "Start collection"
4. Digite o nome da collection (ex: "news")
5. Clique em "Next"
6. Digite o Document ID
7. Adicione os campos um por um
8. Clique em "Save"

### Método 2: Via Código (Para desenvolvedores)
Você pode criar um script para importar todos os dados de uma vez. Crie um arquivo `import-data.js` e execute uma única vez para popular o banco.

### Método 3: Via Firebase CLI (Avançado)
Use o Firebase CLI para importar dados de arquivos JSON.

## Dicas Importantes

1. **Timestamps**: Use o formato ISO 8601 para datas
2. **URLs de Imagens**: Todas as URLs do Pexels são válidas e gratuitas
3. **IDs dos Documentos**: Use nomes descritivos em kebab-case
4. **Backup**: Sempre faça backup antes de adicionar dados em produção
5. **Testes**: Teste cada funcionalidade após adicionar os dados

## Verificação

Após adicionar os dados, verifique se:
- [ ] As notícias aparecem na página inicial
- [ ] Os eventos aparecem na página de eventos
- [ ] É possível fazer login com o usuário de exemplo
- [ ] O perfil do usuário mostra os dados corretos
- [ ] As imagens estão carregando corretamente