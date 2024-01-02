// Dependencies
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPhone } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

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
        <a href="tel:+1-888-355-9278">
          <ModalContent className="h-[99%]">
                <ModalHeader className="flex items-center gap-[1rem]">
                  <Button isIconOnly variant="solid" radius="full" className="text-[1rem]">
                    <FaPhone />
                  </Button>
                  <p>Contact Us</p>
                </ModalHeader>
                <ModalBody className="flex flex-col justify-center items-center">
                  <BiSolidPhoneCall  className="text-[20rem]"/>
                  <p className="text-[#f31260] font-bold">Call us now</p>
                  <p className="text-center">to speak live with a person on our team. we're committed to be there for our customers.</p>
                </ModalBody>
          </ModalContent>
        </a>
      </Modal>
    </>
  );
};

export default Popover;
