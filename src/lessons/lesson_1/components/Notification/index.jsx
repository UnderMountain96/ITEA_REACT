import React, {Component} from 'react';
import './style.scss'


export class Notification extends Component {
    render() {
        return (
            <div className='search-notification'>
                {this.props.msg}
            </div>
        );
    }
}
