import { Heading, Text, VStack, Link } from '@chakra-ui/react';
import Layout from '@/components/Layout';

export default function Publications() {
  return (
    <Layout>
      <VStack spacing={8} align="flex-start">
        <Heading as="h1" size="2xl">Publications</Heading>
        <Text fontSize="lg">
          Here are some of my publications:
        </Text>
        <Text fontSize="lg">
          <Link href="https://dblp.uni-trier.de/pid/201/0044.html" color="teal.500" isExternal>
            Agile Forward-Reverse Requirements Elicitation as a Creative 2 Design Process: a Case Study of Illimitable Space System v2
          </Link>
        </Text>
        <Text fontSize="lg">
          <Link href="https://www.matec-conferences.org/articles/matecconf/abs/2016/44/matecconf_ictte2016_02017/matecconf_ictte2016_02017.html" color="teal.500" isExternal>
            Association Rule Mining On Five Years Of Motor Vehicle Crashes
          </Link>
        </Text>
      </VStack>
    </Layout>
  );
}
