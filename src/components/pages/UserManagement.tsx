import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    // paddingの設定を画面の大きさで分ける
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          textAlign="center"
          // Boxにhoverしたときの挙動を決める
          // カーソルがポインタになり、透明度を0.8にする
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          {/* Stackで囲んでおくとスペーシングとかが楽ちんになる */}
          <Stack> Kunio Hirata </Stack>
          <Image
            boxSize="160px"
            borderRadius="full"
            src="https://source.unsplash.com/random"
            alt="プロフィール画像"
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            ひらたくにお
          </Text>
          <Text fontSize="sm" color="gray">
            {" "}
            おにくさんと呼んでくれ{" "}
          </Text>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
