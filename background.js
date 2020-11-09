"use strict";

chrome.browserAction.onClicked.addListener(() => {
    try {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { nachricht: "ButtonClicked" }, function (response) {
                if (chrome.runtime.lastError) {
                    // Something went wrong
                    console.warn("Seite ist nicht https://www.moodle.tum.de\nError: " + chrome.runtime.lastError.message);
                }
            });
        });
    } catch (error) {
        onError(error);
    }

});