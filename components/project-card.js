import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Box,
  
} from "@chakra-ui/react";
//import Image from "./image";
import Image from "next/image";
import { usePalette } from "react-palette";
import Link from "@/components/link";

const ProjectCard = ({ name, description, logo, link, type }) => {
  const { data, loading, error } = usePalette(logo);

  const getTypeColor = (type) => {
    if (type === "Website") {
      return "teal";
    } else if (type === "Saas") {
      return "blue";
    } else if (type === "Community") {
      return "orange";
    } else if (type === "InfoProduct") {
      return "red";
    }
  };

  return (
    <Link href={link} unstyled>
      <HStack
        p={4}
        bg={useColorModeValue("white", "neutralD.100")}
        rounded="lg"
        borderWidth="1px"
        borderColor={useColorModeValue("neutral.400", "neutralD.400")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        

        <VStack align="start" justify="flex-start" spacing={1}>
          <div className="aspect-[16/9] relative">
              <Image
                alt={name}
                className="rounded-sm"
                src={logo?logo:"/"}
                width={300}
                height={200}
                
              />
          </div>
          <VStack spacing={0} align="start">
            <HStack>
              <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                {name}
              </Text>
              <Tag size="sm" colorScheme={getTypeColor(type)}>
                {type}
              </Tag>
            </HStack>

            <Text
              fontSize="sm"
              color={useColorModeValue("neutral.1000", "neutralD.1000")}
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
};

export default ProjectCard;
