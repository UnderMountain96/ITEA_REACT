import React, {Component} from "react";
import classNames from "classnames";
import "./style.scss";


export class Guest extends Component {
    clickHandler = (e) => {
        this.props.onArrived(e.target.dataset._id);
    }

    render() {
        const {guest} = this.props;
        return (
            <div className='guest'>
                <div className='guest__info'>
                    Гость <b>{guest.name}</b> работает в компании <b>&quot;{guest.company}&quot;.</b><br/>
                    Его котнакты:<br/>
                    <b>{guest.phone};</b><br/>
                    <b>{guest.address}</b>
                </div>
                <div className='guest__btn'>
                    <button
                        data-_id={guest._id}
                        onClick={this.clickHandler}
                        className={classNames("btn", {"active": guest.isArrived})}
                        disabled={guest.isArrived}
                    >
                        Прибыл
                    </button>
                </div>
            </div>
        );
    }
}
