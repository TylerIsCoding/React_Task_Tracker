import { FaTimes } from "react-icons/fa";
import moment from "moment";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => {
                onToggle(task.id);
            }}
        >
            <h3 key={task.id}>
                {task.text}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{moment(task.day).format("dddd, MMMM Do, YYYY - h:mm a")}</p>
        </div>
    );
};

export default Task;
