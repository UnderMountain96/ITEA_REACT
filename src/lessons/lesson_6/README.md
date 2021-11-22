Задание:
Написать простой ToDo list используя Redux, у которого есть возможность:

- Добавить запись
- Удалить запись
- Отметить запись выполненной

+ бонус. Должно быть 3 роута которые показывают:
    1. Все записи -> /all
    2. Выполненные записи /done
    3. Не выполненные записи /undone

case ADD_TODO:
return({ ...state, data: [ ...state.data, action.payload ]
});

    action.payload => {
        id: 'asdgasggasd', (uniqid)
        done: false,
        title: "blabla"
    }

case REMOVE_TODO:
return({ ...state, data: state.data.filter( item => item.id !== action.payload )
})

    action.payload => 'asdgasggasd'
