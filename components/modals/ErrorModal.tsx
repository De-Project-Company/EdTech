import React from 'react';
import Modal from '@ui/Modal';
import { FaXmark } from 'react-icons/fa6';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      //   await uploadFile(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const acceptedMimeType = [
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/jpg'
    ];
    if (acceptedMimeType.includes(file.type)) {
      //   uploadFile(file);
    } else {
      //   setIsFileTypeModalOpen(true);
    }
  };
  return (
    <>
      <Modal
        closeOnOverlayClick
        isOpen={isOpen}
        closeModal={onClose}
        isCloseIconPresent={false}
        size="sm"
        className="bg-[#feeceb]"
      >
        <div className="relative flex flex-col items-center justify-center content-center  py-10 px-[50px] max-sm:px-[31.5px] text-center">
          <div
            className="flex flex-col items-center justify-center content-center text-center w-full"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex flex-col content-center items-center gap-6 max-w-[327px]">
              <div className="flex content-center items-center justify-center bg-[#f04438] w-16 h-16 rounded-full">
                <FaXmark color="#fefefe" size={32} />
              </div>
              <h2 className="text-[38px] font-bold text-[#020202]">
                Wrong Format
              </h2>
              <p className=" text-center text-[24px] font-normal text-[#000000]">
                Formats accepted are JPG, PNG, or SVG.
              </p>
              <label className="bg-[#4221B0] text-[#fefefe] px-5 py-4 rounded-lg cursor-pointer hover:bg-opacity-90 shadow-lg">
                Reset Upload
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/svg+xml"
                />
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ErrorModal;
