import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "./Header";
import PaymentSection from "./PaymentSection";
import ConnectedAccounts from "./ConnectedAccounts";
import DeleteAccountButton from "./DeleteAccountButton";


const PaymentDetails = () => {
  return (
    <ScrollView className="bg-white">
      <View className="flex overflow-hidden relative gap-2.5 items-start mx-auto bg-white">
        <Header />
        <View className="absolute z-0 text-3xl text-black h-[27px] left-[25px] top-[81px] w-[262px]">
          <Text>Payment Details</Text>
        </View>
        <View className="flex absolute left-0.5 z-0 gap-2.5 items-center p-2.5 min-w-[240px] top-[115px] w-[353px]">
          <View className="flex self-stretch my-auto bg-indigo-200 rounded min-h-[793px] min-w-[240px] w-[333px]" />
        </View>
        <PaymentSection />
        <ConnectedAccounts />
        <DeleteAccountButton />
      </View>
    </ScrollView>
  );
};


export default PaymentDetails;