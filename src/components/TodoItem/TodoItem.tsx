import { Todo } from '../../types/todo';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.view}>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label
          className={todo.completed ? styles.completed : ''}
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </label>
        <button className={styles.destroy} onClick={() => onDelete(todo.id)} />
      </div>
    </li>
  );
};
