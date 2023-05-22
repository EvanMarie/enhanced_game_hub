import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  // if expanded, show all text, if collapsed, show substring
  const summary = expanded
    ? children.substring(0, children.search("Español"))
    : children.substring(0, limit) + "... ";

  return (
    <Text fontSize="14px">
      {summary}
      <Button
        size="xs"
        fontSize="14px"
        fontWeight="bold"
        colorScheme="purple"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Less" : "More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
