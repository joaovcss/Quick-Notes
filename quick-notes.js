const fs = require("node:fs")
const readline = require("node:readline")

function saveNote(note,fileName){
    try {
        const directoryExists = fs.existsSync("./notes")
        if(!directoryExists){
            fs.mkdirSync("./notes")
        } 
        fs.writeFileSync(`./notes/${fileName}.txt`, note, "utf-8")
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

function createNote(rl){
    try {
        rl.question("Escreva sua anotação: \n", (note) => {
            rl.question("Qual o assunto da anotação? \n", (fileName) => {
                saveNote(note, fileName)
                console.log("\n Anotação salva com sucesso!")
                userInteraction(rl)
            })

        })
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

function listNotes(rl){
    const noteDir = "./notes"

    if(!fs.existsSync(noteDir)){
        console.log('Nenhuma anotação existente')
        return userInteraction(rl)
    }

    fs.readdir(noteDir,(err, files) => {
        if(err){
            console.log(`Erro ao ler diretório: ${err.message}`)
            return userInteraction(rl)
        }

        if(files.length === 0){
            console.log('Nenhuma anotação existente')
            return userInteraction(rl)
        }
        console.log("----------------------------------------------------------")
        console.log("Suas anotações")
        files.forEach((file) => {
                console.log(` - ${file}`)
        })
        console.log("----------------------------------------------------------")
        userInteraction(rl)
    })
}

function deleteNote(rl){
    rl.question("Qual anotação você deseja excluir ?(digite sem .txt)", (answer) => {
            const noteExist = fs.existsSync(`./notes/${answer}.txt`)
            if(!noteExist){
                console.log("Anotação não existente")
                return userInteraction(rl)
            } else {
                fs.unlink(`./notes/${answer}.txt`,(err) => {
                    if(err){
                        console.log(`Não foi possível remover esta anotação. ${err.message}`)
                        return
                    }
                    console.log(`Anotação ${answer} removida com sucesso`)
                    userInteraction(rl)
                })
        }
    })
}

function readNote(rl) {
    rl.question("Qual anotação você deseja ler? (digite sem .txt)\n", (answer) => {
        const filePath = `./notes/${answer}.txt`

        if (!fs.existsSync(filePath)) {
            console.log("⚠ Anotação não existente")
            return userInteraction(rl)
        }
        
        try {
            const content = fs.readFileSync(filePath, "utf-8")
            console.log("----------------------------------------------------------")
            console.log(`Conteúdo da anotação '${answer}':\n`)
            console.log(content)
            console.log("----------------------------------------------------------")
        } catch (err) {
            console.log(`Erro ao ler a anotação: ${err.message}`)
        }
        userInteraction(rl)
    })
}

async function userInteraction(rl){
    rl.question(`Escolha uma opção: (S/n) \n
        1. Criar anotação \n
        2. Listar anotações \n
        3. Ler anotação \n
        4. Excluir Anotação
        5. Sair`, (answer) => {
        switch(answer){
            case "1":
                createNote(rl)
                break

            case "2":
                listNotes(rl)
                break

            case "3":
                readNote(rl)
                break

            case "4":
                deleteNote(rl)
                break

            case "5":
                console.log("Saindo...")
                rl.close()
                break  

            default:
                console.log("Opção inválida, digite novamente.")
                userInteraction(rl)
        }
    })
}

function run(){
    const rl = readline.createInterface({ input:process.stdin, output:process.stdout })
    console.log("----------------------------------------------------------")
    console.log("Seja bem-vindo ao QuickNotes")
    console.log("----------------------------------------------------------")
    userInteraction(rl)
}

run()