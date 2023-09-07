import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

function Card(obj) {
  const [input, setInput] = useState({id:obj.id, heading: obj.heading, data: obj.text });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("delete");
    dispatch(removeTodo(obj.id));
  };

  const updatehandler = (e) => {
    e.preventDefault()
    console.log("edit option deactivated");
    dispatch(editTodo(input))
    handleClose()
  };
  return (
    <>
      <div className="max-h-[200px] bg-blue-200 text-black w-[45%] sm:w-[40%] lg:w-[20%] m-4 p-2 text-center rounded-2xl flex  flex-col">
        <div className="bg-blue-400  p-1 text-center rounded-md flex flex-row justify-between">
          <h1 className=" text-center font-semibold uppercase">
            {obj.heading}
          </h1>
          <div className="flex gap-2 justify-end flex-row">
            <button
              className="bg-red-500 m-1 p-1 text-center rounded-lg hidden sm:block"
              onClick={handleDelete}
            >
              delete
            </button>
            <button
              className="bg-green-500 m-1 p-1 text-center rounded-lg hidden sm:block"
              onClick={handleOpen}
            >
              edit
            </button>
          </div>
          <button className="sm:hidden ">:</button>
        </div>
        <div className="text-bold text-xl">{obj.text.substring(0, 50)}</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-8 rounded-xl shadow-2xl ">
          <form  className="" onSubmit={updatehandler}>
            <label htmlFor="" className="font-medium mb-3 block rounded ">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              value={input.heading}
              className="rounded-xl border-blue-400 text-center p-3"
              onChange={(e) => setInput({ ...input, heading: e.target.value })}
            />
            <label htmlFor="" className="font-medium mb-3 block">
              Heading
            </label>
            <input
              className="rounded-xl border-blue-400 text-start p-3 h-16" row={3}
              value={input.data}
              onChange={(e) => setInput({ ...input, data: e.target.value })}
            />
            <br/>
            <div className="flex justify-center items-center m-3 bg-lime-200 rounded-3xl">
            <button className="rounded-xl hover:rounded-2xl" onClick={updatehandler}>Save Changes</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
export default Card;
