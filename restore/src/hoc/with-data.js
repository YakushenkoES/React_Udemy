import React from "react";
import ErrorIndicator from '../components/error-indicator';
import Spinner from "../components/spinner";

const withData = (View) => {
    return class extends React.Component {
        state = {
            error: false,
            loading: false,
            data: null
        };
        update(){
            this.setState({error:false, loading:true, data:null});
            try{
                const {getData, id} = this.props;
                const data = getData(id);
                if(data===undefined){
                    throw new Error("Couldn't get data");
                }
                this.setState({error:false, loading:false, data});
            }
            catch(e){
                console.error(e.name ,e.message);
                this.setState({error:true, loading:false, data:null});
            }
            
        }
        componentDidMount(){
            this.update();
        }
        componentDidUpdate(prevProps, prevState){
            if(this.props.id !== prevProps.id || this.props.getData !== prevProps.getData){
                this.update();
            }
        }

        render() {
            const {error, loading, data} = this.state;
            return error? <ErrorIndicator/> : loading? <Spinner/>: <View {...this.props} data={data}/>
        }
    };
};

export default withData;
