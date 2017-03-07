import React, { PropTypes } from 'react';

class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

MainContainer.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MainContainer;

