import { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./CustomerItem.css";

const CustomerItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.name}
        contentClass="customer-item__modal-content"
        footerClass="customer-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>CLOSE</Button>}
      >
        <div className="modal-container">
          <h2>THE MODAL! </h2>
        </div>
      </Modal>
      <li className="customer-item">
        <Card className="customer-item__content">
          <div className="customer-item__info">
            <h2>{props.name}</h2>
            <h3>{props.identification_number}</h3>
            <h3>{props.phone}</h3>
            <h3>{props.company}</h3>
          </div>
          <div className="customer-item__actions">
            <Button inverse onClick={openModalHandler}>
              보기
            </Button>
            <Button to={`/cusotmers/${props.id}`}>수정</Button>
            <Button danger>삭제</Button>
          </div>
        </Card>
      </li>
    </>
  );
};
export default CustomerItem;
