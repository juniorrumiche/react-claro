import { ReactNode } from "react";
import { Link as LinkRoute } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Links = [
  { name: "Datos Landing", path: "/admin/data/landing" },
  { name: "Datos Web", path: "/admin/data/web" },
  { name: "Usuarios", path: "/admin" },
  { name: "Planes", path: "/admin" },
  { name: "Equipos", path: "/admin" },
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    transition="all .7s ease"
    _hover={{
      textDecoration: "none",
      borderBottom: "2px solid gray",
    }}
  >
    {children}
  </Link>
);

export const NavbarAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const logoutUser = () => {
    Cookies.remove("_session");
    navigate("/login");
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={4}>
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
              <Heading fontSize="lg">Tienda Movil Virtual</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink key={index}>
                  <LinkRoute to={link.path}>{link.name}</LinkRoute>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
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
