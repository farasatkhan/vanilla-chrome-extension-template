const input = document.getElementById('input');
const submit = document.getElementById('submit');

// Submit Data to Chrome Storage on Click
submit.addEventListener('click', () => {
    const prefs = {
        input_data: input.value
    };
    chrome.runtime.sendMessage({event: 'submit', prefs});
});

// Get Data from Chrome Storage
chrome.storage.local.get(['input_data'], (prefs) => {
    const { input_data } = prefs;

    if (input_data) {
        input.value = input_data;
    }
});

// Get Current Website URL
const getCurrentWebsiteURL = async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const url = new URL(tab.url);
    const origin = url.origin; // "https://tailwindcss.com"
    const hostname = url.hostname; // "tailwindcss.com"
    console.log(hostname);
}