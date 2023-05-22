import { Box, HStack, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { BsEmojiDizzyFill } from "react-icons/bs";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  // this gets the error object with the information about the error
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box
        bg="#333333"
        width="600px"
        padding={4}
        borderRadius="10px"
        margin="auto"
        marginTop={12}
        textAlign="center"
        color="deeppink"
        boxShadow="0px 0px 10px rgba(0, 255, 255, 0.3)"
      >
        <HStack justify="center" align="center" spacing={2} margin={3}>
          <Box marginRight={8}>
            <BsEmojiDizzyFill size={90} />
          </Box>
          <VStack align="left" spacing={0} textAlign="left">
            <Box fontSize="40px" fontWeight="bold">
              Oh no!
            </Box>
            <Box fontSize="30px" fontWeight="bold">
              {isRouteErrorResponse(error)
                ? "That is a most invalid page."
                : "I did not expect that error. One could say it is most unexpected."}
            </Box>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};
export default ErrorPage;
