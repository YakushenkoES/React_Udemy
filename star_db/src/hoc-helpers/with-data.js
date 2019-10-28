import React, { Component } from "react";
import Spinner from "../components/spinner";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null
        };

        updateData() {
            this.props.getData().then((data) => {
                this.setState({ data });
            });
        }
        componentDidMount() {
            this.updateData();
        }
        componentDidUpdate(prevProps, prevState) {
            if (this.props.getData !== prevProps.getData) {
                this.updateData();
            }
        }

        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />;
            }
            return <View {...this.props} data={data} />;
        }
    };
};

export default withData;
