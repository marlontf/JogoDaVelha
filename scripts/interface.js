document.addEventListener('DOMContentLoaded', () => {

   let squares = document.querySelectorAll('.square')
   let resetButton = document.querySelector('#resetButton')
   let result = document.querySelector('#result')

   squares.forEach((square) => {
      square.addEventListener('click', handleClick)
   })

   resetButton.addEventListener('click', resetGame)

})

function handleClick(event) {

   let square = event.target
   let position = square.id

   if (handleMove(position)) {

      if (!velha) {

         winSequence.forEach((element) => {
            document.getElementById(element).style.backgroundColor = "green"
         })

         let vencedor = (playerTime == 0) ? "&#x1F6E1" : "&#x2694"

         result.innerHTML = `O jogo acabou - O vencedor foi ${vencedor}`
      } else {
         result.innerHTML = `Xiii, deu &#x1F475`

      }
   }
   updateSquare(position)

}

function updateSquare(position) {
   let square = document.getElementById(position.toString())
   let symbol = board[position]
   if (symbol) {
      square.innerHTML = `<div class='${symbol}'></div>`
   }
}

function resetGame() {
   let squaresToClean = document.querySelectorAll('.square')

   board.fill('')
   winSequence.fill('')

   playerTime = 0
   gameOver = false
   velha = false

   squaresToClean.forEach((square) => {
      square.style.backgroundColor = "#b7e4c7"
      square.innerHTML = ""
   })

   result.innerHTML = ""

}