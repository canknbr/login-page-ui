import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const HomeScreen = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="flex-row items-center">
        <Text className="text-lg">Home Page - </Text>
        <TouchableOpacity
          className="bg-red-400 px-4 py-2 rounded-xl flex items-center justify-center"
          onPress={handleLogout}>
          <Text className="text-white text-xl font-semibold tracking-widest">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
