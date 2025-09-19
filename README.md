# Creative React Site

Pequeno site criado em React com CSS puro. Projeto pensado para deploy rápido no Vercel (ou qualquer hosting estático que suporte builds do Vite).

## Estrutura

- index.html - ponto de entrada
- src/main.jsx - inicialização do React
- src/App.jsx - componente principal
- src/styles.css - estilos
- package.json - scripts para dev, build e preview
- vercel.json - (opcional) configuração de build para Vercel

## Como rodar localmente

1. Instale dependências
   ```bash
   npm install
   ```

2. Rodar em desenvolvimento
   ```bash
   npm run dev
   ```

3. Build para produção
   ```bash
   npm run build
   npm run preview
   ```

## Como hospedar no Vercel (passo a passo)

1. Crie um repositório no GitHub e envie o projeto.
2. No Vercel, clique em New Project → importe do GitHub → selecione o repositório.
3. Build Command: npm run build. Output Directory: dist.
4. Clique em Deploy. O Vercel fornecerá um link do tipo https://seu-projeto.vercel.app.
