import React, {Component} from "react";
import "./style.scss";
import search_img from "@lesson_1/assets/search.svg";


class SearchButton extends Component {
    render() {
        return (
            <button onClick={this.props.onHideSearch} type='button' className='search-btn'>
                <img src={search_img} alt=""/>
            </button>
        );
    }
}

export default SearchButton;
