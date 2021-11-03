import React, {Component} from 'react';
import {Guest, Notification, Header} from '@lesson_1/components';


export class GuestList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guests: props.guests.map(guest => ({
                ...guest,
                isArrived: false
            })),
            msg: ''
        }
    }

    onSearch = (val) => {
        this.setState({
            guests:
                (val)
                ? this._customFilter(this.props.guests, val)
                : this.props.guests,
            msg:
                (this._customFilter(this.props.guests, val).length)
                ? ''
                : 'ничего не найдено'
        })
    }

    _customFilter = (obj, val) => {
        return obj.filter(guest => JSON.stringify(guest).toUpperCase().indexOf(val.toUpperCase()) > -1)
    }

    onArrived = (_id) => {
        const guest = this.state.guests.filter(guest => guest._id === _id)[0]
        guest.isArrived = !guest.isArrived
        this.setState({
            guests: this.state.guests
        })
    }

    render() {
        const guests = this.state.guests
        const msg = this.state.msg
        return (
            <div className='container'>
                <Header onSearch={this.onSearch}/>
                <Notification msg={msg}/>
                {guests.map(guest => <Guest onArrived={this.onArrived} key={guest._id} guest={guest}/>)}
            </div>
        );
    }
}
