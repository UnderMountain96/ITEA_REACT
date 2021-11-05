import React, {Component} from 'react';
import './style.scss'
import axios from 'axios'
import User from "@lesson_2/components/User";


export class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: ''
        }
    }

    changeInterviewed = (id) => {
        this.setState({
            ...this.state,
            users: this.state.users.map(user =>
                user.id === id ? {...user, interviewed: !user.interviewed} : user
            )
        })
    }

    getUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.setState({
                ...this.state,
                users: response.data.map(user => ({
                        interviewed: false,
                        ...user,

                    })
                )
            })
        } catch (error) {
            const {response, message} = error
            this.setState({
                error: {
                    status: (response && response.status) || 400,
                    msg: message || 'not found'
                }
            })
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const {users, error} = this.state
        const {changeInterviewed} = this
        return (
            <>
                <h1>Task 2</h1>
                <div className='usersList'>
                    {
                        users.map(user =>
                            <User key={user.id} action={changeInterviewed} user={user}/>
                        )
                    }
                </div>
                {error ? <div>{error.msg}</div> : <></>}
            </>
        );
    }
}
