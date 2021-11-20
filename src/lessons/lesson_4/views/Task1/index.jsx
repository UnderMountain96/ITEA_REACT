import React, {Component} from 'react';
import {Canvas} from "@lesson_4/components";
import country from './country.json';


export class Task1 extends Component {

    render() {
        return (
                <>
                    <h1>Task 1</h1>

                    <Canvas
                            count={3}
                            dynamic={false}
                            lineNames={country}
                            chartName={'COUNTRY RANKING'}
                            labelsTypes={'number'}
                            interval={1000}
                            data={{
                                labels: [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000],
                                datasets: []
                            }}
                    />

                    <Canvas/>
                </>
        );
    }
}
