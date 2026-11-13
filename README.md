# Dra. Simone Sousa Pereira — Landing Page

Landing page institucional para a **Dra. Simone Sousa Pereira**, Mestre e Doutora em Neurociência e Psicanálise.

O projeto foi construído com foco em acolhimento, autoridade acadêmica, clareza e conversão, incluindo um e-book gratuito com visualização integrada e download em PDF.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- next/font (Fraunces + Manrope)
- next/image

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## Configuração dos dados de contato

Todos os dados editáveis ficam em `lib/config.ts`.

### WhatsApp

O número já está configurado:

```ts
whatsappNumber: "559885376364",
whatsappDisplay: "(98) 8537-6364",
```

- `whatsappNumber`: número completo com código do país, apenas dígitos.
- `whatsappDisplay`: versão formatada exibida no site.
- `whatsappMessage`: mensagem automática enviada ao abrir o WhatsApp.

O botão flutuante, o botão do cabeçalho e o card de contato usam essa configuração automaticamente.

### Instagram e e-mail

Os campos estão vazios de propósito, para não inventar informações. Preencha apenas se forem canais oficiais:

```ts
instagramUrl: "",
instagramHandle: "",
email: "",
```

- `instagramUrl`: URL completa do perfil (opcional).
- `instagramHandle`: apenas o `@perfil` (usado se a URL não for informada).
- `email`: e-mail profissional.

### Informações de atendimento

```ts
location: "",
hours: "",
```

Preencha somente se essas informações forem divulgadas oficialmente. Caso contrário, o site mantém um card acolhedor no lugar.

## Configuração do e-book

O e-book é controlado pela seção `ebook` em `lib/config.ts`:

```ts
ebook: {
  title: "Cuidando da sua mente",
  subtitle: "Reflexões e exercícios para o autoconhecimento",
  fileName: "ebook-simone-pereira.pdf",
  path: "/ebooks/ebook-simone-pereira.pdf",
  available: true,
  label: "E-book gratuito — Bônus especial para pacientes",
  note: "Material educativo. Não substitui avaliação ou acompanhamento individualizado.",
  themes: ["Relacionamentos", "Ansiedade", "Autoestima", "Saúde mental", "Corpo e emoções"],
}
```

- `path`: caminho público do PDF.
- `fileName`: nome sugerido no download.
- `available`: defina `false` para exibir a mensagem amigável de indisponibilidade.
- `themes`: temas exibidos como selos na seção do e-book.

### Substituir o PDF

1. Coloque o novo arquivo em `public/ebooks/`.
2. Atualize `path` e `fileName` em `lib/config.ts`.
3. Se a capa mudar, gere uma nova imagem e substitua `public/images/ebook-cover.jpg`.

O PDF atual foi otimizado para uso web e tem aproximadamente **56 MB**. Ele está dentro do limite de 100 MB por arquivo do GitHub e da Vercel. Se o arquivo for substituído por um maior, recomendamos otimizá-lo antes do deploy.

O arquivo original em alta resolução e a foto original ficam em `source-assets/`, que está no `.gitignore` e não é enviado ao repositório.

## Instalar como app (PWA)

O site é um PWA: pode ser instalado no Android, iPhone e iPad sem passar pelas lojas.

- **Android / Chrome / Edge:** ao abrir o site, aparece o botão flutuante **Instalar app** no canto inferior esquerdo. Ele dispara o prompt nativo do navegador.
- **iPhone / iPad (Safari):** o mesmo botão abre instruções para usar **Compartilhar → Adicionar à Tela de Início**.
- **Já instalado:** o botão desaparece automaticamente quando o site roda em modo standalone.

Arquivos envolvidos:

- `app/manifest.ts`: nome, cores, ícones e modo `standalone`.
- `public/sw.js`: service worker com cache do app shell (o PDF de ~56 MB não é cacheado).
- `components/InstallApp.tsx`: botão de instalação, prompt e instruções para iOS.
- `components/ServiceWorkerRegister.tsx`: registro do service worker.
- `public/icons/`: ícones 192, 512, maskable e Apple Touch Icon.

Para trocar o ícone do app, substitua os arquivos em `public/icons/` mantendo os mesmos nomes e tamanhos.

