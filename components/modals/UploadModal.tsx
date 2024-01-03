import React, { useState } from 'react';
import Modal from '@ui/Modal';
import { DocumentUpload, CloseCircle } from 'iconsax-react';
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';
import ErrorModal from './ErrorModal';

interface CustomProgressEvent extends ProgressEvent {
  lengthComputable: boolean;
}

function UploadModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isFileUploading, setIsFileUploading] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [cancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null);

  const handleCancel = () => {
    cancelTokenSource;
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      await uploadFile(file);
    }
  };

  const handleProgress = (progressEvent: CustomProgressEvent) => {
    if (progressEvent.lengthComputable) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total!
      );
      setUploadProgress(percentCompleted);
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const cancelToken = axios.CancelToken.source();
      setCancelTokenSource(cancelToken);

      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        // onUploadProgress: handleProgress
      };
      setUploading(true);

      // Use the relative path to the Next.js API route
      await axios.post('/api/upload', formData, config);

      // Handle success, e.g., show a success message
      console.log('File uploaded successfully!');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error uploading file:', error);
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
      handleUpload;
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  const closeModal = () => {
    setErrorMessage(false);
  };
  return (
    <>
      <Modal
        closeOnOverlayClick
        isOpen={isOpen}
        closeModal={onClose}
        isCloseIconPresent={false}
        size="sm"
      >
        <div className="relative flex flex-col items-center justify-center content-center  py-10 px-[50px] max-sm:px-[31.5px] text-center">
          <div
            className="flex flex-col content-center items-center gap-6"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex content-center items-center justify-center bg-[#D9D3EF] w-16 h-16 rounded-full">
              <DocumentUpload size="32" color="#0D0723" variant="Bold" />
            </div>
            <h2 className="text-[38px] font-bold text-[#020202]">
              Drag to upload
            </h2>
            <p className=" text-center text-[16px] font-normal text-[#666666]">
              Dazzle the world, no magic wand needed. Just drag and drop files
              right here. Formats accepted are JPG, PNG, or SVG.
            </p>
            {uploadProgress > 0 && (
              <div className="mt-2">
                <progress value={uploadProgress} max="100">
                  {uploadProgress}%
                </progress>
              </div>
            )}
            <label className="bg-[#4221B0] text-[#fefefe] px-5 py-4 rounded-lg min-w-[165px] cursor-pointer hover:bg-opacity-90 shadow-lg text-[16px]">
              {isFileUploading ? 'cancel' : 'Browse to Upload'}
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/jpeg,image/png,image/svg+xml"
              />
            </label>
          </div>
        </div>
      </Modal>

      {errorMessage && (
        <ErrorModal isOpen={errorMessage} onClose={closeModal} />
      )}
    </>
  );
}

export default UploadModal;

function uploadFile(file: File) {
  throw new Error('Function not implemented.');
}
