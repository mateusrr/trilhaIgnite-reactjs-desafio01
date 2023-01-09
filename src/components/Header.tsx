import Logo from '../assets/Logo.svg';
import styles from './Header.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {FormEvent, useState, ChangeEvent } from 'react';

interface Props {
    onNewTask: (taskTitle: string) => void;
}

export function Header({onNewTask} : Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onNewTask(title);
        setTitle("");   
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    
    return (
        <header className={styles.header}>
            <img src={Logo} />

            <form className={styles.taskForm} onSubmit={handleSubmit}>
                <input placeholder='Nova tarefa' onChange={onChangeTitle}/>
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                    </button>
            </form>
        </header>
    )
}