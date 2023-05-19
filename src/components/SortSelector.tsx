import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  // hyphen indicates reversed order, highes rating, newest games etc first
  const sortOrders = [
    { value: "", label: "relevance " },
    { value: "-added", label: "date added " },
    { value: "name", label: "name " },
    { value: "-released", label: "release date " },
    { value: "-metacriti", label: "popularity " },
    { value: "-rating", label: "average rating " },
  ];

  const setSortOrder = useGameQueryStore((selector) => selector.setSortOrder);

  const sortOrder = useGameQueryStore(
    (selector) => selector.gameQuery.sortOrder
  );

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || "relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
