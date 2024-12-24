// MasterLayout.js
import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import Header from "../Components/Header";
import LeftToggleMenu from "../Controls/LeftToggleMenu";
import MainContent from "../Components/MainContent";
import styles from "../assets/StyleSheet";
import ProjectSelection from "../Pages/ProjectSelection";
import PendingTransactions from "../Pages/PendingTransactions";
import PendingTimesheets from "../Pages/PendingTimesheets";
import CribCrawl from "../Pages/CribCrawl";
import Inventory from "../Pages/Inventory";
import ListProductDetails from "../Components/ListProductDetails";
import ProductDetails from "../Pages/ProductDetails";
import NewTransaction from "../Pages/NewTransaction";
import TransactionReview from "../Pages/TransactionReview";
import JobDetails from "../Pages/JobDetails";

const MasterLayout = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(
    <Text style={styles.welcometext}>Welcome! Select a menu item.</Text>
  ); // Set Text wrapped inside Text component
  const [pageTitle, setPageTitle] = useState("Welcome!");
  const [showBackButton, setShowBackButton] = useState(false);
  const [navigationStack, setNavigationStack] = useState([]);

  const handleMenuClick = (content) => {
    if (navigationStack[navigationStack.length - 1] !== content) {
      setNavigationStack((prevStack) => [...prevStack, content]);
    }

    setShowBackButton(content !== "Home");

    switch (content) {
      
      case "Home":
        setPageTitle("Home - Project Selection");
        setSelectedContent(
          <ProjectSelection onNavigateToInventory={navigateToInventory} />
        ); // Pass the navigation function
        break;
      case "Pending Transactions":
        setPageTitle("Pending Transactions");
        setSelectedContent(<PendingTransactions />);
        break;
        case "New Transaction":
          setPageTitle("New Transaction");
          setSelectedContent(<NewTransaction onNavigatetojobdetails={navigatetojobdetails}  onNavigateToReviewscreen={NavigateToReviewscreen} />);
          break;
      case "Pending Timesheets":
        setPageTitle("Pending Timesheets");
        setSelectedContent(<PendingTimesheets />);
        break;
      case "CRIB CRAWL":
        setPageTitle("Crib Crawl");
        setSelectedContent(<CribCrawl />);
        break;

        case "Review Screen":
          setPageTitle("Review Screen");
          setSelectedContent(<TransactionReview  onNavigateToTransactionScreen={onNavigatetoNewTransaction}/>);
          break;
      case "List Product Details":
        setPageTitle("List Product Details");
        setSelectedContent(
          <ListProductDetails
            onNavigateToProductDetails={navigateToProductDetails}
          />
        );
        break;
      case "Inventory":
        setPageTitle("Inventory");
        setSelectedContent(
          <Inventory onNavigateToProductDetails={navigateToProductDetails} />
        );
        break;
      default:
        setPageTitle("Welcome!");
        setSelectedContent(
          <Text style={styles.welcometext}>Welcome! Select a menu item.</Text>
        );
    }
    setMenuVisible(false); // Close the menu after selection
  };
  const navigateToInventory = () => {
    console.log("Navigate to Inventory");
    handleMenuClick("Inventory"); // Change to Inventory component
  };


  const NavigateToReviewscreen = () => {
    console.log("Navigate to review screen");
    handleMenuClick("Review Screen"); // Change to Inventory component
  };


  const navigatetojobdetails = () => {
    console.log("Navigate to job details");
    setPageTitle("NEW TRANSACTION");
    setSelectedContent(<JobDetails onNavigateToTransactionScreen={onNavigatetoNewTransaction} onNavigateToProjectSelection={navigateToProjectSelection}/>);
  };

  
  const onNavigatetoNewTransaction = () => {
    console.log("Navigate to new transaction");
    handleMenuClick("New Transaction"); // Change to Inventory component
  };

  const navigateToProjectSelection = () => {
    console.log("Navigate to Home");
    handleMenuClick("Home"); // Change to Inventory component
  };

  
  // const navigateToProductDetails = (product) => {
  //     console.log("Navigate to Product Details:", product);
  //     handleMenuClick("Product Details", product);
  // };

  const navigateToProductDetails = (product) => {
    console.log("Navigate to Product Details:", product);
    setPageTitle("Product Details");
    setSelectedContent(<ProductDetails product={product} />);
    setShowBackButton(true);
    setNavigationStack((prevStack) => [...prevStack, "Product Details"]);
  };
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleBackgroundPress = () => {
    if (isMenuVisible) {
      setMenuVisible(false); // Hide the menu when background is pressed
    }
  };
  const handleBackPress = () => {
    setNavigationStack((prevStack) => {
      const newStack = [...prevStack];
      newStack.pop();
      const previousPage = newStack[newStack.length - 1];

      if (previousPage) {
        switch (previousPage) {
      
          case "Home":
            setPageTitle("Home - Project Selection");
            setSelectedContent(
              <ProjectSelection onNavigateToInventory={navigateToInventory} />
            ); // Pass the navigation function
            break;
          case "Pending Transactions":
            setPageTitle("Pending Transactions");
            setSelectedContent(<PendingTransactions />);
            break;
          case "Pending Timesheets":
            setPageTitle("Pending Timesheets");
            setSelectedContent(<PendingTimesheets />);
            break;
          case "CRIB CRAWL":
            setPageTitle("Crib Crawl");
            setSelectedContent(<CribCrawl />);
            break;
          case "List Product Details":
            setPageTitle("List Product Details");
            setSelectedContent(
              <ListProductDetails
                onNavigateToProductDetails={navigateToProductDetails}
              />
            );
            break;
          case "Inventory":
            setPageTitle("Inventory");
            setSelectedContent(
              <Inventory onNavigateToProductDetails={navigateToProductDetails} />
            );
            break;
          default:
            setPageTitle("Welcome!");
            setSelectedContent(
              <Text style={styles.welcometext}>Welcome! Select a menu item.</Text>
            );
        }
        setShowBackButton(newStack.length > 1);
      } else {
        setPageTitle("Welcome!");
        setSelectedContent(<Text>Welcome! Select a menu item.</Text>);
        setShowBackButton(false);
      }

      return newStack;
    });
  };

  return (
    <View style={styles.container}>
      <Header onToggle={toggleMenu} title={pageTitle} 
      showBackButton={showBackButton}
      onBackPress={handleBackPress}
      
      />
      <TouchableWithoutFeedback onPress={handleBackgroundPress}>
        <View style={styles.mainContainer}>
          {isMenuVisible && (
            <View style={styles.overlay}>
              <LeftToggleMenu onMenuClick={handleMenuClick} />
            </View>
          )}
         
          <MainContent
            renderComponent={selectedContent}
            style={styles.content}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MasterLayout;
