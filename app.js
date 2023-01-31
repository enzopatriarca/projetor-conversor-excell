var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var PDFWriter = require("./PDFWriter")

var Leitor = new Reader()
var escritor = new Writer()

var dados = Leitor.Read("./usuarios.csv")

async function main() {
    var dados = await Leitor.Read("./usuarios.csv")
    // console.log(dados)
    var dados_processados = Processor.Process(dados)
    var usuarios = new Table(dados_processados)
    // console.log(usuarios.Columncount)

    var html = await HtmlParser.Parse(usuarios)

    // console.log(html)

    escritor.Write(Date.now()+".html",html)
    PDFWriter.WritePDF(Date.now()+".pdf",html)
}

main()