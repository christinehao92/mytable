import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
 Flex,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';


function Nav (){

    const menuItems = [
        { label: 'Home' },
        { label: 'About' },
        { label: 'Menu' },
        { label: 'Reservation' },
        { label: 'Order Online' },
        { label: 'Login' }
      ];

    return (
    <nav>
      <Flex gap="1rem" p="1rem" align="center">
        {menuItems.map((item, index) => (
            <Menu key={index}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {item.label}
              </MenuButton>
              <MenuList>
                {/* Add dropdown items here if needed */}
                <MenuItem>Placeholder</MenuItem>
              </MenuList>
            </Menu>
        ))}
            </Flex>
 </nav>

    );

}

export default Nav;