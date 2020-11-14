document.addEventListener('DOMContentLoaded', function() {
    // window.addEventListener('load', displayHighlight) ;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendRequest(tab.id, "popup", function handler(response) {
            //    console.log(response);
        }) ;
    }) ;
}) ;
