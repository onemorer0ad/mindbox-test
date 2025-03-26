import { FilterType } from '../../types/todo';
import styles from './TodoFilter.module.scss';

interface TodoFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  itemsLeft: number;
  onClearCompleted: () => void;
}

export const TodoFilter = ({
  activeFilter,
  onFilterChange,
  itemsLeft,
  onClearCompleted,
}: TodoFilterProps) => {
  return (
    <div className={styles.footer}>
      <span className={styles.count}>
        {itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
      </span>

      <ul className={styles.filters}>
        <li>
          <button
            className={activeFilter === 'all' ? styles.selected : ''}
            onClick={() => onFilterChange('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={activeFilter === 'active' ? styles.selected : ''}
            onClick={() => onFilterChange('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={activeFilter === 'completed' ? styles.selected : ''}
            onClick={() => onFilterChange('completed')}
          >
            Completed
          </button>
        </li>
      </ul>

      <button className={styles.clearCompleted} onClick={onClearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
