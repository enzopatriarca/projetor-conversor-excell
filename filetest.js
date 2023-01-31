const fs = require("fs")

fs.readFile("./usuarios.json",{encoding:'utf-8'},(erro,dados) =>{
    if (erro) {
        console.log("Erro ao ler o arq")
    }else{
        var conteudo = JSON.parse(dados)

        conteudo.categoria = "bacharel"

        fs.writeFile("./usuarios.json", JSON.stringify(conteudo),(erro)=>{
            if (erro) {
                console.log("error")
            }
        })

        console.log(conteudo)

    }
})

// fs.writeFile("./usuarios.json","novo conteudo do arquivo",(erro)=>{
//     if (erro) {
//         console.log("erro")
//     }else{

//     }
// })

