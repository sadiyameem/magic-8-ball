const answers = [
    'Yes',
    'Yes - definitely',
    'It is certain',
    'Most likely',
    'Without a doubt',
    'Signs point to yes',
    'Outlook good',
    'You may rely on it',
    'It is decidedly so',
    'Ask again later',
    'Better not to tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Reply hazy, try again',
    'My reply is no',
    "Don't count on it",
    'Outlook not so good',
    'Very doubtful',
    'My sources say no'
];

const ballElement = document.getElementById('ball');
const answerElement = document.getElementById('answer');

const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
};

const rotateBall = () => {
    let rotation = Math.floor(Math.random() * 1880) + 90;
    const rotateInterval = setInterval(() => {
        rotation += Math.floor(Math.random() * 10) + 30;
        ballElement.style.transform = `rotate(${rotation}deg)`;
        if (rotation >= 360) {
            clearInterval(rotateInterval);
            setTimeout(() => {
                showAnswer();
                ballElement.style.transform = 'rotate(0deg)';
            }, 1000);
        }
    }, 10);
};

const showAnswer = () => {
    const answer = generateAnswer();
    answerElement.textContent = answer;
};

ballElement.addEventListener('click', () => {
    answerElement.textContent = "";
    rotateBall();
});

const questionInput = document.querySelector(".questionBox input");

const question = questionInput.value.trim();
let answer;
if (question === "") {
    answer = "I can't tell with the given information.";
} else {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answer = answers[randomIndex];
}