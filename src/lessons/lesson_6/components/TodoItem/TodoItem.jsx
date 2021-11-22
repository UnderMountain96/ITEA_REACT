import React                                     from "uniqid";
import {useDispatch}                             from "react-redux";
import {addNotification, toggleTodo, removeTodo} from "@lessons/lesson_6/actions";
import classNames                                from "classnames";
import "./TodoItem.scss";


export const TodoItem = ({item, index}) => {
    const dispatch = useDispatch();

    const onToggleTodo = (id) => () => dispatch(toggleTodo(id));
    const onRemoveTodo = (id) => () => {
        dispatch(removeTodo(id));
        dispatch(addNotification({
            message: `Todo remove: "${item.title}"`,
            status: "success"
        }));
    };

    return (
        <div key={item.id} className={"todoItem"}>
            <div
                onClick={onToggleTodo(item.id)}
                className={classNames("todoItem__text", {"todoItem__text-done": item.status})}>
                {index}. {item.title}
            </div>
            <button className={"todo__btn todo__btn-delete"} onClick={onRemoveTodo(item.id)}> Delete</button>
        </div>
    );
};
