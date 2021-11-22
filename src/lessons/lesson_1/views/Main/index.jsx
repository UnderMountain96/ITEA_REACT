import React, {Component} from "react";
import {GuestList} from "@lessons/lesson_1/components";

import guests from "@lessons/lesson_1/store/guests.json";

export class Main extends Component {
    render() {
        return (
                <>
                    <h1>Lesson 1</h1>
                    <GuestList guests={guests}/>
                </>
        );
    }
}
