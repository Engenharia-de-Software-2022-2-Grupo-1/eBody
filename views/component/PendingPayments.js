import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Box, Heading, FlatList, HStack, VStack, Spacer, Center, Switch } from 'native-base';

export default function PendingPayments(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var getInadimplentes = async () => {
      try {
        const response = await fetch('http://192.168.0.8:3000/inadimplente/');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    getInadimplentes();
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [toggleStates, setToggleStates] = useState(data.map(() => false));

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleToggleSwitch = (index) => {
  const updatedToggleStates = [...toggleStates];
  updatedToggleStates[index] = !updatedToggleStates[index];
  setToggleStates(updatedToggleStates);
  };
  
  return (
  <View>
  <Box>
 
  <FlatList
  data={data}
  renderItem={({ item, index }) => (
  <TouchableOpacity onPress={() => openModal(item)}>
  <HStack
               bg="white"
               borderRadius="sm"
               shadow={1}
               p="5"
               my="1"
               width="100%"
               alignItems="center"
               justifyContent="space-between"
             >
   <VStack space={2}>
                  <Text fontSize="xl" _dark={{ color: '#FFFFFF' }} color="#888686" bold>
                    {item.nome}
                  </Text>
                </VStack>
  <Switch
  isChecked={toggleStates[index]}
  onToggle={() => handleToggleSwitch(index)}
  size="md"
  
  ios_backgroundColor="#3e3e3e"
  />
  </HStack>
  </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
  />
  </Box>
  </View>
  );
  }
