import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import './App.css'


function AppUI() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <>
            <div className='Container-AppUI'>
                <TodoCounter />
                <TodoSearch />
                <TodoContext.Consumer>
                    {({
                        loading,
                        error,
                        searchedTodos,
                        completeTodo,
                        deleteTodo
                    }) => (
                        <div className='Container-App-List'>
                        <TodoList>
                            {loading && <><TodosLoading /><TodosLoading /><TodosLoading /></>}
                            {error && <TodosError />}
                            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)} />))}
                        </TodoList>
                        </div>
                    )}

                </TodoContext.Consumer>
                <a href="https://www.linkedin.com/in/samuel-sanabria/" target="_blank">Samuel Sanabria</a>

                <CreateTodoButton setOpenModal={setOpenModal} />

                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </div>
        </>);
}
export { AppUI };