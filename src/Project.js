import React, { Component } from 'react';

class Project extends Component {
    render() {
        console.log(this.props.match);
        return (
            <div>

                haha {this.props.match.params.id}
            </div>
        );
    }
}

export default Project;
