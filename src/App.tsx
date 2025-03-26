import { TodoInput } from './components/TodoInput/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
import { useTodos } from './hooks/useTodos';
import styles from './App.module.scss';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    filter,
    setFilter,
    activeTodoCount,
  } = useTodos();

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.todoApp}>
        <TodoInput onAddTodo={addTodo} />

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <TodoFilter
          activeFilter={filter}
          onFilterChange={setFilter}
          itemsLeft={activeTodoCount}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
