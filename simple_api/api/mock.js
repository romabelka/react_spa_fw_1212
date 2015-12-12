var articles = [
    {
        id: 1,
        title: 'Some interesting title',
        text: 'lorem ipsum',
        timeStamp: new Date(),
        user: 'roma'
    },
    {
        id: 2,
        title: 'Wrong title',
        text: 'no-one cares wat\'s written here',
        timeStamp: new Date(),
        user: 'roma'
    },
    {
        id: 3,
        title: 'Hello aliens!',
        text: 'Truth is out there',
        timeStamp: new Date(),
        user: 'vasya'
    }
];

var comments = [
    {
        id: 1,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        aid: 2
    },
    {
        id: 2,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'roma',
        aid: 1
    },
    {
        id: 3,
        text: 'first comment',
        timeStamp: new Date(),
        aid: 1,
        user: 'roma'
    }
];

module.exports = {
    comments: comments,
    articles: articles
};