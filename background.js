"use strict";

function onError(error) {
    console.error(`Seite ist nicht https://www.moodle.tum.de\nError: ${error}`);
}

function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
        browser.tabs.sendMessage(
            tab.id,
            { nachricht: "ButtonClicked" }
        ).catch(onError);
    }
}

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(onError);
});


