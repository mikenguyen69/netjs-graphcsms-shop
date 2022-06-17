import { ChakraProvider, Flex, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <Flex w="full" minH="100vh" bgColor="gray.100">
      <Box maxW="70vw" m="auto">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Box>
    </Flex>
  );
}

export default MyApp;
