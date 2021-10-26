import React, {Component} from 'react';
import classNames from 'classnames'
import './style.scss';


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    changeHandler = (e) => {
        this.setState({search: e.target.value})
        this.props.onSearch(e.target.value)
    }

    render() {
        const search = this.state.search
        return (
            <div className={classNames('search', {'hide': this.props.hide})}>
                <input onChange={this.changeHandler} value={search} placeholder='Введите имя гостя для поиска'
                       type="text"/>
            </div>
        );
    }
}

export default Search;