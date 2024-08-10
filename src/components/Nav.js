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

function Nav() {
    const menuItems = [
      { label: 'Home', dropdownContent: [] },
      { label: 'About', dropdownContent: [] },
      { label: 'Menu', dropdownContent: [] },
      { label: 'Reservation', dropdownContent: [] }, // No dropdown content
      { label: 'Order Online', dropdownContent: ['Feature 1', 'Feature 2'] },
      { label: 'Login', dropdownContent: ['Sign In', 'Register'] }
    ];
  
    return (
      <nav>
        <Flex gap="1rem" p="1rem" align="center">
          {menuItems.map((item, index) => (
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
          ))}
        </Flex>
      </nav>
    );
  }

export default Nav;