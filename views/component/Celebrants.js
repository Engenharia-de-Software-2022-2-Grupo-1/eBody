
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Box, Heading, FlatList, HStack, VStack, Spacer, Center, Switch, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Celebrants(props) {

    const data = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          fullName: 'Alfredo',
          timeStamp: '10/04/2023',
          recentText: 'Good Day!',
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          fullName: 'Anthony',
          timeStamp: '10/04/2023',
          recentText: 'Cheer up, there!',
          avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          fullName: 'Dieguinho ',
          timeStamp: '20/04/2023',
          recentText: 'Good Day!',
          avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
        },
        {
          id: '68694a0f-3da1-431f-bd56-142371e29d72',
          fullName: 'Thaisinha',
          timeStamp: '10/04/2023',
          recentText: 'All the best',
          avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
        },
       
      ];
    
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
          <Heading fontSize="xl" p="15" pb="30" color="#888686" my={0} textAlign="center">
            Aniversariantes ABRIL
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
                      {item.fullName}
                    </Text>
                    <Text fontSize="xl" _dark={{ color: '#FFFFFF' }} color="#888686" bold>
                      Data de nascimento: {item.timeStamp}
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
      )

}