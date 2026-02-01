const questions = [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why should we hire you?",
    "Where do you see yourself in 5 years?"
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const feedbackElement = document.getElementById('feedback');

// Display the first question
showNextQuestion();

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
    } else {
        questionElement.textContent = "Mock interview completed! Great job!";
        document.getElementById('submit-btn').disabled = true;
    }
}

function submitAnswer() {
    const answer = document.getElementById('answer').value.trim();
    if (answer === "") {
        feedbackElement.textContent = "Please type your answer before submitting.";
        return;
    }

    // Simple feedback for now
    feedbackElement.textContent = "Good answer! Here's some feedback: Try to be more concise.";

    // Move to the next question
    currentQuestionIndex++;
    document.getElementById('answer').value = ""; // Clear the textarea
    showNextQuestion();
}
