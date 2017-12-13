const electron = require('electron')
const ipc = electron.ipcRenderer // to enable communication between renderer and main process
const shell = electron.shell
const marked = require('marked') // render markdown documents

const remote = electron.remote
const mainProcess = remote.require('./main')
const clipboard = remote.clipboard

const $ = selector => document.querySelector(selector) // a function named $ that gets a selector as parameter and returns the element
const $markdownView = $('.raw-markdown')
const $htmlView = $('.rendered-html')
const $newBoardButton = $('#new-board')
const $newListButton = $('#new-list')
const $newCardButton = $('#new-card')

const $content = $('#content')

let currentFile = null

$newBoardButton.addEventListener('click', () => {
  console.log("create new board!!")
  var node = $content.createElement("This is new.");
  // $content.appendChild(node);

})


// ipc.on('file-opened', (event, file, content) => {
//   currentFile = file
//
//   $showInFileSystemButton.disabled = false
//   $openInDefaultEditorButton.disabled = false
//
//   $markdownView.value = content
//   renderMarkdownToHtml(content)
// })
//
// $markdownView.addEventListener('keyup', (event) => {
//   const content = event.target.value
//   renderMarkdownToHtml(content)
// })
//
// function renderMarkdownToHtml (markdown) {
//   const html = marked(markdown)
//   $htmlView.innerHTML = html
// }
//
// $openFileButton.addEventListener('click', () => {
//   mainProcess.openFile()
// })
//
// $copyHtmlButton.addEventListener('click', () => {
//   const html = $htmlView.innerHTML
//   clipboard.writeText(html)
// })
//
// $saveFileButton.addEventListener('click', () => {
//   const mdContent = $markdownView.value
//   mainProcess.saveFile(mdContent)
// })
//
// $saveAsFileButton.addEventListener('click', () => {
//   const html = $htmlView.innerHTML
//   mainProcess.saveAsFile(html)
// })
//
// ipc.on('save-file', (event) => {
//   const html = $htmlView.innerHTML
//   mainProcess.saveFile(html)
// })
//
// // save content of markdown file
// ipc.on('save-md-file', (event) => {
//   const mdContent = $markdownView.value
//   mainProcess.saveFile(mdContent)
// })
//
// // open links in external web browser
// document.body.addEventListener('click', (event) => {
//   if (event.target.matches('a[href^="http"]')) {
//     event.preventDefault()
//     shell.openExternal(event.target.href)
//   }
// })
//
// $showInFileSystemButton.addEventListener('click', () => {
//   shell.showItemInFolder(currentFile)
// })
//
// $openInDefaultEditorButton.addEventListener('click', () => {
//   shell.openItem(currentFile)
// })
//
// // define a drag and drop behavior
// document.ondragover = document.ondrop = (ev) => {
//   ev.preventDefault()
// }
//
// document.body.ondrop = (ev) => {
//   $markdownView.value += ev.dataTransfer.files[0].path
//   ev.preventDefault()
// }
