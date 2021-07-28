import React, {useState, useEffect, useCallback, useMemo} from 'react';


const App = ()=>{

    const [qty, setQty] = useState(1);
    const [vis, setVis] = useState(true);

    const value = qty;
    if(vis){
        return (
            <>
                <button onClick={()=>setQty(_q=>_q+1)}>+</button>
                <button onClick={()=>setQty(_q=>_q-1)}>-</button>
                <button onClick={()=>setVis(false)}>Hide</button>
                {/* <HookCounter value={qty}/> */}
                {/* <ClassCounter value={qty}/> */}
                {/* <Notification/> */}
                <PlanetInfo id={value}/>
            </>
            );
    }
    else{
        return (
            <button onClick={()=>setVis(true)}>Show</button>
        );
    }

}





const useRequest = (request) =>{

    const initialState = useMemo(()=>{
        return {
         data:null,
         loading:true,
         error:null
        };
}, []);

    const[dataState, setDataState] = useState(initialState);

    useEffect(

        ()=>{
            setDataState(
                initialState
            );
            let cancelled = false;
            request()
                .then(data => !cancelled && setDataState({
                            data,
                            loading: false,
                            error:null
                        })
                )
                .catch(error=>!cancelled && setDataState(
                    {
                        data:null,
                        loading: false,
                        error
                    }
                ));

            return () => cancelled=true;
        }
    ,[request, initialState]);

    return dataState;
}

const getPlanet = id =>{
    return fetch(`https://swapi.dev/api/planets/${id}`)
            .then(res=>res.json());
};

const usePlanetInfo = (id)=>{
    const request = useCallback(()=>getPlanet(id),[id]);
    return useRequest(request);
}

const PlanetInfo = ({id})=>{
    
    const {data, loading, error} = usePlanetInfo(id);;
    if(error)
        return <p>error</p>
    if(loading)
        return <p>loading</p>

    return(
        <div>{id} - {data && data.name}</div>
    )
}



const HookCounter = ({value})=>{

    // Analog component did mount
   useEffect(()=>{
       console.log("use effect - mount");
       return ()=>console.log("unmount");
   },[]);

    // Analog component did update
    useEffect(
        ()=>console.log("update value"),[value]
    );

    // Analog component did Unmount
    useEffect(
        ()=>{
            return ()=>console.log("unmount 2");
        },[]
    )

    return (
        <p>{value}</p>
    );
}
class ClassCounter extends React.Component{
    componentDidMount(){
        console.log("class: didmount");
    }
    componentDidUpdate(){
        console.log("class: didupdate");
    }
    componentWillUnmount(){
        console.log("class: willunmount");
    }

    render(){
        return(
            <p>{this.props.value}</p>
            );
    }
}

const Notification = ()=>{
    const [vis, setVis] = useState(true);

    useEffect(
        ()=>{
            const toID = setTimeout( ()=>setVis(false), 1500);
            return () => clearTimeout(toID);

        } , []
    )

    return (
        <div>
            {vis && <h1>Hello</h1>}
        </div>
        
    );
   
}

export default App;