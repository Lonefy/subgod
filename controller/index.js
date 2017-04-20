module.exports = function*() {
    yield this.render('index.jade', {
        data: {
            text: 'This is SUBGOD'
        },
    });
}