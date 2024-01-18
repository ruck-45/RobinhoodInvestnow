// Dependencies
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPhone } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

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
      }, 500);
    }
  }, []);

  return (
    <>
      <Button onPress={onOpen} className="hidden" ref={PopoverButton}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark text-white sm:hidden">
        <a href="tel:+1 (888) 891-7176">
          <ModalContent className="h-[99%]">
            <ModalHeader className="flex items-center gap-[1rem]">
              <Button isIconOnly variant="solid" radius="full" className="text-[1rem]">
                <FaPhone />
              </Button>
              <p>Contact Us</p>
            </ModalHeader>
            <ModalBody className="flex flex-col justify-center items-center">
              <h1 className="text-[3rem] leading-[2.2rem] font-bold font-['kalina'] text-center mb-[2rem]">
                Robinhood
              </h1>
              <p className="font-bold mb-[2rem] text-[1.5rem]">More Info</p>
              <BiSolidPhoneCall className="text-[5rem] " />
              <p className="text-[#F5A524] font-bold text-[2rem]">Call us now</p>
              <p className="text-center">
                to speak live with a person on our team. we're committed to be there for our customers.
              </p>
            </ModalBody>
            <MdAddIcCall className="text-[3rem] mx-auto bg-[#006FEE] w-full p-[0.5rem]" />
          </ModalContent>
        </a>
      </Modal>
    </>
  );
};

export default Popover;
