import { Box, HStack, Heading, Image, ScrollView, Spacer, Text } from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../components/Buttone";
import Review from "../components/Review";

function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/1.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Peepo :D from XQC Twitch Channel
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{color:Colors.white}}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer/>
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
Elit laborum cillum esse quis officia laboris. Enim enim tempor ea ea aute amet. In magna officia nostrud id esse ex ad ex dolore nostrud. Nulla exercitation exercitation reprehenderit magna est nisi. Qui id aliqua excepteur consequat reprehenderit aute.
Do reprehenderit Lorem cupidatat duis esse consequat occaecat minim voluptate. Irure veniam dolor tempor et exercitation tempor ea sint officia. Voluptate id et laboris laborum ullamco nulla laboris enim exercitation consequat pariatur eiusmod ut.
</Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
          </Buttone>
          {/* Review */}
          <Review/>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
