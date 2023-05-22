import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="deeppink">
        {term}
      </Heading>
      <Box as="dd" fontSize="sm" color="white">
        {children}
      </Box>
    </Box>
  );
};

export default DefinitionItem;
