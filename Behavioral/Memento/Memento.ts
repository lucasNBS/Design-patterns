// Classe do editor de texto
class Editor {
  private stateHistory: Memento[]
  private textArea: TextArea

  constructor() {
    this.stateHistory = []
    this.textArea = new TextArea()
  }

  public write(text: string): void {
    this.textArea.setText(text)
    this.stateHistory.push(this.textArea.takeSnapshot())
    console.log(this.textArea.getText())
  }

  public undo(): void {
    this.stateHistory.pop()
    this.textArea.restore(this.stateHistory[this.stateHistory.length - 1])
    console.log(this.textArea.getText())
  }
}

// Classe do campo de texto
class TextArea {
  private text: string

  public getText(): string {
    return this.text
  }

  public setText(text: string) {
    this.text = text
  }

  public takeSnapshot() {
    return new Memento(this.text)
  }

  public restore(memento: Memento) {
    this.text = memento.getSavedText()
  }
}

// Classe do memento
class Memento {
  private text: string

  constructor(text: string) {
    this.text = text
  }

  public getSavedText(): string {
    return this.text
  }
}

// Função padrão do código
function mementoMain() {
  const editor = new Editor()

  editor.write("Hello")
  editor.write("Hello World")
  editor.undo()
}
mementoMain()