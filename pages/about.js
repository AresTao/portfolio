import React from "react";
import Head from "next/head";
import {
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import interests from "../data/interests.json";
import InterestTag from "@/components/interest-tag";
import Hero from "@/components/hero";
import Link from "@/components/link";

const About = () => (
  <PageTransition>
    <Hero title="About" align="start" subtitle="Learn more about me" />
    <VStack spacing={12} mt={6}>
      <Section>
        <VStack align="start" spacing={6}>
          <Text>
          I’m a full-time Machine Learning Engineer In DIDI inc which is world's leading mobile transportation company as the leader of a team of six. I’m also a creator, codes and articles. 
          </Text>
          <Text>
          As a fan of smallbets thinking, I’m working on a portfolio of small bets.
          </Text>
          
        </VStack>
      </Section>
      <Section>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            😁
          </Heading>
          <Wrap>
            {interests.like.map((el) => (
              <InterestTag name={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            😒
          </Heading>
          <Wrap>
            {interests.dislike.map((el) => (
              <InterestTag name={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>
      
    </VStack>
  </PageTransition>
);

export default About;
