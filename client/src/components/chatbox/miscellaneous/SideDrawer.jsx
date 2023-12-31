import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { ChatState } from '../../../context/ChatProvider';
import ProfileModal from './ProfileModal';
import ChatLoading from '../ChatLoading';
import UserListItem from '../UserAvatar/UserListItem';
import { getSender } from '../../../config/ChatLogics';
import '../../../App.css';
import { useEffect } from 'react';
const apiURL = process.env.REACT_APP_API_URL;

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification
  } = ChatState();
  // const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    // navigate('/');
  };

  const handleSearch = async () => {
    // if (!search) {
    //   return toast({
    //     title: 'Please Enter something in search',
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom-left',
    //     variant: 'solid'
    //   });
    // }

    try {
      setLoading(true);

      const response = await fetch(
        `${apiURL}/api/user?search=${search || ''}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );
      const data = await response.json();

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      setLoading(false);
      return toast({
        title: 'Error Occured!',
        description: 'Failed to Load the Search Results',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
        variant: 'solid'
      });
    }
  };

  useEffect(() => {
    async function load() {
      const response = await fetch(`${apiURL}/api/user?search=${search}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      const data = await response.json();

      setLoading(false);
      setSearchResult(data);
    }
    load();
  }, []);

  const accessChat = async userId => {
    try {
      setLoadingChat(true);

      const response = await fetch(`${apiURL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({
          userId
        })
      });
      const data = await response.json();

      // If the chat already inside 'chat' state, append it
      if (!chats.find(c => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoadingChat(false);
      onClose(); // Close the side drawer
    } catch (error) {
      setLoadingChat(false);
      return toast({
        title: 'Error fetching the chat',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
        variant: 'solid'
      });
    }
  };

  return (
    <>
      {/* Chat Page UI */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px">
        {/* Search User Section */}
        <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
          <Button colorScheme="blue" onClick={onOpen}>
            <i className="fas fa-search" />
            <Text display={{ base: 'none', md: 'flex' }} paddingX="2.5">
              Search User
            </Text>
          </Button>
        </Tooltip>

        {/* App Name Section */}
      </Box>

      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Users</DrawerHeader>

          <DrawerBody>
            {/* Search User */}
            <Box display="flex" pb="2">
              <Input
                placeholder="Search by name or email"
                mr="2"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>

            {/* Polulate Search Results */}
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map(user => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}

            {/* if the chat has been created, don't show the loading */}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
