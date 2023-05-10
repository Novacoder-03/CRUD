export const Task =(props) =>{
 

        return (
            <div 
            style={{backgroundColor : props.completed ? "green" : "white"}}>
               <h1>{props.taskname}</h1>
               <button onClick={() => props.setcomplete(props.id)}> completed</button>
               <button onClick={() => props.del(props.id)}> X</button>
            </div>
           ); 
    
}