	 - Задание 1:
        [+]
            Написать кастомный компонент переключалки, который можно будет ре-использовать в форме.
            По примеру того, что мы разобрали в аудитории.

            Результатом должен стать компонент, который принимает в себя:
            - параметры переключалки отдельными дочерними компонентами
            - активное состояние
            - name
            - action который изменяет стейт родителя
            + бонус, action должен быть универсальным для нескольких переключалок.

            У компонента должна быть проверка PropTypes.
            - name: обязательное поле, строка
            - action: обязательное поле, функция
            - activeState: не обязательное поле, строка
            - children, не обязательное поле, реакт-компонент


            Тест: Добавить 2 элемента Toggler которые будут менять стейт родителя.
                Пусть это будут поля:
                gender > male,female
                layout > left, center, right, baseline

    - Задание 2:
        [+]
            Написать кастомный элемент инпута.
            У компонента нужно сделать возможность настраивать:
            - type
            - placeholder
            - value
            - onChangeHandler
            - name
            - contentLength ( свойство которое показывает счетчик сколько символов набрано в инпут)
            - contentMaxLength ( Максимальное кол-во символов )

            Результатом будет компонент,
                <label>
                    <div>{name}</div>

                    <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handler}
                    />
                </label>

                PropTypes:
                    type: Одно из значений: text, password, number, required
                    placeholder: строка
                    value: строка или любой
                    handler: function, required
                    contentLength: bool
                    contentMaxLength: number
