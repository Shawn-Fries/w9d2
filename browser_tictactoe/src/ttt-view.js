class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    let board = <ul class="board">
      <li id="0,0"></li>
      <li id="0,1"></li>
      <li id="0,2"></li>
      <br/>
      <li id="1,0"></li>
      <li id="1,1"></li>
      <li id="1,2"></li>
      <br/>
      <li id="2,0"></li>
      <li id="2,1"></li>
      <li id="2,2"></li>
    </ul>
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
