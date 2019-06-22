import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import Jack from 'Assets/jack.gif';
import BigelowBoy from '../components/BigelowBoy';
import Baboosh from '../components/Baboosh';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boys: [
                { name: "Evan", image: Jack, description: "I drink milk.", color: { red: 100, green: 190, blue: 200 } },
                { name: "Scott", image: Jack, description: "I have a dog.", color: { red: 240, green: 165, blue: 30 } },
                { name: "John", image: Jack, description: "I broke the dryer.", color: { red: 69, green: 69*1.5, blue: 420/2 } },
                { name: "Blake", image: Jack, description: "I live in the basement.", color: { red: 250, green: 235, blue: 20 }  },
            ],
            error: false,
            errorMessage: null,
        }
    }

    componentDidMount() {
        axios.get(BIGELOW_SERVICE_URL + DO_BIGELOW_PATH).then( response => {
            if (response.data.errorType == 'Error') {
                console.log(response.data);
                this.setState({
                    error: true,
                    errorMessage: response.data.errorMessage,
                })    
            } else {
                // merge the array of words from API response with the local array of bigelow boys
                // key this merge on the 'name' property, which should exist in both arrays
                this.setState( prevState => ({
                    boys: mergeByName(prevState.boys, response.data.words)
                }));
            }
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
                    <h1>A<Baboosh />out us</h1>
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
