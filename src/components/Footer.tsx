import React from 'react';
import { Todo } from '../types/Todo';
import { Status } from '../types/Status';

type Props = {
  activeTodos: Todo[];
  filterStatus: Status;
  setFilterStatus: (filterStatus: Status) => void;
  completedTodos: Todo[];
};

export const Footer: React.FC<Props> = ({
  activeTodos,
  filterStatus,
  setFilterStatus,
  completedTodos,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {`${activeTodos.length} items left`}
    </span>

    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${filterStatus === 'all' ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={e => {
          e.preventDefault();
          setFilterStatus(Status.All);
        }}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${filterStatus === 'active' ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={e => {
          e.preventDefault();
          setFilterStatus(Status.Active);
        }}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${filterStatus === 'completed' ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={e => {
          e.preventDefault();
          setFilterStatus(Status.Completed);
        }}
      >
        Completed
      </a>
    </nav>

    <button
      disabled={completedTodos.length === 0}
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
    >
      Clear completed
    </button>
  </footer>
);
