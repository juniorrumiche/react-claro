import { Link as LinkRoute } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { WEB_DATA_PATH } from "../../config/config";

const Links = [
  { name: "Datos", path: WEB_DATA_PATH },
  { name: "Usuarios", path: "/admin" },
  { name: "Planes", path: "/admin" },
  { name: "Equipos", path: "/admin/equipos" },
];

interface NavLinkTypes {
  name: string;
  path: string;
}

const NavLink = ({ name, path }: NavLinkTypes) => (
  <LinkRoute to={path}>
    <Button
      px={2}
      bg="none"
      fontWeight="normal"
      py={1}
      transition="all .7s ease"
      _hover={{
        textDecoration: "none",
        borderBottom: "2px solid gray",
      }}
    >
      {name}
    </Button>
  </LinkRoute>
);

export const NavbarAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();
  const navigate = useNavigate();

  const logoutUser = () => {
    Cookies.remove("_session");
    navigate("/login");
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "#27303f")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading fontSize="lg">Tienda Claro</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink name={link.name} path={link.path} key={index} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              mx={3}
              borderRadius="2xl"
              aria-label="..."
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={"https://picsum.photos/200"} />
              </MenuButton>
              <MenuList zIndex={10}>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutUser}>
                  <MdLogout />
                  <Text ml={2}>Cerrar Session</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <LinkRoute to={link.path}>{link.name}</LinkRoute>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
