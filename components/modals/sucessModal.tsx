import React from 'react';
import Modal from '../ui/Modal';
import Image from 'next/image';
import Button from '@ui/Button';

function SucessModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <Modal
        closeOnOverlayClick
        isOpen={isOpen}
        closeModal={onClose}
        isCloseIconPresent={false}
        size="sm"
        className="items-center justify-center flex pl-[20px] w-[450px] h-[400px]"
      >
        <div className="items-center justify-center flex flex-col w-[323px] h-[244px]">
          <div className="flex content-center items-center justify-center bg-[#D9D3EF] w-[80px] h-[80px] rounded-full">
            <Image src="/teacher/like.svg" alt="like" width={48} height={48} />
          </div>
          <h2 className="text-[20px] leading-[24px] font-medium mt-[32px]">
            Curriculum Created successfully
          </h2>
          <Button
            className="w-[154px] h-[56px] p-[16px] mt-[32px]"
            href="/teachers-dashboard"
          >
            Go Home
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default SucessModal;
