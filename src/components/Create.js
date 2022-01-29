import { useRef } from "react";

function Create(props) {

    const task = useRef();

    function onSubmit(event) {
        event.preventDefault();
        props.onSubmit(task.current.value);
        if (task !== "") {
            task.current.value = "";
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3  mx-auto" style={{ maxWidth: "800px" }}>

                <input ref={task} type="text" className="form-control input-task" placeholder="Write task" required />

                <button className="btn btn-secondary add-button" type="submit" id="button-addon2">
                    <i className="bi bi-plus-lg"></i>
                </button>

            </div>
        </form>
    )
}

export default Create;