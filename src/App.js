import Modal from "./components/Modal";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React, bitch!" />
      <Todo text="Learn Next, bitch!" />
      <Todo text="Learn Javascript, bitch!" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