## Funcionalidades

- Layout responsivo mobile-first.
- Menu mobile com animação e fechamento por `Esc`.
- Rolagem suave e navegação por âncoras.
- Animações de entrada com `IntersectionObserver`.
- Respeito a `prefers-reduced-motion`.
- Visualizador de PDF integrado, com opção de abrir em nova aba.
- Download direto do PDF.
- Verificação de disponibilidade do PDF com mensagem amigável.
- Botão flutuante de WhatsApp com mensagem automática.
- Botão de voltar ao topo com rolagem suave, exibido após rolar a página.
- PWA instalável com botão de instalação e instruções para iOS.
- SEO técnico com metadata, Open Graph, Twitter Card, sitemap e robots.
- Dados estruturados JSON-LD (Person + WebSite).
- Página de Política de Privacidade.
- Navegação por teclado, skip link e foco visível.

## Estrutura

```text
app/
  layout.tsx
  page.tsx
  globals.css
  manifest.ts
  icon.svg
  apple-icon.png
  politica-de-privacidade/page.tsx
  robots.ts
  sitemap.ts

components/
  Header.tsx
  Hero.tsx
  About.tsx
  Knowledge.tsx
  EbookSection.tsx
  EbookViewer.tsx
  Benefits.tsx
  Welcome.tsx
  Contact.tsx
  Footer.tsx
  WhatsAppButton.tsx
  ScrollToTop.tsx
  InstallApp.tsx
  ServiceWorkerRegister.tsx
  Reveal.tsx
  WhatsAppIcon.tsx
  InstagramIcon.tsx

lib/
  config.ts

public/
  images/
    dra-simone.jpg
    dra-simone-2.jpeg
    ebook-cover.jpg
    og-image.jpg
  ebooks/
    ebook-simone-pereira.pdf
  icons/
    icon-192.png
    icon-512.png
    maskable-512.png
    apple-touch-icon.png
  sw.js
```

## SEO

- Título: `Dra. Simone Sousa Pereira | Neurociência e Psicanálise`
- Descrição: `Conheça o trabalho da Dra. Simone Sousa Pereira, Mestre e Doutora em Neurociência e Psicanálise. Conhecimento, acolhimento e e-book gratuito.`
- Open Graph e Twitter Card com imagem `public/images/og-image.jpg`.
- Sitemap em `/sitemap.xml` e robots em `/robots.txt`.

## Deploy na Vercel

1. Crie um repositório no GitHub e envie o projeto:

```bash
git init
git add .
git commit -m "feat: landing page Dra. Simone Sousa Pereira"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Next.js automaticamente. Mantenha as configurações padrão.
4. Clique em **Deploy**.

O domínio da Vercel é detectado automaticamente (`VERCEL_PROJECT_PRODUCTION_URL`), então a imagem de compartilhamento já funciona no link gerado, mesmo antes de configurar um domínio próprio.

5. (Opcional, recomendado com domínio próprio) Em **Settings → Environment Variables**, adicione:

```env
NEXT_PUBLIC_SITE_URL=https://www.seu-dominio.com.br
```

Depois, faça um novo deploy. Isso garante que canonical, sitemap e Open Graph apontem para o endereço final.

### Conferir a imagem de compartilhamento

Após publicar, valide o cartão do link em:

- WhatsApp: envie o link para você mesmo.
- Facebook/Instagram: [Sharing Debugger](https://developers.facebook.com/tools/debug/).
- LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/).

Se a imagem não aparecer de imediato, force a atualização do cache nessas ferramentas. O arquivo usado é `public/images/og-image.jpg` (1200 × 630).

## Observações importantes

- Nenhum telefone, e-mail, rede social, certificação ou resultado clínico foi inventado.
- Os textos têm caráter informativo e não prometem cura ou resultados terapêuticos.
- O site não realiza atendimento de urgência. Em situações de crise, o contato do CVV (188) é indicado na seção de contato.
- A Política de Privacidade descreve apenas o funcionamento atual do site (sem formulários e sem cookies de rastreamento próprios).

## Scripts

```bash
npm run dev        # desenvolvimento
npm run build      # build de produção
npm start          # servidor de produção
npm run lint       # ESLint
npm run typecheck  # TypeScript
```
