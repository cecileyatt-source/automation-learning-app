# Student-Teacher Learning Tool (Netlify Ready)

This is a Vite + React web app packaged for Netlify deployment.

## What the app does
- Shows a 12-week workflow automation learning curriculum
- Displays goal, focus areas, tasks, build, and deliverables per week
- Unlocks the next week only after all deliverables for the current week are completed
- Includes Student View and Teacher View
- Stores progress in browser localStorage

## Local run
1. Open terminal in this folder
2. Run `npm install`
3. Run `npm run dev`

## Production build
1. Run `npm install`
2. Run `npm run build`
3. The production files will be generated in `dist`

## Netlify deployment options
### Option 1: Deploy from Git repository
- Push this project to GitHub
- In Netlify, import the repository
- Build command: `npm run build`
- Publish directory: `dist`

### Option 2: Manual deploy
- Run `npm install`
- Run `npm run build`
- Upload the `dist` folder to Netlify

## Included Netlify files
- `netlify.toml`
- `public/_redirects`

These support SPA routing so page refreshes do not return a 404.
