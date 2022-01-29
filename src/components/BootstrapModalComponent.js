import React from "react";
import { Modal } from "react-bootstrap";


function BootstrapModalComponent(props) {

    function handleModal() {
        props.handleModal();
    }

    return (
        <div>
            <Modal show={props.showModal}>

                <Modal.Header closeButton onClick={() => handleModal()}>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{props.body}</Modal.Body>

                <Modal.Footer>
                    {props.footer}
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default BootstrapModalComponent;