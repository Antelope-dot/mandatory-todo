import { useState } from "react";

//Properties of NewTodoForm
//Can also be Type instead of interface for more complicated props
interface Props {
    onSubmit: (tile: string) => void;
}

//Component and the props
export const NewTodoForm = ({onSubmit}: Props) => {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newItem === "") return
        onSubmit(newItem)

        setNewItem("");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
                </div>
                <button className="btn">Add</button>
            </form>
        </>
    )
};