document.addEventListener("DOMContentLoaded", ()=>{
    fetchMonster();

    

const inputData={ }
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName=document.getElementById('name').value
    const inputAge=document.getElementById('age').value
    const description=document.getElementById('desc').value
    const button=document.getElementById('submit')

    // posting here
    inputData.name=inputName
    inputData.age=inputAge
    inputData.description=description

    fetch('http://localhost:3000/monsters',{
        method: "POST",
        headers:{
            "content-Type":"application/json",
            accept:"application/json"
        },
        body:JSON.stringify(inputData)
    })
})})


function renderMonster(monster){
    const dataInfo = document.getElementById('monster-container')
    const toyCard = document.createElement('div')
    toyCard.innerHTML = `
    <h2>${monster.name}</h2>
    <p>${monster.age}</p>
    <p>${monster.description}</p>
    `
    dataInfo.appendChild(toyCard)
      
}

let limit = 50;

function fetchMonster(){
    fetch(`http://localhost:3000/monsters/?_limit=${limit}&`)
    .then(res=>res.json())
    .then(monstData=>monstData.forEach((monsters)=>renderMonster(monsters)))

}




function showNextPage() {
    limit += 50

    fetchMonster()
}
