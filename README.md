# Drakkar-prompt AI

An Open source AI Generative web-based app, an unprecedented platform that harnesses the boundless potential of artificial intelligence to ignite your creative spark! From dynamic dialogues to spellbinding videos, captivating imagery, harmonious melodies, sophisticated code generation, and a host of other features, our app offers an expansive array of AI services tailored to amplify your creativity.

# Screenshots

![Landing Page](public/ui-screenshot/landing-page.png)
![Login Page](public/ui-screenshot/login.png)
![Dashboard Page](public/ui-screenshot/dashboard.png)
![Pro Plan Upgrade](public/ui-screenshot/pro.png)

# Demo

https://drakkar-prompt-ai.vercel.app/

# Key Features

### ChatGPT Service

Immerse yourself in lifelike conversations with our AI-powered chat service, reminiscent of ChatGPT. Whether seeking companionship or intellectual exchange, our chat function is designed to cater to your conversational needs.

### Video Generation

Embark on a journey of video creation like never before. Our AI-driven video generation service empowers you to craft bespoke videos aligned with your vision and ideas.

### Image Creation

Unleash your inner artist with AI-generated images that defy conventional imagination. Craft visually stunning masterpieces that challenge the limits of artistic expression.

### Music Composition

Let melodies flow seamlessly as our AI composes music resonating with your deepest emotions. From serene tunes to dynamic compositions, our music generation service paves the way for endless auditory exploration.

### Code Generation

Experience the evolution of programming with our AI-backed code generation service. Whether initiating a new project or seeking coding inspiration, our app assists in generating code snippets to expedite your development endeavors.

### Pro Plan Upgrade

Elevate your journey with our Pro plan, offering not only enhanced and unlimited features but also exclusive chat support to ensure you're fully equipped to bring your ideas to life.

### Real-time Chat Support

With integrated real-time chat support, our team of experts is readily available to provide personalized assistance, answer your questions, and guide you through your creative journey.

# Configuration

To run D-propmt AI, you'll need to set up the following environment variables:

### Clerk Configuration

For integrating with Clerk, you should provide these keys:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk's public publishable key.
- `CLERK_SECRET_KEY`: Clerk's secret key.
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: URL for signing in using Clerk.
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: URL for signing up using Clerk.
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`: URL to redirect after successful sign-in.
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`: URL to redirect after successful sign-up.

### OpenAI Configuration

For working with OpenAI's API, you'll need:

- `OPENAI_API_KEY`: Your OpenAI API key.

### Replicate AI Configuration

If you plan to use Replicate AI, you'll need:

- `REPLICATE_API_TOKEN`: Your Replicate AI API token.

### Prisma Database Configuration

For connecting to your Prisma database, provide:

- `DATABASE_URL`: URL for your Prisma database.

### Stripe Configuration

If you are integrating Stripe payments, use:

- `STRIPE_SECRET_KEY`: Your Stripe secret key.
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret.

### Next.js Host and Port Configuration

For your Next.js application:

- `NEXT_PUBLIC_HOST`: The URL of your Next.js application.

### Crisp Chat Support Configuration

If you're using Crisp for chat support:

- `NEXT_PUBLIC_CRISP_WEBSITE_ID`: Your Crisp website ID.

Remember to keep your environment variables secure and avoid sharing them publicly.

# Installation

Install D-promt-AII with yarn

```bash
clone this repo
cd my-project
run: yarn or yarn install
run: yarn run dev (to start the project)
```

## Tech Stack
Drakkarrr/D-prompt-AI is built on the following main stack:
- <img width='25' height='25' src='https://img.stackshare.io/service/97/eW6tXeq3.png' alt='Stripe'/> [Stripe](https://stripe.com) – Payment Services
- <img width='25' height='25' src='https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png' alt='Node.js'/> [Node.js](http://nodejs.org/) – Frameworks (Full Stack)
- <img width='25' height='25' src='https://img.stackshare.io/service/1020/OYIaJ1KK.png' alt='React'/> [React](https://reactjs.org/) – Javascript UI Libraries
- <img width='25' height='25' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'/> [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/1612/bynNY5dJ.jpg' alt='TypeScript'/> [TypeScript](http://www.typescriptlang.org) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/2202/72d087642cfce6fef6f2dabec5bf49e8_400x400.png' alt='Autoprefixer'/> [Autoprefixer](https://github.com/postcss/autoprefixer) – CSS Pre-processors / Extensions
- <img width='25' height='25' src='https://img.stackshare.io/service/3337/Q4L7Jncy.jpg' alt='ESLint'/> [ESLint](http://eslint.org/) – Code Review
- <img width='25' height='25' src='https://img.stackshare.io/service/4631/default_c2062d40130562bdc836c13dbca02d318205a962.png' alt='Shell'/> [Shell](https://en.wikipedia.org/wiki/Shell_script) – Shells
- <img width='25' height='25' src='https://img.stackshare.io/no-img-open-source.png' alt='axios'/> [axios](https://github.com/mzabriskie/axios) – Javascript Utilities & Libraries
- <img width='25' height='25' src='https://img.stackshare.io/service/5848/44mC-kJ3.jpg' alt='Yarn'/> [Yarn](https://yarnpkg.com/) – Front End Package Manager
- <img width='25' height='25' src='https://img.stackshare.io/service/5936/nextjs.png' alt='Next.js'/> [Next.js](https://nextjs.org/) – Frameworks (Full Stack)
- <img width='25' height='25' src='https://img.stackshare.io/service/7035/default_66f265943abed56bcdbfca1c866a4261b1fbb063.jpg' alt='Prettier'/> [Prettier](https://prettier.io/) – Code Review
- <img width='25' height='25' src='https://img.stackshare.io/service/8680/Logo_Symbol_White.jpg' alt='Prisma'/> [Prisma](https://www.prisma.io/) – Object Relational Mapper (ORM)
- <img width='25' height='25' src='https://img.stackshare.io/service/11559/zustand.png' alt='Zustand'/> [Zustand](https://github.com/react-spring/zustand) – State Management Library
- <img width='25' height='25' src='https://img.stackshare.io/service/11563/actions.png' alt='GitHub Actions'/> [GitHub Actions](https://github.com/features/actions) – Continuous Integration
- <img width='25' height='25' src='https://img.stackshare.io/service/586/n4u37v9t_400x400.png' alt='Docker'/> [Docker](https://www.docker.com/) – Virtual Machine Platforms & Containers



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
