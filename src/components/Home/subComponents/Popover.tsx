// Dependencies
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPhone } from "react-icons/fa6";

// Local Files
import { updatePopoverStatus } from "../../../store/popoverStatusSlice";
import { RootState } from "../../../store/store";

const Popover = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const PopoverButton = useRef<HTMLButtonElement>(document.createElement("button"));
  const popoverStatus = useSelector((state: RootState) => state.popoverStatus.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!popoverStatus) {
      setTimeout(() => {
        PopoverButton.current.click();
        dispatch(updatePopoverStatus(true));
      }, 2000);
    }
  }, []);

  return (
    <>
      <Button onPress={onOpen} className="hidden" ref={PopoverButton}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark text-white sm:hidden">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-[1rem]">
                <Button isIconOnly variant="solid" radius="full" className="text-[1rem]">
                  <FaPhone />
                </Button>
                <p>Get Started</p>
              </ModalHeader>
              <ModalBody>
                <p className="italic text-default-500">
                  " Welcome to Robinhood Solutions, your go-to source for expert support in trading, investment, options
                  trading, crypto, and more. With a trusted history of success and industry-leading experience, we are
                  committed to empowering you on your financial journey. "
                </p>
                <p>
                  <span className="text-[#f31260] font-bold">Call us now</span> to connect with our experts and take the
                  first step toward financial success. Your dedicated support is just a call away – let's achieve
                  excellence together!
                </p>
                <p>
                  <span className="text-[#f31260] font-bold">Phone</span> : +1 (888) 355-9278
                </p>
                <p>
                  <span className="text-[#f31260] font-bold">Email</span> : support@robinhoodinvestnow.com
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  <a href="tel:+1-888-355-9278">Call Us</a>
                </Button>
              </ModalFooter>  
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popover;
