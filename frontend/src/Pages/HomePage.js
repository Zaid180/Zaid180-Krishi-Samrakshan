import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <VStack spacing={8} align="center" p={5}>
      

      <Image
        src={require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/risk_prediction_map.jpg")}
        alt="Risk Prediction of Lumpy Skin Diseases"
        boxShadow="lg"
        borderRadius="md"
        maxW="100%"
        width={"30vw"}
      />
    </VStack>
  );
};

export default HomePage;

