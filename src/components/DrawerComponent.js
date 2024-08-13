import React, { useState } from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { ReservationForm } from './BookingForm';

  function DrawerComponent({isOpen,onClose,onSubmit}) {
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const handleFormSubmitSuccess = () => {
      setConfirmationMessage('Your reservation has been confirmed!');
      // Do not close the drawer here; handle closing in the parent component if needed
    };
  
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Make Your Reservation</DrawerHeader>

          <DrawerBody>
                        {confirmationMessage ? (
                            <p>{confirmationMessage}</p>
                        ) : (
                            <ReservationForm onSubmitSuccess={handleFormSubmitSuccess} />
                        )}
                    </DrawerBody>
          <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  export default DrawerComponent;