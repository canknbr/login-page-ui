import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      <View
        className="flex-1 bg-white"
        style={{ backgroundColor: themeColors.bg }}>
        <SafeAreaView className="flex">
          <View className="flex-row justify-start">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-yellow-400 rounded-full flex justify-center items-center p-2 ml-3">
              <AntDesign name="arrowleft" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Image
              style={{
                width: 300,
                height: 300,
              }}
              source={require("../../assets/images/login.png")}
            />
          </View>
        </SafeAreaView>
        <View
          className="flex-1 bg-white px-8 pt-8"
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              placeholder="Enter your email address"
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              placeholder="Enter your password"
              secureTextEntry
            />
            <TouchableOpacity className="flex items-end my-2">
              <Text className="text-gray-700 font-bold text-xs underline">
                Forgot Your Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-400 py-4 rounded-xl">
              <Text className="text-gray-700 font-bold text-xl text-center">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-center text-xl text-gray-700 font-bold py-5">
            Or
          </Text>
          <View className="flex-row justify-center items-center gap-10">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
              <Image source={require("../../assets/icons/google.png")} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
              <Image source={require("../../assets/icons/facebook.png")} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
              <Image source={require("../../assets/icons/apple.png")} />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-center mt-7">
            <Text className="text-gray-700 font-semibold">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text className="font-bold ml-2 text-yellow-400">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
