import React from "react";
// import fs from "fs";
import Head from "next/head";
import {
  Button,
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  HStack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import sorter from "sort-isostring";
import { getBlogPosts } from "@/lib/notion/api";
import Link from "@/components/link";
import SubscribeCard from "@/components/subscribe-card";
import BlogListItem from "@/components/blog-list-item";
import generateRssIcon from "@/lib/rss";
import Subscribe from "@/components/subscribe";
import Hero from "@/components/hero";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Home = ({ posts }) => (
  <Box>
    <PageTransition>
      <VStack spacing={16}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <VStack
              // w="100%"
              spacing={6}
              // rounded="lg"
              // borderWidth="1px"
              // bg={useColorModeValue("white", "neutralD.100")}
              // borderColor={useColorModeValue("neutral.400", "neutralD.400")}
              // p={8}
              align="start"
              // // height={48}
            >
              <HStack justify="space-between" w="100%" align="center">
                <Heading size="lg" align="left">
                  Hey there. 👋
                </Heading>
                <Link href="/about" legacyBehavior>
                  <Button
                    variant="ghost"
                    rightIcon={<Icon as={ArrowUpRightIcon} />}
                    size={["sm", "md"]}
                  >
                    Read more
                  </Button>
                </Link>
              </HStack>
              <Text fontSize={["lg", "2xl"]}>
              I’m Joey Wu, a full-time Machine Learning Engineer in DIDI.inc, which is the world's leading mobile transportation company. I’m also a creator, codes and articles. As a fan of small-bets thinking, I’m working on a portfolio of small bets.
              </Text>
            </VStack>
          </VStack>
        </Section>
        <Section>
          <VStack align="start" spacing={8}>
            <HStack justify="space-between" w="100%" align="center">
              <Heading size="lg">Latest Posts</Heading>
              <Link href="/blog" legacyBehavior>
                <Button
                  size={["sm", "md"]}
                  variant="ghost"
                  rightIcon={<Icon as={ArrowUpRightIcon} />}
                >
                  View all
                </Button>
              </Link>
            </HStack>
            <SimpleGrid columns={1} spacing={4} w="100%">
              {posts.results
                .filter((post) => post.isPublished)
                .sort(
                  (x, y) => new Date(y.publishDate) - new Date(x.publishDate)
                )
                .slice(0, 3)
                .map((post) => {
                  return <BlogListItem key={post.id} {...post} />;
                })}
            </SimpleGrid>
          </VStack>
        </Section>
        <Section>
          <VStack align="start" spacing={8}>
            <Heading size="lg">Subscribe</Heading>
            <VStack spacing={4}>
              <Text>
                If you want to stay up to date with my latest posts you can sign
                up to my newsletter. I promise I won't spam you.
              </Text>
              <SubscribeCard card={false} title="" description="" />
            </VStack>
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export async function getStaticProps() {
  const posts = await getBlogPosts(9999);
  //const rss = await generateRssIcon(posts);
  // fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Home;
