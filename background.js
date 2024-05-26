chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if (tab.url?.startsWith("chrome://")) return undefined;
    const { status } = changeInfo;
    if (status === 'complete') {
        chrome.scripting.executeScript({
            files: ['script.js'],
            target: {tabId: tab.id}
        });
    }
});

chrome.runtime.onInstalled.addListener((response) => {
    const { reason } = response;
});

chrome.runtime.onMessage.addListener((data) => {
    const {event, prefs} = data;

    switch (event) {
        case 'submit':
            setChromeCookies(prefs);
            break;
    }
});

const setChromeCookies = (data) => {
    chrome.storage.local.set(data);
};

