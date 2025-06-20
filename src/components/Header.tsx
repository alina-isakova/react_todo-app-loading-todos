import React from 'react';

type Props = {
  allTodosAreActive: boolean;
};

export const Header: React.FC<Props> = ({ allTodosAreActive }) => (
  <header className="todoapp__header">
    <button
      type="button"
      className={`todoapp__toggle-all  ${allTodosAreActive ? 'active' : ''}`}
      data-cy="ToggleAllButton"
    />

    <form>
      <input
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  </header>
);
