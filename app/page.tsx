"use client";
import Image from "next/image";

import {
  Box,
  Text,
  Button,
  Link,
  UnorderedList,
  ListItem,
  Heading,
  Stack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Stack mt={4} p={4} gap="4">
        <Stack>
          <Text fontSize="6xl">About</Text>

          <Text fontSize="4xl">Hiroto Yuba</Text>

          <Image
            src="/image/profile.png"
            alt="profile"
            width="200"
            height="200"
          />
        </Stack>

        <Stack>
          <Heading fontWeight="thin">Information</Heading>
          <Text fontSize="18">
            1996年生まれ。yuba4という名前で活動しています。
             TypeScript React.js React Native GraphQLなどの技術が好きです。
            連絡などがあればTwitterやメールなどでお願いします。
          </Text>
        </Stack>

        <Stack>
          <Heading fontWeight="thin">Career</Heading>
          <UnorderedList pl="4">
            <ListItem>
              <Text fontSize="18">ワスド株式会社 2021年1月 ~ 現在</Text>
            </ListItem>
          </UnorderedList>
        </Stack>

        <Stack>
          <Heading fontWeight="thin">Links</Heading>
          <UnorderedList pl="4">
            <ListItem>
              <Button color="#1DA1F2" variant="link">
                <Link href="https://twitter.com/yuba_4">Twitter @yuba_4</Link>
              </Button>
            </ListItem>

            <ListItem>
              <Button size="lg" colorScheme="teal" variant="link">
                <Link href="mailto:abyu629@gmail.com">E-mail</Link>
              </Button>
            </ListItem>

            <ListItem>
              <Button colorScheme="#333" variant="link">
                <Link href="https://github.com/Yuba4">GitHub Yuba4</Link>
              </Button>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </div>
  );
};

export default About;
