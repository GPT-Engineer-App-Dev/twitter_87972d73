import React from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, IconButton, Divider, Avatar, useColorModeValue, Heading, Textarea, Stack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaMeh, FaFeatherAlt } from "react-icons/fa";

const Tweet = ({ username, handle, content, avatar }) => {
  return (
    <HStack spacing="3" paddingY="3" alignItems="flex-start">
      <Avatar src={avatar} />
      <VStack alignItems="start" spacing="1">
        <HStack>
          <Text fontWeight="bold">{username}</Text>
          <Text color="gray.500">@{handle}</Text>
        </HStack>
        <Text>{content}</Text>
      </VStack>
    </HStack>
  );
};

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl" p={4}>
      <HStack spacing="6" justifyContent="space-between">
        {/* Sidebar */}
        <VStack alignItems="start" spacing="2">
          <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" aria-label="Twitter logo" />
          <Button leftIcon={<FaHome />} justifyContent="start" variant="ghost" isFullWidth>
            Home
          </Button>
          <Button leftIcon={<FaHashtag />} justifyContent="start" variant="ghost" isFullWidth>
            Explore
          </Button>
          <Button leftIcon={<FaBell />} justifyContent="start" variant="ghost" isFullWidth>
            Notifications
          </Button>
          <Button leftIcon={<FaEnvelope />} justifyContent="start" variant="ghost" isFullWidth>
            Messages
          </Button>
          <Button leftIcon={<FaBookmark />} justifyContent="start" variant="ghost" isFullWidth>
            Bookmarks
          </Button>
          <Button leftIcon={<FaListAlt />} justifyContent="start" variant="ghost" isFullWidth>
            Lists
          </Button>
          <Button leftIcon={<FaUserAlt />} justifyContent="start" variant="ghost" isFullWidth>
            Profile
          </Button>
          <Button leftIcon={<FaMeh />} justifyContent="start" variant="ghost" isFullWidth>
            More
          </Button>
        </VStack>

        {/* Main Content */}
        <VStack flex="1" spacing="4" maxWidth="600px">
          <Heading as="h1" size="lg">
            Home
          </Heading>
          <HStack width="100%">
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Textarea placeholder="What's happening?" />
          </HStack>
          <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" alignSelf="end">
            Tweet
          </Button>
          <Divider />
          <VStack divider={<Divider />} width="100%">
            <Tweet username="John Doe" handle="johndoe" content="Just setting up my twttr" avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5ODE2MzE2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Tweet username="Jane Smith" handle="janesmith" content="Hello world!" avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk4MTYzMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            {/* Add more Tweet components here */}
          </VStack>
        </VStack>

        {/* Right Sidebar */}
        <VStack alignItems="start" spacing="2" flex="1">
          <Input placeholder="Search Twitter" variant="filled" />
          {/* Add more content and widgets here */}
        </VStack>
      </HStack>
    </Container>
  );
};

export default Index;
