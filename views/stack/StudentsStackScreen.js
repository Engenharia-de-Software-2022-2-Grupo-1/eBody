import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Students, Profile, NewProfileScreen, EditStudentScreen, NewEvaluation, MuscularGroups, WorkoutRotline, MeasurementScreen, Training } from '../component/Index'
import { Menu, Pressable, HamburgerIcon, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

function StudentsStackScreen() {

  const StudentsStack = createNativeStackNavigator();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <StudentsStack.Navigator>
      <StudentsStack.Screen 
        name="StudentsScreen" 
        component={Students}
        options={{
          title: "Estudantes",
          headerStyle: { backgroundColor: '#455d3b' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen
        name="Profile"
        component={Profile}
        options={({ route, navigation }) => ({
          title: route.params.nome,
          headerStyle: { backgroundColor: '#455d3b' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerRight: () => (
            <Box flexDirection="row" alignItems="center">
              <Menu
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                onOpen={handleMenuOpen}
                trigger={(triggerProps) => (
                  <Pressable {...triggerProps}>
                    <HamburgerIcon  style={{marginRight:7}} color="white" size="7"/>
                  </Pressable>
                )}
                placement="bottom end"
              >
                <Menu.Item
                  onPress={() => navigation.navigate('EditProfile', route.params)}
                >
                  EDITAR
                </Menu.Item>
                <Menu.Item
                  onPress={() => {
                    setSelectedOption('Opção 2');
                    handleMenuClose();
                    navigation.navigate('NewEvaluation'); // Redireciona para a tela 'NewEvaluation'
                  }}
                >
                  ADICIONAR MEDIDAS
                </Menu.Item>
                <Menu.Item
                  onPress={() => {
                    setSelectedOption('Opção 3');
                    handleMenuClose();
                    navigation.navigate('MuscularGroups'); // Redireciona para a tela 'MuscularGroups'
                  }}
                >
                  VISUALIZAR TREINOS
                </Menu.Item>
                <Menu.Item
                  onPress={() => {
                    setSelectedOption('Opção 4');
                    handleMenuClose();
                    navigation.navigate('Measurement'); // Redireciona para a tela 'Measurement'
                  }}
                >
                  GRÁFICOS DE MEDIDAS
                </Menu.Item>
              </Menu>
            </Box>
          ),
        })}
      />
      
      <StudentsStack.Screen
        name="NewProfile"
        component={NewProfileScreen}
        options={{
          title:"NOVO ALUNO",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen
        name="EditProfile"
        component={EditStudentScreen}
        options={{
          title:"Editar perfil",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen 
        name="NewEvaluation" 
        component={NewEvaluation}
        options={{
          title:"Novas medidas",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen 
        name="Training" 
        component={Training}
        options={{
          title:"Novo Treino",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen 
        name="MuscularGroups" 
        component={MuscularGroups}
        options={{
          title:"Grupos musculares",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen 
        name="WorkoutRotline" 
        component={WorkoutRotline}
        options={{
          title:"Exercícios",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

      <StudentsStack.Screen 
        name="Measurement" 
        component={MeasurementScreen}
        options={{
          title:"Medidas",
          headerStyle:{backgroundColor: '#455d3b'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center'
        }}
      />

    </StudentsStack.Navigator>  
  );
}

export default StudentsStackScreen;