import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSortSelect: (sortOption: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSortSelect, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", level: "Relevance" },
    { value: "-added", level: "Date added" },
    { value: "name", level: "Name" },
    { value: "released", level: "Release date" },
    { value: "-metacritic", level: "Popularity" },
    { value: "-rating", level: "Avarage rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  //   name, released, added, created, updated, rating, metacritic
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: {currentSortOrder?.level || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSortSelect(order.value)} key={order.level}>
            {order.level}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
