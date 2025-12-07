const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("hello from server");

});

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Classic Joke',
            content: 'Why don’t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 2,
            title: 'Programming Humor',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs.'
        },
        {
            id: 3,
            title: 'Dad Joke',
            content: 'I told my wife she should embrace her mistakes. She gave me a hug.'
        },
        {
            id: 4,
            title: 'Tech Joke',
            content: 'How many programmers does it take to change a light bulb? None. It’s a hardware problem.'
        },
        {
            id: 5,
            title: 'Math Joke',
            content: 'Why was the equal sign so humble? Because he knew he wasn’t less than or greater than anyone else.'
        },
        {
            id: 6,
            title: 'Animal Joke',
            content: 'What do you call a fish wearing a bowtie? Sofishticated.'
        },
        {
            id: 7,
            title: 'Work Joke',
            content: 'Why did the developer go broke? Because he used up all his cache.'
        },
        {
            id: 8,
            title: 'Student Joke',
            content: 'Why did the student eat his homework? Because the teacher said it was a piece of cake.'
        },
        {
            id: 9,
            title: 'AI Joke',
            content: 'Why did the robot go on vacation? To recharge its batteries.'
        },
        {
            id: 10,
            title: 'Internet Joke',
            content: 'Why did the computer show up late to work? It had a hard drive.'
        },
        {
            id: 11,
            title: 'Office Joke',
            content: 'I asked the IT guy, “How do you make a motherboard?” He said, “I tell her about my job.”'
        }
    ];

    res.send(jokes);
});


app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});
