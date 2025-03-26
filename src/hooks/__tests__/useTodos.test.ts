import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useTodos } from '../useTodos';

describe('useTodos', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Test todo');
    expect(result.current.todos[0].completed).toBe(false);
  });

  it('should toggle todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
    });
    expect(result.current.todos[0].completed).toBe(true);
  });

  it('should filter todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Todo 1');
    });

    act(() => {
      result.current.addTodo('Todo 2');
    });

    expect(result.current.todos).toHaveLength(2);

    const firstTodoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(firstTodoId);
    });

    expect(result.current.todos).toHaveLength(2);

    act(() => {
      result.current.setFilter('completed');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].completed).toBe(true);

    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].completed).toBe(false);
  });

  it('should delete todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(todoId);
    });
    expect(result.current.todos).toHaveLength(0);
  });

  it('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Todo 1');
    });

    act(() => {
      result.current.addTodo('Todo 2');
    });

    expect(result.current.todos).toHaveLength(2);

    const firstTodoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(firstTodoId);
    });

    expect(result.current.todos[0].completed).toBe(true);

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].completed).toBe(false);
  });
});
