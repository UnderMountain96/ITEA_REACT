import React, {useEffect, useRef, useState} from "react";
import uniqid                               from "uniqid";
import {useSelector, useDispatch}           from "react-redux";
import {addTodo, addNotification}           from "@lessons/lesson_6/actions";
import {TodoItem, Notification}             from "@lessons/lesson_6/components";
import {SUCCESS, WARNING}                   from "@lessons/lesson_6/constants";
import "./Todo.style.scss";


const Todo = ({selector}) => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const list = useSelector(selector);

    useEffect(() => {
        inputRef.current.focus();
    });

    const titleHandler = (e) => setTitle(e.target.value.trim());

    const onAddTodo = () => {
        if (!title.length) {
            dispatch(addNotification({
                message: "Title empty!",
                status: WARNING
            }));
            return;
        }

        dispatch(addTodo(title));
        dispatch(addNotification({
            message: `Todo created: "${title}"`,
            status: SUCCESS
        }));
        setTitle("");
    };

    return (
        <div className={"todo"}>
            <div className={"todo__header"}>
                <form>
                    <input className={"todo__input"}
                           onSubmit={onAddTodo}
                           ref={inputRef}
                           type="text"
                           value={title}
                           placeholder={"Todo title"}
                           onChange={titleHandler}/>
                    <button className={"todo__btn todo__btn-add"} onClick={onAddTodo}>
                        Add
                    </button>
                </form>
            </div>
            {
                list.length ?
                    list.map((item, index) => (<TodoItem key={uniqid()} item={item} index={index + 1}/>)) :
                    <div className={"todo__helper"}>No todos</div>
            }
            <Notification/>
        </div>
    );
};

export default Todo;
