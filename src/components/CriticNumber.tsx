import { Badge } from "@chakra-ui/react";

interface Props {
  metaCritic: number;
}

const CriticNumber = ({ metaCritic }: Props) => {
  const color = metaCritic > 75 ? "green" : metaCritic > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={2} padding={1}>
      {metaCritic}
    </Badge>
  );
};

export default CriticNumber;
