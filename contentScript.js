chrome.extension.onRequest.addListener(
    function matchKeyWord(request, sender, sendResponse) {
        // myfunc();
        iframe = document.getElementsByClassName("docs-texteventtarget-iframe")[0]
        // console.log("hareesh",iframe)    
        iframe.contentDocument.body.addEventListener( "keyup", (e)=>{
            textParse(sendResponse);  
        })
        textParse(sendResponse);
});

function textParse(sendResponse, searchText="guy"){
    var googleDocument = utils.getGoogleDocument();
    sendResponse(googleDocument.selectedText);
    let ids = document.getElementsByClassName("kix-wordhtmlgenerator-word-node");
    ids= googleDocument.nodes; 
    let len = searchText.length;
    let node;
    utils.removeHighlight()
    for(let i=0;i<ids.length;i++){
        const cid = ids[i];   
    if(  cid&& cid.text && cid.text.indexOf(searchText)>-1){
        let startIndex = cid.index + cid.text.indexOf(searchText) ;
        startIndex = 0;
        let indices=[]
        while ((index = cid.text.indexOf(searchText, startIndex)) > -1) {
            indices.push(index+cid.index);
            startIndex = index + searchText.length;
         }
        indices.forEach( ind=>{
        const startIndex=ind;
        const endIndex = startIndex+len;
        utils.highlight(startIndex,endIndex,googleDocument);
         })
        
     }
   }

}
