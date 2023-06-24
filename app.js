// Assignment 1 | COMP1073 Client-Side JavaScript
// Selecting buttons and elements from the HTML document
const nounButton = document.querySelector(".nounes"); // Button for selecting nouns
const verbButton = document.querySelector(".verbs"); // Button for selecting verbs
const adjectiveButton = document.querySelector(".adjectives"); // Button for selecting adjectives
const anotherNounButton = document.querySelector(".another-nounes"); // Button for selecting another nouns
const placeButton = document.querySelector(".places"); // Button for selecting places

const surpriseButton = document.querySelector(".surprise"); // Button for generating a surprise sentence
const resetButton = document.querySelector(".reset"); // Button for resetting the selected words

const nounWords = document.querySelectorAll(".column:nth-child(1) > div"); // List of noun words
const verbWords = document.querySelectorAll(".column:nth-child(2) > div"); // List of verb words
const adjectiveWords = document.querySelectorAll(".column:nth-child(3) > div"); // List of adjective words
const anotherNounWords = document.querySelectorAll(".column:nth-child(4) > div"); // List of another noun words
const placeWords = document.querySelectorAll(".column:nth-child(5) > div"); // List of place words

let selectedNoun = ""; // Currently selected noun
let selectedVerb = ""; // Currently selected verb
let selectedAdjective = ""; // Currently selected adjective
let selectedAnotherNoun = ""; // Currently selected another noun
let selectedPlace = ""; // Currently selected place

let finalSentence = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace; // Final sentence to be spoken

const textToSpeakPTag = document.querySelector("#textToSpeak"); // Element to display the generated sentence

// Function to get a random index from an array
function getRandomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

// Function to get a random word from an array
function getRandomWord(array) {
	return array[getRandomIndex(array)].textContent;
}

// // Function to speak a word using the Speech Synthesis API
const synth = window.speechSynthesis;
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
	}
// Event handler for the noun button
function handleNounButton() {
	selectedNoun = getRandomWord(nounWords);
	textToSpeakPTag.textContent = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	finalSentence = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	speakNow(selectedNoun);
}

// Event handler for the verb button
function handleVerbButton() {
	selectedVerb = getRandomWord(verbWords);
	textToSpeakPTag.textContent = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	finalSentence = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	speakNow(selectedVerb);
}

// Event handler for the adjective button
function handleAdjectiveButton() {
	selectedAdjective = getRandomWord(adjectiveWords);
	textToSpeakPTag.textContent = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	finalSentence = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	speakNow(selectedAdjective);
}

// Event handler for the another noun button
function handleAnotherNounButton() {
	selectedAnotherNoun = getRandomWord(anotherNounWords);
	textToSpeakPTag.textContent = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	finalSentence = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	speakNow(selectedAnotherNoun);
}

// Event handler for the place button
function handlePlaceButton() {
	selectedPlace = getRandomWord(placeWords);
	textToSpeakPTag.textContent = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	finalSentence = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;
	speakNow(selectedPlace);
}

// Event handler for the surprise button
function handleSurpriseButton() {
	selectedNoun = getRandomWord(nounWords);
	selectedVerb = getRandomWord(verbWords);
	selectedAdjective = getRandomWord(adjectiveWords);
	selectedAnotherNoun = getRandomWord(anotherNounWords);
	selectedPlace = getRandomWord(placeWords);

	textToSpeakPTag.textContent = selectedNoun + " " + selectedVerb + " " + selectedAdjective + " " + selectedAnotherNoun + " " + selectedPlace;

	const fullTextToSpeak = textToSpeakPTag.textContent;
	speakNow(fullTextToSpeak);
}

// Event handler for the reset button
function handleResetButton() {
	selectedNoun = "";
	selectedVerb = "";
	selectedAdjective = "";
	selectedAnotherNoun = "";
	selectedPlace = "";

	textToSpeakPTag.textContent = "";
}

// Adding event listeners to the buttons
nounButton.addEventListener("click", handleNounButton);
verbButton.addEventListener("click", handleVerbButton);
adjectiveButton.addEventListener("click", handleAdjectiveButton);
anotherNounButton.addEventListener("click", handleAnotherNounButton);
placeButton.addEventListener("click", handlePlaceButton);
surpriseButton.addEventListener("click", handleSurpriseButton);
resetButton.addEventListener("click", handleResetButton);

const speakButton = document.querySelector('.speak'); // Speak button for speaking the final generated sentence

// Event listener for the speak button
speakButton.addEventListener('click', () => {
	speakNow(finalSentence);
});
