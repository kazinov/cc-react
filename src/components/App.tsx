import * as React from 'react';
import {connect} from 'react-redux';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(App);
