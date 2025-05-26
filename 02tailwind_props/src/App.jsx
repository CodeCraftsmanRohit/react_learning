import Card from './components/Card'
import './App.css'

function App() {

let myObj={
  username:"hitesh",
  age:21
}

let newArr=[1,2,3]

  return (
    <>
     <h1 className="bg-red-300 text-black p-4 rounded-xl">
      Hello world!
    </h1>
    <Card username="chaiaurcode" />
    <Card username="rohit" />
    </>
  )
}

export default App
