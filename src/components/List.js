function List(props) {

    function renderList() {
        return props.items.map((item, index) => {
            return <li
                className="list-group-item list-group-item-action task-item"
                key={index}
            >

                <div className="d-flex justify-content-between align-items-center">

                    <div>
                        <input className="form-check-input me-2" type="checkbox" />
                        {item}
                    </div>


                    <div className="btn-group" role="group" aria-label="Basic example">

                        <button
                            type="button"
                            className="btn btn-secondary shadow two-button"
                            data-bs-toggle="tooltip"
                            title="Edit"
                            onClick={() => props.onEdit(item, index)}
                        >
                            <i className="bi bi-pencil"></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary shadow two-button"
                            data-bs-toggle="tooltip"
                            title="Delete"
                            onClick={() => props.onDelete(index)}
                        >
                            <i className="bi bi-trash"></i>
                        </button>

                    </div>

                </div>

            </li>
        })
    }

    return (
        <div>
            <ul className="list-group mx-auto task-box" style={{ maxWidth: "800px" }}>
                {renderList()}
            </ul>
        </div>
    )
}

export default List;