import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
} from '@chakra-ui/react'
import toast from 'react-hot-toast';

const TicketForm = ({ show }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

const handleSubmit = e => {
    e.preventDefault()

    const ticketData = {
        user_name: e.target.user_name.value,
        user_email: e.target.user_email.value,
        name: show?.show?.name,
        type: show?.show?.type,
        language: show?.show?.language
    }

    const localData = localStorage.getItem('tickets')
    const parseData = JSON.parse(localData);
    if(parseData){
         localStorage.setItem('tickets', JSON.stringify([...parseData,ticketData]))
         toast.success('Ticket Booked!')
    }else{
        localStorage.setItem('tickets', JSON.stringify([ticketData]));
        toast.success('Ticket Booked!')
    }
}

    return (
        <>
            <Button onClick={onOpen}>Book Ticket</Button>

            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent margin={'30px 10px 0px 10px'}>
                    <ModalHeader>Ticket Booking Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 mb-5'>
                            <Input defaultValue={`Show's Name: ${show?.show?.name}`} readOnly />
                            <div className='flex gap-2'>
                                <Input defaultValue={`Type: ${show?.show?.type}`} readOnly />
                                <Input defaultValue={`Language: ${show?.show?.language}`} readOnly />
                            </div>
                            <Input required name='user_name' placeholder='Your Name' />
                            <Input required name='user_email' placeholder='Your Email' />
                            <Button type='submit' colorScheme='blue' mr={3}>
                                Confirm
                            </Button>
                        </form>

                    </ModalBody>
                </ModalContent>
            </Modal>
            
        </>
    )
};

export default TicketForm;