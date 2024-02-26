chrome.action.onClicked.addListener((tab) => {
    alert("hewe1");
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.id},
            function: () => {
                let title = document.title;
                let url = window.location.href;
                alert("here");
                console.log("Title: " + title);
                console.log("URL: " + url);
            }
        }
    );
});