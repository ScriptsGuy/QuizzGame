const myCodeMirror = CodeMirror(document.getElementById('editor'), {
  value: 'function myScript(){return 100;}\n',
  mode: 'javascript',
  lineNumbers: true,
  theme: 'dracula',
  keyMap: 'sublime',
  autoCloseTags: true,
  lineWrapping: true,
  styleActiveLine: true,
  matchBrackets: true
});
