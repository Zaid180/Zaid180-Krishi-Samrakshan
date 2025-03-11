import React from 'react';
import Typing from 'react-typing-effect';
import { Box, Text } from '@chakra-ui/react';

const TypingEffect = () => {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="3xl" fontWeight="bold" color="teal.500" >
        <Typing
          text={["कृषि संरक्षण में AI के साथ क्रांति ला रहे हैं"]}
          speed={100}
          eraseDelay={800}
          typingDelay={500}
        />
      </Text>
    </Box>
  )
}

export default TypingEffect
