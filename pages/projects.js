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
import { getTable } from "@/lib/airtable";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { ListBulletIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import sorter from "sort-isostring";
import Hero from "@/components/hero";

const Projects = ({ projects }) => {
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
                    .sort((x, y) =>
                      sorter(y.fields["CreateTime"], x.fields["CreateTime"])
                    )
                    .map((project) => (
                      <ProjectCard
                        name={project.fields.Name}
                        description={project.fields.Description}
                        logo={project.fields.Logo}
                        link={project.fields.Link}
                        type={project.fields.Type}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacingY={8} spacingX={4} mt={8}>
                  {projects
                    .filter((b) => b.fields.Status === "Ongoing")
                    .sort((x, y) =>
                      sorter(y.fields["CreateTime"], x.fields["CreateTime"])
                    )
                    .map((project) => (
                      <ProjectCard
                        name={project.fields.Name}
                        description={project.fields.Description}
                        logo={project.fields.Logo}
                        link={project.fields.Link}
                        type={project.fields.Type}
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

export async function getStaticProps() {
  const projects = await getTable("projects");

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}

export default Projects;
