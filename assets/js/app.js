"use strict";

const card = document.querySelector('.card');

const verseText = document.getElementById('verse-text');
const verseCite = document.getElementById('verse-citing');

const copyVerseBtn = document.getElementById('copy-btn');
const tweetBtn = document.getElementById('tweet-btn');
const newVerseBtn = document.getElementById('new-verse-btn');

const getRandomVerse = () => {
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
}

const displayVerse = (verse) => {
  verseText.textContent = verse.text;
  verseCite.textContent = verse.verse;
}

const copyVerse = () => {
  const textToCopy = verseText.textContent + " - " + verseCite.textContent;
  const textarea = document.createElement('textarea');

  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}

const tweetVerse = () => {
  const URL = `https://twitter.com/intent/tweet?text=${verseText.textContent} - ${verseCite.textContent}`;
  window.open(URL, '_blank');
}

const animateVerseContainer = () => {
  const animate = 'animate__fadeInDown';
  card.classList.remove(animate);


  card.classList.add('animate__animated', animate);

  newVerseBtn.disabled = true;
  tweetBtn.disabled = true;
  copyVerseBtn.disabled = true;

  card.addEventListener('animationend', function () {

    card.classList.remove(animate);

    newVerseBtn.disabled = false;
    tweetBtn.disabled = false;
    copyVerseBtn.disabled = false;
  }, { once: true });
}

const generateVerse = () => {
  const randomVerse = getRandomVerse();
  displayVerse(randomVerse);
  animateVerseContainer();
}

newVerseBtn.addEventListener('click', generateVerse);
tweetBtn.addEventListener('click', tweetVerse);
copyVerseBtn.addEventListener('click', copyVerse);

const initializePage = () => {
  generateVerse();
};

window.addEventListener('load', initializePage);
