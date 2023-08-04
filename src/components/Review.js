import { View, Text } from "react-native";
import React, { useState } from "react";
import { Box, CheckIcon, FormControl, Heading, Select, TextArea, VStack } from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import Buttone from "./Buttone";

export default function Review() {
    const [ratings, setRatings] = useState('')
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Reviews
      </Heading>
      {/* In case there is no reviews */}
{/*       <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"No Reviews"}
      /> */}
      {/* Review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Aliquip laboris nostrud aliquip cillum nulla occaecat velit velit."
          }
        />
      </Box>
      {/* Write Review */}
{/*       <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          Give Us A Review!
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose a Rate!"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={5} />,
                justifyContent: "center",
                alignItems: "center",
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="Duis consequat magna magna dolore aliquip cupidatat magna proident Lorem ipsum sint."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg:Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            Submit
          </Buttone>

          < Message
          color={Colors.white}
          bg={Colors.black}
          children={
            "Please 'Login' to write a review"}
        />
        </VStack>
      </Box> */}
    </Box>
  );
}
