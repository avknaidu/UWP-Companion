function isStackOverflow(url) {
    if (typeof url == 'string') {
        let match = url.match(/^http.?:\/\/(?:cdn\.)?(stackoverflow\.[a-z]{0,4})/);
        return (match && match[1]) ? true : false;
    } else console.error('Incorrect data recieved while checking domain');
}

function hasQuestion(url) {
    if (typeof url == 'string') {
        let match = url.match(/\/questions\/([\w\d]+)\/?/);
        return (match !== null ? match[1] : null);
    } else console.error('Incorrect data recieved while checking for Questions');
}

export default {
    isStackOverflow,
    hasQuestion
}


// "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"