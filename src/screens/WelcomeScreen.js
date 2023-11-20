import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     navigation.navigate("Home");
  //   }, 1200);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-center text-gray-700 font-bold text-4xl">
          Let's Get Started!
        </Text>
        <View className="flex-row justify-center">
          <Image
            style={{ width: 350, height: 350 }}
            source={require("../../assets/images/welcome.png")}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center">
            <Text className="text-[#343a40] font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-bold ml-2 text-[#ffa8a8]">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
