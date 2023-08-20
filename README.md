# Drakkar-prompt AI

An Open source AI Generative web-based app, an unprecedented platform that harnesses the boundless potential of artificial intelligence to ignite your creative spark! From dynamic dialogues to spellbinding videos, captivating imagery, harmonious melodies, sophisticated code generation, and a host of other features, our app offers an expansive array of AI services tailored to amplify your creativity.

# Screenshots

![App Screenshot](https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk)

# Demo

https://drakkar-prompt-ai.vercel.app/

# Key Features

### ChatGPT Service

Immerse yourself in lifelike conversations with our AI-powered chat service, reminiscent of ChatGPT. Whether seeking companionship or intellectual exchange, our chat function is designed to cater to your conversational needs.

### Video Generation

Embark on a journey of video creation like never before. Our AI-driven video generation service empowers you to craft bespoke videos aligned with your vision and ideas.

### Image Creation

Unleash your inner artist with AI-generated images that defy conventional imagination. Craft visually stunning masterpieces that challenge the limits of artistic expression.

### Photo Synthesis

Elevate ordinary photos into extraordinary works of art. Our AI-infused photo generation service adds an enchanting touch to your images, transforming each one into a story waiting to be unveiled.

### Music Composition

Let melodies flow seamlessly as our AI composes music resonating with your deepest emotions. From serene tunes to dynamic compositions, our music generation service paves the way for endless auditory exploration.

### Code Generation

Experience the evolution of programming with our AI-backed code generation service. Whether initiating a new project or seeking coding inspiration, our app assists in generating code snippets to expedite your development endeavors.

### Pro Plan Upgrade

Elevate your journey with our Pro plan, offering not only enhanced and unlimited features but also exclusive chat support to ensure you're fully equipped to bring your ideas to life.

### Real-time Chat Support

With integrated real-time chat support, our team of experts is readily available to provide personalized assistance, answer your questions, and guide you through your creative journey.

# Configuration

To run [Your Project Name], you'll need to set up the following environment variables:

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

# Tech Stack

### DEVOPS

- Docker (Containerization)
- Github Actions (CI/CD)

### Client

- ReactJS/NextJS
- TailwindCSS
- Radix-ui
- shadcn-ui

### Server

- Node
- Express
- Database
- Prisma

### API and Data Handling

- Clerk (for authentication)
- Axios (HTTP requests)
- OpenAI (AI capabilities)
- Stripe (payments)
- Replicate AI (AI capabilities)
- Prisma (Database ORM)
- Styling and Post-Processing
- Autoprefixer
- PostCSS
- tailwind-merge

### Miscellaneous UI and Effects

- clsx (Utility for dynamic classNames)
- crisp-sdk-web (Crisp chat support)
- react-hot-toast (Toast notifications)
- react-markdown (Markdown rendering)
- typewriter-effect (Typewriter-style text effect)
- Development Tools and Build
- TypeScript
- ESLint (Code linting)
- Prettier (Code formatting)
- husky (Git hooks)
- lint-staged (Run tasks on staged files)
