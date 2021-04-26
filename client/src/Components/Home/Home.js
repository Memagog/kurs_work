import React,{useState} from 'react';


const Home = (props) => {
    const [state, setState] = useState({
        title: "",
        message:"",
        author:"",
        tags: [],
        selectField: "",
        likeCounter: 0,
        
    });
    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        
        // axios.post('')

    }    
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title: 
                        <input type="text" name="title" value={state.title} onChange={handleChange}/>   
                    </label>
                    <label>
                        <p>Author: theme</p>
                        <input type="text" name="author" value={state.author} onChange={handleChange}/>
                    </label>
                    <labe>
                        
                    </labe>
                    <button type="submit">Add</button>
                </form>
                 <h1>{state.title}</h1> 
                 <h1>{state.author}</h1> 
            </div>       
        );
    
   

}
export default Home;