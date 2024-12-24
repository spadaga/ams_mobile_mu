// styles/StyleSheet.js
import { StyleSheet } from "react-native";
import {
  colors,
  iconStyles,
  bordersToken,
  fontSizes,
  spacings,
  borderRadius,
  boxShadow,
  buttonStyles,
  autocompleteStyles,
} from "./DesignTokens"; // Adjust the path as needed

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headercontent: {
    alignItems: "center",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSizes.title, // Use title size for the header
  },
  iconColor: {
    color: colors.white,
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: fontSizes.large,
  },
  container: {
    flex: 1,
   
  
   
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: spacings.none, // Using token for margin top
    
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: spacings.none, // Use spacing token
    overflow:"auto"
  },
  menuContainer: {
    flex: 1,
    maxWidth: 239, // Optionally replace with a width token if applicable
    backgroundColor: colors.white,
    paddingTop: spacings.none, // Using token
    borderRightWidth: 1,
    borderColor: colors.border,
    ...boxShadow,
  },
  scrollView: {
    flexGrow: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacings.small, // Using token
  },
  menuTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: spacings.small, // Using token
  },
  menuText: {
    color: colors.black,
  },
  line: {
    height: 1,
    backgroundColor: colors.border, // Using token
    marginTop: spacings.none, // Using token
  },
  usericonColor: {
    color: colors.white,
  },
  menuiconColor: {
    color: colors.error,
  },
  centeredView: {
    alignItems: "center",
    marginVertical: spacings.small, // Using token
    backgroundColor: colors.primary,
    marginTop: spacings.none, // Using token
  },
  centeredText: {
    color: colors.white,
    marginTop: spacings.small, // Using token
    marginBottom: spacings.medium, // Using token
  },
  iconButton: {
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.error,
    borderRadius: borderRadius.medium, // Using token
    height: buttonStyles.height, // Using token
    padding: buttonStyles.padding, // Using token
    tintColor: colors.error,
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: spacings.large, // Using token
    backgroundColor: colors.lightGray, // Move this to tokens if needed
  },
  iconstyle: {
    padding: spacings.small, // Using token
  },

  // textInput: {

  // },
  iconContainer: {
    justifyContent: "center",
    height: "100%",
  },
  // dropdown: {
  //     maxHeight: 150, // Move this to tokens if commonly reused
  //     borderWidth: 1,
  //     borderColor: colors.border,
  // },
  item: {
    padding: spacings.small, // Using token
    borderBottomWidth: 1,
    borderBottomColor: colors.border, // Using token
  },
  text: {
    fontSize: fontSizes.medium, // Using token
  },
  errorText: {
    color: colors.error,
    fontSize: fontSizes.small, // Using token
  },
  scrollContainer: {
    flex: 1,
  },
  paddingcontainer: {
    padding: spacings.medium, // Using token
   
  },
  inputButtonStyle: {
    width: "100%",
    maxWidth: "100%",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  button: {
    marginTop: spacings.medium, // Using token
    backgroundColor: colors.secondary, // Using token
    alignSelf: "center",
    borderRadius: borderRadius.small, // Using token
    height: buttonStyles.height, // Using token
    padding: buttonStyles.padding, // Using token
    justifyContent: "center",
    textTransform: "uppercase",
  },
  buttonContent: {
    flexDirection: "row-reverse",
    padding: spacings.small, // Using token
    textTransform: "uppercase",
  },
  welcometext: {
    fontSize: fontSizes.title, // Using token
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  autocompleteContainer: {
    marginBottom: spacings.large, // Using token
    marginVertical: spacings.small, // Using token
    width: "100%",
  },
  inputborder: {
    borderColor: "#03A9F4",
  },
  inputContainer: {
    // height: autocompleteStyles.height, // Using token
    // paddingRight: spacings.medium, // Using token
    // flexDirection: 'row',
    // alignItems: 'center',
    // borderWidth: 1,
    flex: 1, // Make the input container take up available space
    borderColor: colors.border,
    position: "relative",
    borderWidth: 1,

    borderRadius: borderRadius.small, // Using token
    backgroundColor: colors.white, // Using token
    elevation: boxShadow.elevation1, // Using token
  },
  inputContainerFocused: {
    borderColor: "rgb(3, 169, 244)", // Apply the specified border color
    borderWidth: 1,
  },
  label: {
    position: "absolute",
    left: spacings.small, // Using token
    color: colors.label, // Using token
    backgroundColor: colors.white, // Using token
    paddingHorizontal: spacings.extraSmall, // Using token
    transition: "all 0.2s ease",
  },
  textInput: {
    height: autocompleteStyles.height, // Using token
    fontSize: fontSizes.input, // Using token
    paddingVertical: spacings.small, // Using token
    paddingHorizontal: spacings.small, // Using token
    borderWidth: 1,
  },
  textInputFocused: {
    borderColor: "transparent",
  },
  iconContainer: {
    position: "absolute",
    right: spacings.small, // Using token
    top: "50%",
    transform: [{ translateY: -10 }],
    height: 40, // Adjust height as needed
    width: 40, // Adjust width as needed
    borderLeftColor: "#a8a8a8",
    borderLeftWidth: "1px",
    height: "56px",
    lineHeight: "56px",
    top: "9px",
    justifyContent: "center",
    padding: "12px",
  },
  dropdown: {
    maxHeight: 150, // Consider adding a dropdown max height token
    borderWidth: 1,
    borderColor: colors.borderLight, // Using token
    backgroundColor: colors.white, // Using token
    borderRadius: borderRadius.small, // Using token
    top: 56, // Adjust this value as needed
    marginTop: 5, // Space between the dropdown and the label
    zIndex: 1,
    elevation: boxShadow.elevation1, // Using token
    position: "absolute",
    width: "100%",
    zIndex: 99999, // Ensure the dropdown is on top
  },
  item: {
    padding: spacings.small, // Using token
  },
  text: {
    fontSize: fontSizes.medium, // Using token
    color: colors.black, // Using token
  },
  errorText: {
    color: colors.error, // Using token
    marginTop: spacings.small, // Using token
  },

  boxContainer: {
    flexDirection: "row", // Row alignment for icon, text, and chevron
    alignItems: "center", // Center content vertically
    borderTopWidth: bordersToken.default.width, // Top border
    borderBottomWidth: bordersToken.default.width, // Bottom border
    borderColor: bordersToken.default.color, // Border color
    paddingVertical: spacings.medium, // Padding inside the box
  },
  leftIcon: {
    marginLeft: spacings.small, // Left margin for spacing
    marginRight: spacings.medium, // Space between icon and text
    color: colors.lefticon, // Adjust color as needed
    fontSize: iconStyles.chevronSize, // Icon size
  },
  text: {
    flex: 1, // Take up remaining space in the middle
    fontSize: 16, // Text size
    color: colors.black, // Text color
  },
  rightIconWrapper: {
    height: iconStyles.circleSize, // Circle height
    width: iconStyles.circleSize, // Circle width
    borderRadius: iconStyles.circleSize / 2, // Makes the circle
    backgroundColor: colors.secondary, // Background color for circle
    justifyContent: "center", // Center the chevron vertically
    alignItems: "center", // Center the chevron horizontally
    marginRight: spacings.small, // Right margin for the chevron
  },
  rightChevron: {
    color: colors.white, // Chevron color
    fontSize: iconStyles.chevronSize, // Chevron size
  },
  listcomponentcontainer: {
    flex: 1,
    marginTop: spacings.medium,
  },
  snackbarContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8, // Reduced horizontal padding
    minHeight: 40, // Set minimum height for the content
  },
  icon: {
    marginRight: 8,
  },
  snackbarMessage: {
    color: "white",
    flex: 1, // Ensure the message takes up available space
    fontSize: 18, // Smaller font size to reduce height
  },
  closeIcon: {
    marginLeft: 8,
  },

  bannerContainer: {
    position: "sticky",
    top: 0, // Sticks right below the header
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray, // Use the light gray color from tokens
    padding: spacings.medium, // Use spacing token
    borderBottomWidth: bordersToken.default.width, // Use border token
    borderBottomColor: colors.borderLight, // Use border color from tokens
  },
  bannericonContainer: {
    backgroundColor: colors.secondary, // Use the secondary color from tokens
    borderRadius: "100%", // Adjust the radius using a token
    padding: spacings.small, // Use small padding from tokens
    marginRight: spacings.small, // Use small margin from tokens
  },
  bannerText: {
    fontSize: fontSizes.large, // Use medium font size from tokens
    color: colors.black, // Use black color from tokens
    flex: 1, // Ensure the text takes up remaining space
  },
  // Use icons if needed
  bannerIcon: {
    color: colors.white, // Icon color can match the text for contrast
    fontSize: iconStyles.chevronSize, // Ensure the icon size matches design
  },

  actionButton: {
    marginLeft: 16, // Space between dropdown and button
    height: 56, // Match the dropdown height for alignment
    justifyContent: "center", // Vertically center the button text
  },
  actionsDropdownButton: {
    backgroundColor: "#f4f4f4", // Matching the style of your app
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  selectcontainer: {
    padding: 20,
    width: "100%",
  },
  dropdownItemText: {
    fontSize: 16,
  },
  dropdownStyle: {
    maxHeight: 200, // Material guideline height for dropdown
  },
  selectarrowIcon: {
    fontSize: 18,
    position: "absolute",
    right: 16,
  },
  selectselectedText: {
    marginTop: 20,
  },

  dropdownButtonWrapper: {
    flexDirection: "row",
    alignItems: "center", // Vertically align dropdown and button
    justifyContent: "space-between", // Pushes the button to the right side
    marginTop: 0,
  },

  dropdownContainer: {
    flex: 1, // Takes available space to allow the button to align on the right
  },
  actionButton: {
    height: 56, // Match the dropdown height for alignment
    justifyContent: "center", // Vertically center the button text
    marginLeft: 16, // Adds space between dropdown and button
    borderRadius: 5,
    backgroundColor: "#2370B3",
  },
  searchContainer: {
    // zIndex: -1, // Ensure the search container is below the dropdown

    // marginTop: 20,
    // borderRadius: borderRadius.none,
    // flexDirection: "row",
    // alignItems: "center",

  
  },

  searchInput: {
    height: 56,
    fontSize: 18,
    backgroundColor: "white",
    borderColor: "rgb(3, 169, 244)", // Apply the specified border color
    borderWidth: 1,
    borderLeftWidth: 2,
    borderLeftColor: "rgb(3, 169, 244)", // Left border color for the search input
    borderRightWidth: 2,
    borderRightColor: "rgb(3, 169, 244)", // Right border color for the search input
    paddingLeft: 16,
    paddingRight: 29,

  },

  searchiconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 56, // Match the height of the TextInput
    borderLeftWidth: 2, // Add left border
    borderLeftColor: "rgb(3, 169, 244)", // Set the color of the left border
    borderRightWidth: 2, // Add right border
    borderRightColor: "rgb(3, 169, 244)", // Set the color of the right border
    padding: "8px",
    paddingTop: 0,
    paddingBottom: 0,
   
  },
  righticon: {
    // height: 56, // Ensure the icon wrapper matches the height of the TextInput
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  controlcontainer: {
    zIndex: -1, // Ensure the control container is on top
  },
  bottomcontainer: {
    zIndex: -1,
  },
  bottomcontainer1: {
    zIndex: -2,
  },
  floatingcontainer: {
    marginVertical: 10,
  },
  inputborder: {
    borderColor: "rgb(3, 169, 244)", // Apply the specified border color
    borderWidth: 1,
  },
  scanButton: {
    marginLeft: 0, // Gap between the elements
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, // Match the height of the TextInput
    width: 60, // Set the width to 60px
    // borderLeftWidth: 2,
    // borderLeftColor: 'rgb(3, 169, 244)', // Set the color of the left border
    // borderBottomWidth:1,
    // borderBottomColorColor:'rgb(128, 128, 128)', 
    // backgroundColor: colors.primary, // Button background color
    borderRadius: borderRadius.small, // Button border radius
    borderWidth: 0, // Border width
    borderColor: 'rgba(0, 0, 0, 0.45)', // Border color
    elevation: boxShadow.elevation1, // Add shadow for button effect
    opacity: "0.55"
    
   
  },
  searchandscanwrapper:
  {
    flexDirection: "row",
    alignItems: "center", // Vertically align dropdown and button
    justifyContent: "space-between", // Pushes the button to the right side
    marginTop: 20,
    zIndex:-1

  },
  searchContainer:
  {
    flex:1,
    marginRight:10
  },
  chevronCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  InvboxContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginTop:"16px"
  },
  productDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },

 scanImage: {
    width: 56,
    height: 56,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productDescription: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  productLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  productValue: {
    fontSize: 18,
    color: '#666',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    alignSelf: 'stretch', // This will make the divider stretch to the height of its parent
  },
  chevronIcon: {
    marginLeft: 10,
  },productList: {
    marginTop: 10,
  },

  productList: {
    flex: 1,
    zIndex:-1
  },
  scrollViewContent: {
    marginBottom: 200,
  },

  greenlabel:
  {
    color:"green"
  }
  ,
  scrollingcontainer:
  {
    display:"flex",
    flex:1,
    overflow:"scroll"
  },


  textContainer: {
    flex: 1, // Allow the text container to expand
    justifyContent: 'center', // Center text vertically
  },
  bannerSubHeader: {
    fontSize: 14, // Font size for the sub-header
    color: 'gray', // Color of the sub-header text
  },
});

export default styles;
