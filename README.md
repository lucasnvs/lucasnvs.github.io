# lucasneves.com

Portfolio profissional minimalista desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** + TypeScript
- **Vite** para build otimizado
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **SEO otimizado** com meta tags, sitemap e robots.txt

## ✨ Features

- Design minimalista com paleta zinc
- Dark mode integrado
- Sistema de tabs para Projetos, Experiência e Formação
- Componentes modulares seguindo clean code
- Lazy loading e code splitting para performance
- Animações suaves com Framer Motion
- Totalmente responsivo

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
```

## 📦 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── data.ts          # Dados estáticos (projetos, experiências, skills)
├── App.tsx          # Componente principal
└── main.tsx         # Entry point
```

## 🎨 Componentes

- **Header** - Logo, navegação e botão dark mode
- **ObjectiveSection** - Texto de apresentação
- **SkillsSection** - Tags de habilidades técnicas
- **TabSection** - Sistema de tabs com projetos, experiência e formação
- **Footer** - Links e copyright

## 📄 Licença

© 2025 Lucas Neves. Todos os direitos reservados.
