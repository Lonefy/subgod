module.exports = function*() {
    yield this.render('index.jade', {
        data: {
            text: 'THIS IS SUBGOD'
        },
    });
}