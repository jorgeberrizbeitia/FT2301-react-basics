console.log("haciendo codigo de react")


const myPageDOM = document.querySelector("#my-page")

const root = ReactDOM.createRoot(myPageDOM); // donde estará el dom virtual

const hobby = "videojuegos"

// const someInfoForVirtualDom = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: "Bienvenidos a mi pagina fea de React"
//     }),
//     React.createElement("p", {
//       children: "Mi nombre es Jorge y me gusta Pokemon"
//     }),
//     React.createElement("p", {
//       children: `Mi Hobby favorito es ${hobby}`
//     }),
//   ]
// })

let num1 = 10;
let num2 = 45;
// JSX => JS + XML
const someInfoForVirtualDom = (
  <div>
    <h1>Bienvenidos a mi pagina fea de React</h1>
    <p>Mi nombre es Jorge y me gusta Pokemon</p>
    <p>Mi Hobby favorito es {hobby}</p>
    <p>La suma es: {num1 + num2}</p>
  </div>
)

// se usa un traductor (transpilador) de JSX a metodos de React
// Babel


// siempre el codigo de JSX será generado por funciones que retornan el JSX

function DisplaySomeInfo() {
  return (
    <div id="card">
      <h1>Bienvenidos a mi pagina fea de React</h1>
      <p>Mi nombre es Jorge y me gusta Pokemon</p>
      <p>Mi Hobby favorito es {hobby}</p>
      <p>La suma es: {num1 + num2}</p>
    </div>
  )
}

// las funciones son llamadas Componentes
// 1. los componentes se escriben con PascalCasing
// 2. se invocan como si lo rederizaramos en HTML => <DisplaySomeInfo />


// root.render( displaySomeInfo() )
// root.render( <DisplaySomeInfo /> )


root.render( <div>
  <DisplaySomeInfo />
  <DisplaySomeInfo />
  <DisplaySomeInfo />
  <DisplaySomeInfo />
</div> )