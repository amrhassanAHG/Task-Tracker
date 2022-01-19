import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder===true?'reminder':''}`}
         onDoubleClick={(e)=>onToggle(task.id)}>
        <h3>
            {task.text}{' '}
            <FaTimes 
                style={{color:'red', cursor:'pointer'}}
                onClick={(e) => onDelete(task.id)}
            />
        </h3>
        <p>{task.day}</p>
    </div>
  );
};

export default Task;
