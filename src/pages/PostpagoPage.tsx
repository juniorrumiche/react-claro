import { Navbar } from "../components/base/Navbar";
import { Footer } from "../components/base/Footer";
import { ContactCard } from "../components/ContactCard";
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineFundView } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import { CATALOGO_API_PATH } from "../config/config";
import { useParams } from "react-router-dom";
import { PhoneDataProps } from "../types/componente";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const PhoneCard = (props: PhoneDataProps) => {
  return (
    <Flex
      borderRadius="2xl"
      m={3}
      p={5}
      flexDirection="column"
      bg={useColorModeValue("white", "whiteAlpha.100")}
    >
      <Box textAlign="center" w="full">
        <Heading color="gray" size="md">
          {props.marca}
        </Heading>
        <Heading mt={2} size="lg">
          {props.nombreEquipo}
        </Heading>
      </Box>
      <HStack mt={3} spacing={1}>
        <Box w="55%" textAlign="center">
          <Image alt="phone claro" src={props.URLimg}></Image>
        </Box>
        <Stack w="40%" spacing={2}>
          <Text fontWeight="bold">Precio Online</Text>
          <Text fontWeight="bold">S/. {props.pOnline}</Text>
          <Text color="gray.500" fontSize={12}>
            Postpago Portabilidad Max ilimitado 69.90
          </Text>
          <Text fontSize={12}>
            <Badge bg="red.200" borderRadius="lg" mr={1}>
              20% dto
            </Badge>
            x 3 meses. <b>55.92</b>
          </Text>
        </Stack>
      </HStack>
      <Button
        colorScheme="red"
        mt={3}
        variant="outline"
        leftIcon={<AiOutlineFundView />}
      >
        Ver Detalles
      </Button>
    </Flex>
  );
};

export const PostpagoPage = () => {
  const [phoneData, setPhoneData] = useState<PhoneDataProps[]>([]);
  const { marca } = useParams();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        let response = await axios.get(CATALOGO_API_PATH + `${marca}`);
        setPhoneData(response.data);
        console.log(response.data);
      } catch (error) {}
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Moviles Postpago</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={[]} />
      <SimpleGrid columns={{ base: 1, md: 3 }} py={10} px={5}>
        {phoneData &&
          phoneData.map((value, index) => (
            <LazyLoadComponent key={index}>
              <PhoneCard {...value} />
            </LazyLoadComponent>
          ))}
      </SimpleGrid>

      <Footer />
    </main>
  );
};
