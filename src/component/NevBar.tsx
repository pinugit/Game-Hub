import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NevBar = () => {
  return (
    <HStack paddingX={"4"} justifyContent={"space-between"}>
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NevBar;
