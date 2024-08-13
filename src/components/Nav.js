import React, {useRef} from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    ThemeProvider,
    extendTheme,
    Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { menuTheme } from './menutheme';
import { ReservationForm} from './BookingForm';

const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
})

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
    
    const menuItems = [
      { label: 'Home', dropdownContent: [] },
      { label: 'About', dropdownContent: [] },
      { label: 'Menu', dropdownContent: [] },
      { label: 'Order Online', dropdownContent: ['Lunch', 'Dinner'] },
      { label: 'Login', dropdownContent: ['Sign In', 'Register'] }
    ];
  
    return (
      <nav className="nav">
        <Flex className="nav-content" gap="1rem" p="1rem" align="center">
          {menuItems.map((item, index) => (
            <ThemeProvider theme={theme} key={index}>
            <Menu key={index}>
              <MenuButton as={Button} rightIcon={item.dropdownContent.length > 0 ? <ChevronDownIcon /> : undefined}>
                {item.label}
              </MenuButton>
              {item.dropdownContent.length > 0 && (
                <MenuList>
                  {item.dropdownContent.map((content, idx) => (
                    <MenuItem key={idx}>{content}</MenuItem>
                  ))}
                </MenuList>
              )}
            </Menu>
            </ThemeProvider>
          ))}
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Reservation
        </Button>
        </Flex>

        {/* Drawer Component for ReservationForm */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Make Your Reservation</DrawerHeader>

          <DrawerBody>
            <ReservationForm />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </nav>
    );
  }

export default Nav;