import React, {Component} from "react";
import "./style.scss";
import Search from "./Search";
import SearchButton from "./SearchButton";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideSearch: false
        };
    }

    onHideSearch = () => {
        this.setState({"hideSearch": !this.state.hideSearch});
    }

    render() {
        return (
            <>
                <div className='header-block'>
                    <h1>Список гостей</h1>
                    <s>Список жертв</s>
                    <SearchButton onHideSearch={this.onHideSearch}/>
                </div>
                <Search hide={this.state.hideSearch} onSearch={this.props.onSearch}/>
            </>
        );
    }
}
