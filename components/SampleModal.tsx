import Modal from '@ui/Modal';

function SampleModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="sm"
      title="Edtech Team"
    >
      <p>Setup for the main Job</p>
    </Modal>
  );
}
export default SampleModal;
