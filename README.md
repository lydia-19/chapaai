# Chapa AI Research

A modern research showcase website for [Chapa](https://chapa.co) AI, featuring their artificial intelligence research projects and reports. The site presents cutting-edge research in fintech, machine learning, and data analysis conducted by Chapa's AI team.

## 🔬 About

This website serves as a digital library for Chapa's AI research initiatives, showcasing studies that span in finance, data analysis, and AI applications.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: Custom React components with animations
- **Font**: PT Sans from Google Fonts
- **Deployment**: Optimized for Vercel

## 🛠️ Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd chapa-ai
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📚 Research Content

The website currently features:

1. **Bilicho** - AI assistant for API documentation and developer support
2. **NPL Report** - Machine learning models for predicting non-performing loans in Ethiopia
3. **MyGerd** - Data analysis of the Grand Ethiopian Renaissance Dam donation platform
4. **Eyezon Report** - Analysis of humanitarian donation platform for internally displaced persons

## 🎨 Development

### Adding New Research

1. Add research data to `src/data/[research-name].json`
2. Add research images to `public/images/research/`
3. Update the research list in `src/components/ResearchList.tsx`

### Building for Production

```bash
npm run build
npm run start
```

## 🤝 Contributing

This project represents Chapa's research efforts. For inquiries about collaboration or research partnerships, please visit [chapa.co/contact](https://chapa.co/contact).

## 📄 License

Copyright © Chapa. All rights reserved.

**Chapa AI Research** - _Unlocking the Mysteries of Tomorrow's AI_
