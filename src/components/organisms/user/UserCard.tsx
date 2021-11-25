import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  // Modalを開くのはこのコンポーネントのBoxがクリックされたとき
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  // propsで渡されない場合には disabled と loading は　デフォルト false
  const { imageUrl, userName, fullName, onClick } = props;
  return (
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
      onClick={onClick}
    >
      {/* Stackで囲んでおくとスペーシングとかが楽ちんになる */}
      <Stack>
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
