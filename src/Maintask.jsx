import React, { useEffect, useState } from "react";
import './Maintask.css'
import toast from "react-hot-toast";



const Maintask = () => {
  const [taskinput, settaskinput] = useState('');
  const tasksl = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState([...tasksl]);

  const handletaskssub = (e) => {
    e.preventDefault();
    if (taskinput.length !== 0) {
      let istask = tasks.filter((ele) => ele.task === taskinput);
      if (istask.length === 0) {
        setTasks([...tasks, { task: taskinput, done: false }]);
        settaskinput("")
        toast.success('Task Been Added Get To work', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      } else {
        toast.error('This Task already exists', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
    }
  };

  const handleTaskDone = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, done: true };
      }
      return task;
    });
    setTasks(newTasks);
    toast.success('Task marked as done!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };


  useEffect(() => {
    let hi = tasks.filter((ele) => { if (ele.done == false) return ele })
    console.log(hi);
    localStorage.setItem('tasks', JSON.stringify(hi))
  }, [tasks])
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-anchor="#example-anchor"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="w-5/12" style={{ color: "#cccccc" }}>
        <div className="flex-col relative" style={{ border: "0.px solid #cccccc", height: "85vh", borderRadius: "15px", padding: "15px 20px" }}>
          <h1 style={{ textAlign: 'center' }}>Tasks</h1>
          <div className="tasklist">
            {tasks.length > 0 ? tasks.map((ele, i) => (
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-delay={(i + 1) * 100}
                data-aos-duration="1000"
                key={i} className="flex justify-between">
                {ele.done ? <s>{ele.task}</s> : ele.task}
                <span>{ele.done ? <i className="fa-solid fa-check text-white mx-1"> </i> : " "}
                  <button className="donebtn" onClick={() => handleTaskDone(i)}>Done </button>
                </span>
              </div>
            ))
              : <h1 className="text-center text-2xl mt-5 ">No Task Added</h1>
            }
          </div>
          <div className="flex-col absolute bottom-0 left-0 right-0  w-8/12 m-auto">
            <form className="flex m-auto justify-between">
              <input type="search" className="taskAddinput" value={taskinput} onChange={(e) => settaskinput(e.target.value)} placeholder="Type Here" />
              <button type="submit" className="taskAddbtn" onClick={handletaskssub}>Add Task</button>
            </form>
            
            <h1 className="text-slate-500 mt-2 text-sm">*Refresh Page To Remove Done Task</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintask;
