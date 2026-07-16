# Reggie Evans — Portfolio

My personal site. Built to show what I can actually build, not just talk about.

**Live site:** [reggieevans.me](http://reggieevans.me)

## What's in it

- Home page with an about section, a rundown of Bear Creek Web Studio (my freelance work), a project showcase, and a skills breakdown
- Individual project pages with screenshots, feature lists, and links out to live demos / repos
- Light and dark mode, plus a third "unleashed" mode with a glitch effect on the name because why not
- Fully responsive, including a real mobile nav (not just a hidden desktop menu)

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- react-icons
- Vercel Analytics

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/app/
  components/     UI components (Nav, Hero, Projects, Skills, etc.)
  context/        Theme context for light/dark/unleashed modes
  data/           Project and skills data
  projects/[slug] Dynamic project detail pages
```

Adding a new project is just adding an entry to `src/app/data/projects.ts` and dropping screenshots in `public/`.

## Contact

Email: [revans911@gmail.com](mailto:revans911@gmail.com)
LinkedIn: [linkedin.com/in/reggie-evans-631b3753](https://www.linkedin.com/in/reggie-evans-631b3753/)
GitHub: [github.com/ReggieEvans](https://github.com/ReggieEvans)

Open to full-time roles, contract work, and freelance projects.
