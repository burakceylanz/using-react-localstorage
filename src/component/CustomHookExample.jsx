import useLocalStorage from "./useLocalStorage";
import "../style/index.scss";

function CustomHookExample() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();
    setTask('')

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div>
          <label className="task">Task</label>
          <input
            className="input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
      
      {tasks.map((addtask) => (
        <h1 key={task.date} className="strg">{addtask.task}</h1>
      ))}
    </>
  );
}

export default CustomHookExample;
