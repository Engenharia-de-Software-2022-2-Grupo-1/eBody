
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Box, Heading, FlatList, HStack, VStack, Spacer, Center, Switch, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Celebrants(props) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var getAniversariantes = async () => {
      try {
        const response = await fetch('http://192.168.0.8:3000/aniversariante/');
        const json = await response.json();
        setData(json);
        console.log(json)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    getAniversariantes();
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

      const formatDate = (data) => {
        aniversario = data.split("-");
        return aniversario[2] + "/" + aniversario[1] +"/" + aniversario[0]
      }
      
      return (
        <ScrollView  >
        <View>
        <Box>
          <Heading fontSize="xl" p="15" pb="30" color="#888686" my={0} textAlign="center">
            Aniversariantes do mês 
          </Heading>
  
          <FlatList
            data={data}
            renderItem={({ item }) => (
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
                    <Text fontSize="xl" _dark={{ color: '#FFFFFF' }} color="#888686" bold>
                      Data de nascimento: {formatDate(item.dataNascimento)}
                    </Text>
                  </VStack>
                  <Icon
                    as={<FontAwesome5 name="birthday-cake" />}
                    size={6}
                    color="#888686"
                    alignSelf="flex-end"
                  />
                </HStack>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </View>
      </ScrollView>
      )

}