const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener('change', save)
//serve para agrupar códigos e serem usadas a qualquer momento
function add() {
 const today = new Date().toLocaleDateString('pt-br').slice(0,-5);
 const dayExists = nlwSetup.dayExists(today)

 if(dayExists){
      alert("Dia já incluso ❌ ")
      return
 }
 alert('Adicionado com sucesso ✅')



 nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// Serve para quando ela recomeçar em outro lugar a saída sera um objeto V  vazio
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) ||        {}
nlwSetup.setData(data)
nlwSetup.load();
