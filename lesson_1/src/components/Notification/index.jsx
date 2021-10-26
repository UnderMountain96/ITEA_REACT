import React, {Component} from 'react';
import './style.scss'


class Notification extends Component {
    render() {
        return (
            <div className='notification'>
                {this.props.msg}
            </div>
        );
    }
}

export default Notification;