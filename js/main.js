// init speech synth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

// Init the voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
  // getVoices is an async operation

  // loop through voices & create option for each one
  voices.forEach(voice => {
    // create an option element
    const option = document.createElement('option');
    // fill the option with the voice and launguage
    option.textContent = voice.name + '(' + voice.lang + ')';

    // set needed attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}
