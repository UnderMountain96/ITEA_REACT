import React, {Component} from "react";
import LoaderImg from "@lesson_2/components/LoaderImg";


export class Task3 extends Component {

    render() {
        return (
            <>
                <h1>Task 3</h1>
                <LoaderImg title='Lord of the Rings' src='http://cdn.paperhi.com/1920x1080/20130315/fantasy%20the%20lord%20of%20the%20rings%20maps%20middleearth%201920x1080%20wallpaper_www.paperhi.com_45.jpg'/>
                <LoaderImg title='Error image' src='http://fake.url/error.png'/>
            </>
        );
    }
}
