import {
  Button,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const LoginPage = () => {
  const { colorMode } = useColorMode();
  const formBackground = useColorModeValue("whiteAlpha.400", "whiteAlpha.100");

  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bg={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        bg={formBackground}
        p={12}
        position="relative"
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          name="username"
          placeholder="username"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          name="password"
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button loadingText={"Autorizando"} colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <IconButton
            position="fixed"
            top={5}
            right={5}
            icon={colorMode === "dark" ? <MdLightMode /> : <MdDarkMode />}
            aria-label=".."
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};
