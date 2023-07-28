import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NevBar = () => {
  return (
    <HStack paddingLeft={"6"}>
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <h1>Logo</h1>
    </HStack>
  );
};

export default NevBar;
