# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



SETUP:
{dont forget to install ES7 extension}
make folder
npm create vite@latest
npm i
npm run tw--(i have added to use tailwind in my repo,also import output.css in main.jsx file)
npm run dev--(this is alrady written in scripts in .json)

start from app.jsx


JSX file means we give HTML files with inbuilt JS power ,something like that
the diff is like we use className in place of class ,and JSX files are comparitively more strict than HTML since they thrown the error if theeres no closing tag

1 issuue, its not concureently running tw and dev ie after i add some tailwind css, i should first run npx run tw ,then start npm run dev, to make it run simultaniouly,


npm i concurrently --save-dev
added "startBoth" in .json


FINAL COMMAND TO RUN Tailwind and vite at a time:
npm run startBoth

IMP:
if it throws error like "cant read json file like npm ENOV....."--->go to package.json-->click on debug--->Ctrl+C two times on terminal--->npm run startBoth

if TW suggestions r not showing even on activating extensions, press Ctrl+Space