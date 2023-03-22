import { useState } from "react";
import { myTaskList } from '../utils/tasks';

export const Task = (props) => {
    const { name, state } = props;
    const [isChecked, setIsChecked] = useState(
        new Array(myTaskList.length).fill(false)
    );
    const [isCompleted, setIsCompleted] = useState(state);

    const handleOnChange = () => {
        if (isChecked) {
            setIsCompleted("completed");    
        }else{
            setIsCompleted("to do");
        }
        setIsChecked(!isChecked);
    };
    
    if (isCompleted == "completed") {
        return(
            <div>
                <input type= "checkbox" checked={isChecked} onChange={handleOnChange} /><del>{name}</del>
            </div>
            
        );
    }else if(isCompleted == "to do"){
        return(
            <div>
                <input type= "checkbox" checked={!isChecked} onChange={handleOnChange} />{name}
            </div>
        );
    }else{
        return(
            <del>Undefined Task!<br /></del>
        );
    }
}