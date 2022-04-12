export class Main {

    get uploadBtn() { return $('.target input')}
    get downloadBtn() { return $('.after a')}
    get downloadBtns() { return $$('.after a')}

    async showUploadBtn() {
        await browser.execute(function() {
            var styles = `
            .target input { 
                width: 50px !important;
                height: 50px !important;
                opacity: 100% !important;
                top: 0 !important;
            }
            `
            var styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
            }, )
    } 

    async hideUploadBtn() {
        await browser.execute(function() {
            var styles = `
            .target input { 
                width: 50px !important;
                height: 50px !important;
                opacity: 100% !important;
                top: 0 !important;
            }
            `
            var styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
            }, )
    }

}

export const main = new Main() 