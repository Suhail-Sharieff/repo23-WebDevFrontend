npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


this is shortened to "npm run tw" coz i changed in scripts as:
 "scripts": {
    "tw": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }



to deploy a website follow these procedure:
0>npm i vite
1>in scripts in package.json add "build":"vite build"
2>npm run build
3>this will create a new folder called "dist" having ur css in reduced bandwidth format making more efficient,all css and js r pushed into a "assets" folder
4>make sure that the html fil is named as "index.html"
