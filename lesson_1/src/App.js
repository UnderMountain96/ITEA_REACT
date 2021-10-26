import React, {Component} from 'react';
import GuestList from '@views/GuestList';

import guests from '@store/guests.json'

class App extends Component {
    render() {
        return (
            <GuestList guests={guests} />
        );
    }
}

export default App;
