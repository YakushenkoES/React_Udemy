import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        };

        updateData() {
            this.setState({ loading: true, error: false, data: null });
            this.props
                .getData()
                .then((data) => {
                    this.setState({ data, loading: false, error: false });
                })
                .catch(() => {
                    this.setState({ loading: false, error: true });
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
            const { data, loading, error } = this.state;
            return error ? <ErrorIndicator /> : loading ? <Spinner /> : <View {...this.props} data={data} />;
        }
    };
};

export default withData;
