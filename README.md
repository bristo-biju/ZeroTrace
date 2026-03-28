# ZeroTrace - Cyber Trust Certification

![ZeroTrace Concept](docs/hero-screenshot.png) <!-- Note: Add an actual screenshot to docs folder later -->

## Overview
**ZeroTrace** is an affordable, continuous cybersecurity trust certification built specifically for growing tech SMEs. This repository holds the modern, one-page landing site that communicates our core message, highlights features with bento grid UI principles, outlines business benefits, and provides a clear contact form to book demos.

## Tech Stack
Built for extreme performance, security, and a premium "cyber" aesthetics:
- **Framework:** [Next.js 14](https://nextjs.org) (React / App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) 
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Guidelines Checked:** Vercel Web Interface Guidelines

## Getting Started

### Prerequisites
Make sure you have Node.js 18+ installed. 

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bristo-biju/ZeroTrace.git
   cd ZeroTrace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

This Next.js application isolates concerns via smaller components within `src/components`:
- `Hero.tsx`: The animated landing entryway and core value proposition.
- `ProblemSolution.tsx`: Highlights the friction of establishing cybersecurity trust and our clear solution.
- `Features.tsx`: An engaging, animated bento-grid detailing product features.
- `Benefits.tsx`: Easy-to-read business value checklists.
- `Contact.tsx`: Built with accessibility in mind, serving as the lead generation form.

## License
Copyright © All rights reserved.
