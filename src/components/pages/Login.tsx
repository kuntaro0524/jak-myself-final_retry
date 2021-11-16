import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      {/* 背景を白にして幅を狭め、角丸にして影をつけた */}
      <Box bg="white" w="sm" p={4} borderRardius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Unko
        </Heading>
        {/* デバイダ→横線の区切り */}
        <Divider my={5} />
        {/* Stackは特におすすめでこのTagで囲ったものを等間隔に配置するという便利な代物 */}
        <Stack spacing={5} py={4} px={10}>
          <Input placeholder="ユーザ名" />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
