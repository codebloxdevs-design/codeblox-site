# CodeBlox - Site do Canal

![CodeBlox Banner](https://via.placeholder.com/1200x300/0a0e27/00ff88?text=CodeBlox+-+Aprenda+Luau+e+Crie+Jogos)

Site profissional para divulgar o canal CodeBlox do YouTube, onde você ensina criação de jogos usando a linguagem Luau para Roblox.

## 🎯 Sobre o Projeto

Este é um site moderno, responsivo e totalmente funcional criado para promover tutoriais de programação em Luau. O site apresenta:

- ✨ Design único e profissional com animações suaves
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🎨 Efeitos visuais modernos (partículas, gradientes, animações)
- 🔍 Sistema de busca e filtros avançados
- 🎥 Integração com YouTube
- ⚡ Performance otimizada
- 🌐 100% gratuito para hospedar

## 📋 Funcionalidades

### Página Inicial
- Hero section impactante com estatísticas do canal
- Seção de benefícios com cards animados
- Exibição dos últimos vídeos do canal
- Trilha de aprendizado interativa
- Call-to-action estratégicos
- Footer completo com links sociais

### Página de Tutoriais
- Grade de vídeos organizada
- Filtros por nível (Iniciante, Intermediário, Avançado)
- Filtros por categoria (Fundamentos, Mecânicas, Interface, Otimização)
- Busca em tempo real
- Contador de resultados
- Cards interativos com hover effects

### Recursos Visuais
- Animação de partículas no background
- Gradientes modernos e vibrantes
- Transições suaves
- Loading states elegantes
- Scroll indicator animado
- Botão de voltar ao topo

## 🚀 Como Usar

### 1. Estrutura dos Arquivos

```
codeblox-site/
├── index.html              # Página inicial
├── pages/
│   └── tutoriais.html     # Página de tutoriais
├── css/
│   └── main.css           # Estilos principais
├── js/
│   ├── main.js            # JavaScript principal
│   ├── particles.js       # Animação de partículas
│   ├── youtube-api.js     # Integração YouTube
│   └── tutorials.js       # Lógica da página de tutoriais
└── README.md              # Este arquivo
```

### 2. Personalização

#### Atualizar Links do Canal

Abra os arquivos HTML e substitua `@CodeBlox-c2g` pelo handle do seu canal:

```html
<!-- Procure por: -->
https://www.youtube.com/@CodeBlox-c2g

<!-- Substitua por: -->
https://www.youtube.com/@SEU-CANAL
```

#### Adicionar API Key do YouTube (Opcional)

Para carregar vídeos automaticamente do seu canal:

1. Obtenha uma API key em: https://console.developers.google.com/
2. Abra `js/youtube-api.js`
3. Substitua `YOUR_API_KEY_HERE` pela sua chave
4. Mude `useAPI: false` para `useAPI: true`

```javascript
const YOUTUBE_CONFIG = {
    apiKey: 'SUA_API_KEY_AQUI',
    useAPI: true  // Mude para true
};
```

#### Personalizar Cores

Edite as variáveis CSS em `css/main.css`:

```css
:root {
    --primary: #00ff88;      /* Verde principal */
    --secondary: #0066ff;    /* Azul secundário */
    --accent: #ff0066;       /* Rosa destaque */
    /* Altere conforme preferir */
}
```

#### Adicionar Seus Vídeos

Edite o array `tutorialsData` em `js/tutorials.js`:

```javascript
const tutorialsData = [
    {
        id: '1',
        title: 'Título do Seu Vídeo',
        description: 'Descrição do vídeo',
        thumbnail: 'URL_DA_THUMBNAIL',
        level: 'iniciante', // ou 'intermediario', 'avancado'
        category: 'fundamentos', // ou 'mecanicas', 'interface', 'otimizacao'
        duration: '15:30',
        publishedAt: '2024-01-15',
        views: '2.5K'
    },
    // Adicione mais vídeos...
];
```

## 🌐 Hospedagem Gratuita

### Opção 1: Vercel (Recomendado) ⭐

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. No diretório do projeto, execute:
   ```bash
   vercel
   ```
4. Siga as instruções
5. Seu site estará online em segundos!

**Vantagens:**
- Deploy automático
- SSL gratuito
- Performance excelente
- Domínio gratuito (.vercel.app)

### Opção 2: Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o painel
3. Pronto! Site no ar.

**Vantagens:**
- Interface drag-and-drop
- SSL gratuito
- Forms gratuitos

### Opção 3: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main`
5. Site publicado!

**Vantagens:**
- Integração com Git
- Gratuito para projetos públicos

## 📱 Responsividade

O site é totalmente responsivo e testado em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## ⚡ Performance

- Lazy loading de imagens
- Animações otimizadas com CSS
- JavaScript modular
- Código minificável
- Sem dependências pesadas

## 🎨 Tecnologias Utilizadas

- HTML5
- CSS3 (Variables, Flexbox, Grid, Animations)
- JavaScript ES6+
- Google Fonts (Orbitron, Bebas Neue, DM Sans, JetBrains Mono)

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se tiver dúvidas ou problemas:

- 📧 Email: contato@codeblox.com
- 💬 Discord: [discord.gg/codeblox](https://discord.gg/codeblox)
- 🐦 Twitter: [@codeblox](https://twitter.com/codeblox)

## 🎯 Próximos Passos

Ideias para expandir o site:

- [ ] Página "Sobre" com biografia
- [ ] Página "Projetos" com portfolio
- [ ] Página "Recursos" com downloads
- [ ] Página "Contato" com formulário
- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Newsletter
- [ ] Dark/Light mode toggle
- [ ] Busca avançada com tags
- [ ] Integração com Discord
- [ ] Analytics dashboard

## 🌟 Créditos

Desenvolvido com ❤️ para a comunidade de desenvolvedores Luau/Roblox.

---

**CodeBlox** © 2026 - Aprenda a criar jogos incríveis com Luau!

[🔗 Canal YouTube](https://www.youtube.com/@CodeBlox-c2g) | [💬 Discord](https://discord.gg/codeblox) | [🐦 Twitter](https://twitter.com/codeblox)
