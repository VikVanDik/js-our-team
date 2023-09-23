// 1. Creare l'array di oggetti con le informazioni fornite.

const members = [
  {
    nome: 'Wayne',
    cognome: 'Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela',
    cognome: 'Carroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter',
    cognome: 'Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela',
    cognome: 'Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott',
    cognome: 'Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara',
    cognome: 'Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
  
]

const container = document.getElementById('container')
container.innerHTML = ``


// 3. Creare un ciclo che stampi in console tutte le informazioni.
// members.forEach(member => {
//   console.log(member);
// });

// 4. Modificare il ciclo per far stampare le info in pagina, direttamente all'interno delle cards preparate in precedenza.

members.forEach(member => {
  container.innerHTML += `
  <div class="card col-4 m-3" style="width: 18rem;">
      <img src="./img/${member.foto}" class="card-img-top img" alt="">
      <div class="info d-flex justify-content-center ">
        <h5 class="d-flex name">${member.nome}</h5>
        <h5 class="d-flex surname">${member.cognome}</h5>
      </div>
      <div class="d-flex justify-content-center">
        <div class="role">${member.ruolo}</div>
      </div>
    </div>
    `
    console.log(member);
});