const url = require('url');

const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parsedUrl = new url.URL(address);

console.log("parsedUrl: ", parsedUrl);
console.log("parsedUrl.pathname: ", parsedUrl.pathname);
console.log("parsedUrl.search: ", parsedUrl.search);
console.log("parsedUrl.searchParams: ", parsedUrl.searchParams);
console.log("parsedUrl.searchParams.get: ", parsedUrl.searchParams.get('produtos'));
