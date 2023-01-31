const pdf = require("html-pdf")

class PDFWriter{
    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename,(error) =>{
            
        })
    }
}

module.exports = PDFWriter