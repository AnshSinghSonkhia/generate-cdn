# generate-cdn
Generate CDN links from GitHub & unpkg (open-source) URLs

<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>
<code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>


# Installation

```shell
npm i generate-cdn
```

# Usage

```js
const { githubCDN, unpkgCDN } = require('generate-cdn');
```

### Generate CDN Link from `GitHub` URL

```js
const githubUrl = 'https://github.com/AnshSinghSonkhia/thousand-colors/blob/main/index.js';
const cdnLink = githubCDN(githubUrl);
console.log(cdnLink);
```

### Generate CDN Link from `unpkg` URL

```js
const unpkgUrl = 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';
const cdnLink2 = unpkgCDN(unpkgUrl);
console.log(cdnLink2);
```