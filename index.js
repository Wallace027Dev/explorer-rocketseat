function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./src/images/icon=${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./src/images/icon=${player2}.svg" alt="Bandeira da ${player2}">
  </li>
`
}

function createCard(date, day, games) {
  return `
  <div class="card">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
            `
}

document.querySelector("#app").innerHTML = `
        <main id="cards">
          ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia") + createGame("brazil", "16:00", "serbia") + createGame("brazil", "16:00", "serbia"))}
          ${createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland") + createGame("brazil", "16:00", "serbia") + createGame("brazil", "16:00", "serbia"))}
          ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon") + createGame("brazil", "16:00", "serbia") + createGame("brazil", "16:00", "serbia"))}
        </main>
`