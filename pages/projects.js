import React from "react";
import {
  chakra,
  Icon,
  VStack,
  HStack,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  useTab,
  useStyles,
  Link,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { ListBulletIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import Hero from "@/components/hero";

const Projects = () => {
  const StyledTab = chakra("button", { themeKey: "Tabs.Tab" });

  return (
    <PageTransition>
      <VStack spacing={8}>
        <Hero
          title="Projects"
          subtitle="A portfolio of small bets I'm working on."
          mb={8}
        ></Hero>
        <Section>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabList>
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: "blue.800",
                  bg: "blue.100",
                }}
                mr={2}
              >
                <HStack spacing={1}>
                  <Icon as={ListBulletIcon} />
                  <Text>All</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: "green.800",
                  bg: "green.100",
                }}
              >
                <HStack spacing={1}>
                  <Icon as={BookmarkIcon} />
                  <Text>Ongoing</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacingY={8} spacingX={4} mt={8}>
                  {projects
                    .map((project) => (
                      <ProjectCard
                        name={project.name}
                        description={project.description}
                        logo={project.logo}
                        link={project.link}
                        type={project.type}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacingY={8} spacingX={4} mt={8}>
                  {projects
                    .filter((b) => b.status === "Ongoing")
                    .map((project) => (
                      <ProjectCard
                        name={project.name}
                        description={project.description}
                        logo={project.logo}
                        link={project.link}
                        type={project.type}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </VStack>
    </PageTransition>
  );
};


const projects = [
  {
    name: "pintowebsite",
    description: "Pin every link you are interested in and make them into a website to serve others.",
    type: "Saas",
    tags:"notion,airtable",
    logo:"/portfolio/pintowebsite.png",
    link:"https://pintowebsite.cn",
    report:"https://pintowebsite.cn/blog",
    icon:"/portfolio/pintowebsite-icon.png",
    status:"Ongoing",
  },
  {
    name: "nailsmallbets",
    description: "Diversify your income with multiple small bets.",
    type: "InfoProduct",
    tags:"small bets",
    logo:"/portfolio/nailsmallbets.png",
    link:"https://nailsmallbets.com",
    report:"https://nailsmallbets.com",
    icon:"/portfolio/nailsmallbets-icon.png",
    status:"Ongoing",
  },
  {
    name: "bizideas",
    description: "If you want to do something your own yet don't know what to do, check here.",
    type: "InfoProduct",
    tags:"biz ideas",
    logo:"/portfolio/bizideas.png",
    link:"https://bizideas.cn",
    report:"https://bizideas.cn",
    icon:"/portfolio/bizideas-icon.png",
    status:"Ongoing",
  },
  {
    name: "shipwebsite",
    description: "Ship your website fast.",
    type: "Saas",
    tags:"website",
    logo:"/portfolio/shipwebsite.png",
    link:"https://shipweb.site",
    report:"https://shipweb.site",
    icon:"/portfolio/shipwebsite-icon.png",
    status:"Ongoing",
  },
  {
    name: "wuzhantao.com",
    description: "My Chinese portfolio website.",
    type: "Website",
    tags:"personal portfolio",
    logo:"/portfolio/joeywu.png",
    link:"https://wuzhantao.com",
    report:"https://wuzhantao.com",
    icon:"/portfolio/joeywu-icon.png",
    status:"Ongoing",
  },
];


export default Projects;
