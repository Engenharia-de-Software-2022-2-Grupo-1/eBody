import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal   } from 'react-native';
import { Box, Heading, FlatList, HStack, VStack, Spacer, Center, Switch, Button } from 'native-base';
import axios from 'axios';

export default function PendingPayments(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  


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
    if (refresh){
      getInadimplentes();
      setRefresh(false);
    }
   
  }, [refresh]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [toggleStates, setToggleStates] = useState(data.map(() => false));
  const [showConfirmation, setShowConfirmation] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setShowConfirmation(false);
  };

  const handleToggleSwitch = (index) => {
  const updatedToggleStates = [...toggleStates];
  updatedToggleStates[index] = !updatedToggleStates[index];
  setToggleStates(updatedToggleStates);

  setSelectedItem(data[index]); 
  setShowConfirmation(true);
  };
  const confirmPayment = async ()  => {
    try {
      const response = await axios.put(`http://192.168.0.21:3000/inadimplente/${selectedItem.id}`, {
      });
      
      console.log(response.data); 
    } catch (error) {
     
      console.error(error);
    }
  

    
    setRefresh(true);
    setShowConfirmation(false);
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
    <Modal visible={showConfirmation} animationType="slide">
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Deseja confirmar o pagamento para {selectedItem?.nome}?</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <Button style={{ backgroundColor: "#455D3B" }} onPress={confirmPayment}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Confirmar</Text>
                </Button>
      <View style={{ width: 10 }} />
      
      <Button style={{ backgroundColor: "#8f2828" }} onPress={closeModal}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Cancelar</Text>
                </Button>
      </View>
    </View>
  </Modal>

  </Box>
  </View>
  );
  }
