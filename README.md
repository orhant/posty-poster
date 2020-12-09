# Posty Poster

A client-side poster maker using HTML5, CSS3, and Angular. The code is written by using [VSCode](https://github.com/Microsoft/vscode).

## Try It Now

- In English          : [postyposter.com](https://www.postyposter.com)
- In Bahasa Indonesia : [desainmu.com](https://www.desainmu.com)

## Browser Compatibility

This app is targeted to run on Chrome (>= 36), Firefox (>= 45), and Opera (Blink).

The app doesn't work in Safari, IE, and Edge. You can try this [codepen test](http://codepen.io/ezh/pen/RrLZqM) to test why the app can't work on those browsers. Anyone knows the workaround?

## How to Run

This repo only contains the web front-end part of Posty Poster project. It requires data from [posty-poster-data](https://github.com/ezhmd/posty-poster-data) repo, which contains design assets and templates. So, you need to clone both this repo and [posty-poster-data](https://github.com/ezhmd/posty-poster-data) repo.

```
$ mkdir posty-poster-project
$ cd posty-poster-project
$ git clone https://github.com/ezhmd/posty-poster.git
$ git clone https://github.com/ezhmd/posty-poster-data.git
```

If it's done correctly, the folder structure will look like this :

```
posty-poster-project
├── posty-poster            # Front end
└── posty-poster-data       # Data
```

Duplicate `config-sample.ts` inside `posty-poster-project/posty-poster/src` folder, configure it for your envirnoment, and rename it as `config.ts` (overwriting the existing `config.ts`).

Now, you need to build and run HTML server for both of them. This project includes gulp-connect as HTML server. 

The normal setup will run front-end server using port `60571` and data server using port `60572`. You can change these settings at vars section inside `gulpfile.js`. If you modify the data server port, you'll also need to modify `designDataApi` URL in `config.ts` file at the front-end part (`posty-poster/src/config.ts`).

Let's build and run the built in server.

```
$ cd ./posty-poster 
$ npm install
$ gulp build
$ cd ../posty-poster-data
$ npm install
$ gulp build
```

Then, open 2 different terminal tabs to create server. 

```
$ # Terminal 1
$ cd posty-poster-project/posty-poster
$ gulp connect
```
```
$ # Terminal 2
$ cd posty-poster-project/posty-poster-data
$ gulp connect
```
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/orhant/posty-poster/)

Open the site [http://localhost:60571/](http://localhost:60571/).

## Todo

Check [project](https://github.com/ezhmd/posty-poster/projects) page.

## Creator

Ezzat Chamudi

[facebook.com/ezzatchamudi](https://facebook.com/ezzatchamudi)

## Licenses

Posty Poster code released under [AGPLv3](http://www.gnu.org/licenses/agpl-3.0.html). 

Images, logos, docs, and articles released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). 

Libraries, dependencies, and tools used in this project tied with their own licenses respectively.
