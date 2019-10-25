import React from 'react';
const withChildFunction=(Wrapped, fn)=>{
    return class extends React.Component{
        render(){
            return (
                <Wrapped {...this.props}>
                    {fn}
                </Wrapped>
            )
        }
    }
}

export default withChildFunction;