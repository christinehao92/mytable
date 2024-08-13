import React, {useState} from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    ThemeProvider,
    extendTheme,
  useDisclosure,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { menuTheme } from './menutheme';
import DrawerComponent from './DrawerComponent'; 


const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
})

const handleSubmit = () => {
  console.log("Form submitted successfully.");
  // Implement your submission logic or API call here
};

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    
    const menuItems = [
      { label: 'Home', dropdownContent: [] },
      { label: 'About', dropdownContent: [] },
      { label: 'Menu', dropdownContent: [] },
      { label: 'Order Online', dropdownContent: ['Lunch', 'Dinner'] },
      { label: 'Login', dropdownContent: ['Sign In', 'Register'] },
      { label: 'Reservation', dropdownContent: [] }
    ];
  
    return (
      <nav className="nav">
        <Flex className="nav-content" gap="1rem" p="1rem" align="center">
          {menuItems.map((item, index) => (
            <ThemeProvider theme={theme} key={index}>
            <Menu key={index}>
            <MenuButton
                as={Button}
                rightIcon={item.dropdownContent.length > 0 ? <ChevronDownIcon /> : undefined}
                onClick={item.label === 'Reservation' ? onOpen : undefined} // Open drawer on click
              >
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
        </Flex>

        <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit} // Pass the success handler
      />
      </nav>
    );
  }

export default Nav;