import React, { useState } from 'react';
import { FlatList, TextInput, StyleSheet, View, Keyboard, Alert } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import PCsData from '../data/pcOptions.json';
import ProjectsData from '../data/projectOptions.json';
import AutocompleteComponent from '../Components/AutocompleteComponent';
import { MaterialIcons } from '@expo/vector-icons';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import styles from '../assets/StyleSheet';
import HomeListComponent from '../Components/HomeListComponent';
import CustomSnackbar from '../Controls/CustomSnackbar';
const ProjectSelection = ({ onNavigateToInventory }) => {
  const [pcValue, setPcValue] = useState('');
  const [projectValue, setProjectValue] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);  // State to control Snackbar visibility
  const [snackbarType, setSnackbarType] = useState('warning');  // State to control Snackbar type (danger, success, warning)
  const [snackbarMessage, setSnackbarMessage] = useState('Please select pc and project');   // State for message content
  const handleSelect = (item, index) => {
    console.log(item)
    if (index === 0) {
      setPcValue(item.value);
    } else {
      setProjectValue(item.value);
    }
  };
  //console.log("begin")
  const handleSubmit = () => {
    Keyboard.dismiss();  // Dismiss the keyboard if still open
    if (pcValue && projectValue) {
      Alert.alert('Selected Values', `Select PC: ${pcValue}, Select Project: ${projectValue}`);
      console.log('Selected Values', `Select PC: ${pcValue}, Select Project: ${projectValue}`);
      onNavigateToInventory();
      
    } else {
     onNavigateToInventory();
     // setSnackbarVisible(true);
      // Alert.alert('Error', 'Please select both PC and Project');
    }
  };
  const onDismissSnackbar = () => {
    setSnackbarVisible(false);  // Close the Snackbar after dismissal
  };

  return (

    <PaperProvider theme={DefaultTheme}>
      <View style={styles.paddingcontainer}>

        <AutocompleteComponent
          data={PCsData}
          onSelect={(value) => handleSelect(value, 0)}
          placeholder="Select PC(PCCE..)"
        />
        <View style={styles.bottomcontainer}>
        <AutocompleteComponent
       
          data={ProjectsData}
          onSelect={(value) => handleSelect(value, 1)}
          placeholder="Select Project(PROJECT...)"
        />
</View>
<View style={styles.bottomcontainer1}>
        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={handleSubmit}
          contentStyle={styles.buttonContent}
          style={[styles.button, styles.inputButtonStyle]}
          icon={() => <MaterialIcons name="arrow-forward" size={24} color="white" />}  // Right arrow icon
        >
          Use Selected Project

        </Button>
        <View style={styles.listcomponentcontainer} >
          <View>

            <HomeListComponent />

          </View>
          <View>

            <HomeListComponent />

          </View>
        </View>
        </View>

        {/* Custom Snackbar */}
        <CustomSnackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackbar}
          message={snackbarMessage}
          type={snackbarType}  // Pass type to display the respective background and icon
        />
      </View>




    </PaperProvider>
  );
};

export default ProjectSelection;
