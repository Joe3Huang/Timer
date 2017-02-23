class SaveFile
{
    doSave(text)
    {
        let outText = text;
        let filename = "Report.txt";
        this.saveTextAsFile(outText, filename);
    }
    saveTextAsFile(textToWrite, fileNameToSaveAs)
    {
        let textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'});
        let downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        let destroyClickedElement = function (event) 
        {
            document.body.removeChild(event.target);
        };
        downloadLink.href = URL.createObjectURL(textFileAsBlob);
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
}