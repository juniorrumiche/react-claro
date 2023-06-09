import { Navbar } from "../components/base/Navbar";
import { Footer } from "../components/base/Footer";
import { ContactCard } from "../components/ContactCard";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineFundView } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import { CATALOGO_API_PATH } from "../config/config";
import { useNavigate, useParams } from "react-router-dom";
import { PhoneDataProps } from "../types/componente";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { MarcasTelefonoDB } from "../db/db";

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
  const [loading, setLoading] = useState(true);
  const { marca } = useParams();
  const navigate = useNavigate();

  const handleMarcaChange = (newMarca: string) => {
    navigate(`/moviles/${newMarca}`);
  };

  //useEffect
  useEffect(() => {
    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        let response = await axios.get(CATALOGO_API_PATH + `${marca}`);
        setPhoneData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [marca]);

  //End useEffect

  return (
    <main>
      <Helmet>
        <title>Moviles Postpago</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={[]} />

      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          mx={2}
          my={5}
          minWidth={250}
          borderRadius="2xl"
          bg={useColorModeValue("white", "whiteAlpha.100")}
        >
          <Stack py={5} px={4} spacing={5}>
            <Heading size="md">Marcas</Heading>
            <RadioGroup onChange={handleMarcaChange}>
              <Stack spacing={5}>
                {MarcasTelefonoDB.map((value, index) => (
                  <HStack justifyContent="space-between" key={index}>
                    <div>{value.name.toLowerCase()}</div>
                    <Radio
                      size="lg"
                      name="1"
                      colorScheme="blue"
                      value={value.name.toLowerCase()}
                    />
                  </HStack>
                ))}
              </Stack>
            </RadioGroup>
          </Stack>
        </Box>
        {loading ? (
          <Center w="full">
            <Spinner />{" "}
          </Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 3 }} py={10} px={5}>
            {phoneData &&
              phoneData.map((value, index) => (
                <LazyLoadComponent key={index}>
                  <PhoneCard {...value} />
                </LazyLoadComponent>
              ))}
          </SimpleGrid>
        )}
      </Flex>

      <Footer />
    </main>
  );
};
