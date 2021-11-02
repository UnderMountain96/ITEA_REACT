import React, {Component} from 'react';
import classNames from 'classnames'
import './style.scss';


class Search extends Component {
    changeHandler = (e) => {
        const {value} = e.target;
        this.setState({search: value})
        this.props.onSearch(value)
    }

    render() {
        const {search} = this.props
        return (
                <div className={classNames('search', {'hide': this.props.hide})}>
                    <input onChange={this.changeHandler} value={search} placeholder='Введите имя гостя для поиска'
                           type="text"/>
                </div>
        );
    }
}

export default Search;
