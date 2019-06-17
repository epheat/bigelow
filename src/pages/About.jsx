import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import Jack from 'Assets/jack.gif';
import BigelowBoy from '../components/BigelowBoy';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boys: [
                { name: "Evan", image: Jack, description: "I like to code." },
                { name: "Scott", image: Jack, description: "I have a dog." },
                { name: "John", image: Jack, description: "I broke the dryer." },
                { name: "Blake", image: Jack, description: "I live in the basement." },
            ],
            error: false,
            errorMessage: null,
        }
    }

    componentDidMount() {
        axios.get(BIGELOW_SERVICE_URL + DO_BIGELOW_PATH).then( response => {
            // merge the array of words from API response with the local array of bigelow boys
            // key this merge on the 'name' property, which should exist in both arrays
            this.setState( prevState => ({
                boys: mergeByName(prevState.boys, response.data.words)
            }));
        }).catch( err => {
            console.log(err);
            this.setState({
                error: true,
                errorMessage: err.message,
            })
        })
    }

    render() {
        return (
            <div className="about-page">
                <div className={classNames('error-banner', { show: this.state.error })}>
                    { this.state.errorMessage }
                </div>
                <div className="page-content">
                    <h1>About us</h1>
                    <div className="bigelow-boys">
                        {
                            this.state.boys.map(boy => (
                                <BigelowBoy
                                    key={boy.name}
                                    { ...boy }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key
const mergeByName = (arr1, arr2) => {
    return arr1.map( item1 => ({
        ...arr2.find( item2 => ( item1.name == item2.name ) && item2 ),
        ...item1
    }));
}

export default About;