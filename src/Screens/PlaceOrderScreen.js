import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../components/OrderItem";
import PlaceOrderModel from "../components/PlaceOrderModel";

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="User Name"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Terrascoloyo"
            text="Pay Method: Paypal"
            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address: "
            text="Tula Jalastlán, Lomas Ajeas, P.O BOX 131369"
            icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModel/>
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
