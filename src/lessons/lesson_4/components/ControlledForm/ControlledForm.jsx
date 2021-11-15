import React, {useState, useEffect}  from "react";
import {Input, Toggler, TogglerItem} from "@lesson_3/components";
import {Button}                      from "@lesson_2/components";
import {v4 as uuidv4}                         from "uuid";
import {Selector, SelectorItem} from "@lesson_4/components";


export const ControlledForm = () => {
    const [stack, setStack] = useState([])
    const [selector, setSelector] = useState(
            {
                id: uuidv4(),
                activeState: 'select city',
                name: 'City',
                items: ['select city', 'Kyiv', 'Lviv', 'Harkiv', 'Odesa']
            }
    )
    const [toggler, setToggler] = useState(
            {
                id: uuidv4(),
                activeState: '',
                name: 'Type',
                items: ['Free', 'Standard', 'Premium'],
            }
    )
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setSelector({...selector, activeState: 'select city'})
        setToggler({...toggler, activeState: ''})
        setUsername('')
        setEmail('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stack])

    const handlerUsername = (e) => setUsername(e.target.value.trim());

    const handlerEmail = (e) => {
        setEmail(e.target.value.trim())
    };

    const handlerSelector = ({value}) => _ => {
        setSelector({
            ...selector,
            activeState: value
        })
    }

    const handlerToggler = ({value}) => _ => {
        setToggler({
            ...toggler,
            activeState: value,
        })
    }

    const result = (data) => {
        return (
                <div key={data.id}>
                    <hr/>
                    <p>Username: <b>{data.username}</b></p>
                    <p>Email: <b>{data.email}</b></p>
                    <p>City: <b>{data.city}</b></p>
                    <p>Type: <b>{data.type}</b></p>
                </div>
        )
    }

    const onSubmit = () => {
        let error = ''
        const data = {
            id: uuidv4(),
            username: username,
            email: email,
            city: selector.activeState,
            type: toggler.activeState,
        }

        if (!data.username) {
            error += 'username not validate\n';
        }
        if (!validateEmail(data.email)) {
            error += 'email not validate\n';
        }
        if (data.city === 'select city') {
            error += 'city not validate\n';
        }
        if (!data.type) {
            error += 'type not validate\n';
        }

        if (!error) return setStack([data, ...stack])
        alert(error)
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }

    return (
            <div>
                <Input type={"text"} placeholder={"UserName"} handler={handlerUsername} value={username}/>
                <Input type={"text"} placeholder={"Email"} handler={handlerEmail} value={email}/>

                <Selector {...selector} action={handlerSelector}>
                    {selector.items.map(item => <SelectorItem key={uuidv4()} value={item}/>)}
                </Selector>

                <Toggler {...toggler} action={handlerToggler}>
                    {toggler.items.map(item => <TogglerItem key={uuidv4()} value={item}/>)}
                </Toggler>

                <Button text={'Enter'} style={{width: '-webkit-fill-available'}} action={onSubmit}/>

                <div>
                    {stack.map(data => result(data))}
                </div>
            </div>
    );
};
