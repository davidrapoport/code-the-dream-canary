import './App.css';

const todoList = [{id: 1, title:"Better title"},{id: 2, title:"Another better title"},{id: 3, title:"13"}];
function App() {
  console.log(todoList)
  return <div>
          <h1> Todo List </h1>
          <ul>
            {renderListItems(todoList)}
          </ul>
          </div>
}

function renderListItems(listObjects) {
  return listObjects.map(item => <li key={item.id}>{item.title}</li>)
}

export default App;
