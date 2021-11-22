import React, {Component} from "react";
import search_img from "@lessons/lesson_1/assets/search.svg";
import "./style.scss";


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
