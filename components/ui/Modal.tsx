import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseCircle } from 'iconsax-react';
import { ModalProps } from '../../@types';
import Button from './Button';

const sizes: Record<'xxl' | 'xl' | 'lg' | 'md' | 'sm', string> = {
  xxl: 'max-w-[980px]',
  xl: 'max-w-[700px]',
  lg: 'max-w-xl',
  md: 'max-w-lg',
  sm: 'max-w-[480px]'
};
function Modal({
  isOpen,
  closeModal,
  closeOnOverlayClick = false,
  className,
  children,
  title,
  size = 'sm',
  isCloseIconPresent = true,
  closeBtnClass
}: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={closeOnOverlayClick ? closeModal : () => null}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm"
              onClick={closeModal}
            />
          </Transition.Child>
          <div className="fixed inset-0  overflow-y-auto sidebar-scroll">
            <div className="flex min-h-full items-center md:items-center md:pt-14 justify-center text-center sidebar-scroll">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`relative w-full ${sizes[size]} bg-white and font-nunito font-light transform overflow-hidden text-sm rounded-[12px] text-left align-middle shadow-xl transition-all`}
                >
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      {title}
                    </Dialog.Title>
                  )}
                  {/* Close button */}
                  {isCloseIconPresent ? (
                    <div className="absolute right-3 top-2">
                      <Button
                        onClick={closeModal}
                        className="bg-transparent hover:bg-transparent"
                      >
                        <CloseCircle size="24" color="#555555" />
                      </Button>
                    </div>
                  ) : null}

                  <div className={className}>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default Modal;
