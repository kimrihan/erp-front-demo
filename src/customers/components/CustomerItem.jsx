import { useState } from "react";

import Card from "../../shared/components/UIElements/Card.jsx";
import Button from "../../shared/components/FormElements/Button.jsx";
import Modal from "../../shared/components/UIElements/Modal.jsx";
import "./CustomerItem.css";

const CustomerItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openModalHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("DELETEING...");
  };

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
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="삭제"
        footerClass="customer-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              취소
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              삭제
            </Button>
          </>
        }
      >
        <p>
          해당 고객 정보를 삭제하시겠습니까? 삭제 후에는 취소할 수 없습니다.
        </p>
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
            <Button to={`/customers/${props.id}`}>수정</Button>
            <Button danger onClick={showDeleteWarningHandler}>
              삭제
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};
export default CustomerItem;
