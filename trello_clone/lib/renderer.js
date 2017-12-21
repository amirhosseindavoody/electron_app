// const electron = require('electron');

// control buttons
const controls = document.querySelector('section.controls');
const newBoardButton = document.querySelector(
                  'section.controls > button#new-board');
const newListButton = document.querySelector(
                  'section.controls > button#new-list');

// boardList area
const boardList = document.querySelector('section.board-list');

// board area
let currentBoard;
let boards = [];
let numberOfLists = [0];
let currentBoardNumber = 0;

createNewBoard();

/**
 * create new board
 */
function createNewBoard() {
  let newBoard = document.createElement('section');
  if (currentBoard) {
    currentBoard.style.display = 'none';
    currentBoard = currentBoard.insertAdjacentElement('beforebegin', newBoard);
  } else {
    currentBoard = controls.insertAdjacentElement('afterend', newBoard);
  }
  boards.push(currentBoard);
  currentBoard.style.border = '2px solid rgb(233,171,88)';
  currentBoard.style.padding = '1em';
  currentBoard.style.margin = '5px';
  currentBoard.style.color = '#d9480f';
  currentBoard.style.display = 'flex';
  currentBoard.style.overflow = 'auto';
  currentBoard.style.minHeight = '220px';

  currentBoardNumber = boards.length - 1;
  numberOfLists.push(0);
  addBoardList();
}

/**
 *  create board-list item
 */
function addBoardList() {
  let newDiv = document.createElement('div');
  newDiv = boardList.appendChild(newDiv);
  newDiv.textContent = boards.length;
  newDiv.style.background = 'rgb(230, 230, 230)';
  newDiv.style.padding = '5px';
  newDiv.style.margin = '5px';
  const boardNumber = currentBoardNumber;
  newDiv.addEventListener('click', function() {
                                        displayBoard(boardNumber);
                                              });
}

/**
 *  create new list
 */
function createNewList() {
  numberOfLists[currentBoardNumber] += 1;
  let newDiv = document.createElement('div');
  newList = currentBoard.appendChild(newDiv);
  newList.textContent = 'list ' + numberOfLists[currentBoardNumber];
  newList.style.background = 'rgb(230, 230, 230)';
  newList.style.padding = '5px';
  newList.style.margin = '5px';
  newList.style.width = '100px';
  newList.style.minWidth = '100px';
  newList.style.minHeight = '200px';
  newList.style.overflow = 'auto';
}

/**
 *  display board
 *  @param {number} boardNumber board index to setup display
 */
function displayBoard(boardNumber) {
  currentBoard.style.display = 'none';
  currentBoard = boards[boardNumber];
  currentBoard.style.display = 'flex';
  currentBoardNumber = boardNumber;
}

newBoardButton.addEventListener('click', createNewBoard);
newListButton.addEventListener('click', createNewList);
