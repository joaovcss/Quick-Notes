# QuickNotes 📝

Um aplicativo simples de **anotações no terminal**, desenvolvido em **Node.js**, que permite criar, listar, ler e excluir notas salvas em arquivos `.txt` dentro da pasta `notes`.

---

## 🚀 Funcionalidades

- Criar uma anotação e salvar como arquivo `.txt`.
- Listar todas as anotações já criadas.
- Ler o conteúdo de uma anotação existente.
- Excluir anotações pelo nome.
- Interface totalmente interativa via terminal.

---

## 📦 Requisitos

- **Node.js** versão 14.x ou superior.

---

## ⚙️ Como usar

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/QuickNotes.git
cd QuickNotes
```

### 2. Executar o programa

```bash
node index.js
```

### 3. Navegar pelo menu interativo

Quando executar, verá o seguinte menu no terminal:

```
Escolha uma opção: (S/n) 

  1. Criar anotação
  2. Listar anotações
  3. Ler anotação
  4. Excluir Anotação
  5. Sair
```

### Exemplos de uso

- **Criar anotação:** escolha a opção `1`, escreva sua nota e dê um nome para o arquivo.
- **Listar anotações:** escolha `2` para ver todos os arquivos dentro de `notes/`.
- **Ler anotação:** escolha `3` e digite o nome da nota (sem `.txt`) para exibir seu conteúdo.
- **Excluir anotação:** escolha `4` e digite o nome da nota (sem `.txt`) para removê-la.
- **Sair:** escolha `5` para encerrar o programa.

---

## 📌 Estrutura do projeto

```
QuickNotes/
│── index.js        # Código principal da aplicação
│── notes/          # Diretório onde ficam as anotações
│── README.md       # Documentação do projeto
```

---

## 🛠️ Possíveis melhorias

- Implementar opção de editar anotações existentes.
- Adicionar suporte a pesquisa por palavras-chave.
- Permitir exportar/importar notas em JSON.

---
