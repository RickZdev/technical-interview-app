import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import ButtonNav from "../components/ButtonNav";

const endpoint = "https://pokeapi.co/api/v2/pokemon/";

const Home = () => {
  const { navigate } = useNavigation<any>();
  const [pokemons, setPokemons] = useState<any[]>();

  const handleNavigationPress = () => {
    navigate("Account");
  };

  const fetchPokemon = async () => {
    const response = await axios.get(endpoint);
    const urls = response.data.results.map((item: any) => item.url);
    const pokemonData = await Promise.all(
      urls.map(async (url: string) => {
        const res = await axios.get(url);
        return res.data.sprites;
      })
    );

    const mergedData = response.data.results?.map(
      (pokemon: any, index: number) => {
        return {
          name: pokemon.name,
          image: pokemonData[index]?.front_default,
        };
      }
    );

    setPokemons(mergedData);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {pokemons?.map((item, index) => {
        return (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        );
      })}

      <ButtonNav label="Go to Account Screen" onPress={handleNavigationPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Home;
