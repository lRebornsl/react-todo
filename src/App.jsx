import Header from "./components/Header"
import TodosLogic from "./components/TodosLogic"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Header />
      <TodosLogic />
    </div>
  )
}

export default App
