import { MdOutlineMonitor, MdPhone, MdWifi } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Link as LinkRoute } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  FULL_CLARO_PATH,
  PLANES_NETFLIX_PATH,
  PLAY1_PATH,
  PLAY2_AVANZADO_PATH,
  PLAY2_PATH,
  PLAY2_SUPERIOR_PATH,
  PLAY3_AVANZADO_PATH,
  PLAY3_SUPERIOR_PATH,
  POSTPAGO_CLARO_PATH,
  PREPAGO_CLARO_PATH,
  PROMOCIONES_PATH,
  PROMOCIONES_TARJETA_PATH,
} from "../../config/config";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "#27303f")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        boxShadow="md"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <LinkRoute to="/">
            <Image alt="tienda claro" src="/logo.svg"></Image>
          </LinkRoute>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton
            borderRadius="2xl"
            aria-label="..."
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                bg="none"
                p={2}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  background: useColorModeValue("whiteAlpha.100", "gray.700"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ icon, label, href, subLabel }: NavItem) => {
  return (
    <LinkRoute to={href ?? "/"}>
      <Box
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <HStack>
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "pink.400" }}
                fontWeight={500}
              >
                {label}
              </Text>

              {icon || ""}
            </HStack>
            <Text color={"gray.500"} fontSize={"sm"}>
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </LinkRoute>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  icon?: any;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Internet Hogar",
    children: [
      {
        icon: <MdWifi mr={3} />,
        label: "Hogar 1 Play",
        href: PLAY1_PATH,
      },
      {
        icon: (
          <>
            <MdWifi /> <AiOutlinePlus size={10} /> <MdPhone />{" "}
          </>
        ),
        label: "Hogar 2 Play",
        href: PLAY2_PATH,
      },

      {
        icon: (
          <>
            <MdWifi /> <AiOutlinePlus size={10} /> <MdOutlineMonitor />{" "}
          </>
        ),
        label: "Hogar 2 Avanzado",
        href: PLAY2_AVANZADO_PATH,
      },

      {
        icon: (
          <>
            <MdWifi /> <AiOutlinePlus size={10} /> <MdOutlineMonitor />{" "}
          </>
        ),
        label: "Hogar 2 Superior",
        href: PLAY2_SUPERIOR_PATH,
      },

      {
        icon: (
          <>
            <MdWifi /> <AiOutlinePlus size={10} /> <MdOutlineMonitor />{" "}
            <AiOutlinePlus size={10} /> <MdPhone />
          </>
        ),
        label: "Hogar 3 Avanzado",
        href: PLAY3_AVANZADO_PATH,
      },

      {
        icon: (
          <>
            <MdWifi /> <AiOutlinePlus size={10} /> <MdOutlineMonitor />{" "}
            <AiOutlinePlus size={10} /> <MdPhone />
          </>
        ),
        label: "Hogar 3 Superior",
        href: PLAY3_SUPERIOR_PATH,
      },
    ],
  },

  {
    label: "Moviles",
    children: [
      {
        label: "Postpago",
        subLabel: "Conéctate sin preocupaciones con nosotros.",
        href: POSTPAGO_CLARO_PATH,
      },
      {
        label: "Prepago",
        subLabel: "Flexibilidad y ahorro garantizados aquí",
        href: PREPAGO_CLARO_PATH,
      },
    ],
  },
  {
    label: "Promociones",
    children: [
      {
        label: "Full Claro",
        subLabel: "Todo lo que necesitas esta en Claro.",
        href: FULL_CLARO_PATH,
      },
      {
        label: "Promociones Netflix",
        subLabel: "Netflix, en todas partes contigo",
        href: PLANES_NETFLIX_PATH,
      },

      {
        label: "Promociones Claro",
        subLabel: "Con nuestras promociones, más por menos",
        href: PROMOCIONES_PATH,
      },
      
      {
        label: "Promociones (Tajeta de credito)",
        subLabel: "Con nuestras promociones, más por menos",
        href: PROMOCIONES_TARJETA_PATH,
      },
    ],
  },
];
