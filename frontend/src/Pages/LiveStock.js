import React, { useState } from 'react';
import { Box, VStack, HStack, Icon, Text } from '@chakra-ui/react';
import { FiDatabase, FiUpload, FiFileText, FiBarChart2, FiLayers, FiPlayCircle, FiRefreshCw } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';
import { uploadFileForPrediction } from '../services/api.js';

const SidebarItem = ({ icon, label }) => (
  <HStack
    spacing={3}
    p={3}
    borderRadius="md"
    _hover={{ backgroundColor: 'gray.100', cursor: 'pointer' }}
    width="full"
  >
    <Icon as={icon} boxSize={5} />
    <Text>{label}</Text>
  </HStack>
);

const LiveStock = () => {
  const [prediction, setPrediction] = useState(null);
  const [classification, setClassification] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*,video/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setLoading(true);
      setError(null);

      uploadFileForPrediction(file)
        .then((response) => {
          const { prediction, classification } = response.data.result;
          setPrediction(prediction);
          setClassification(classification);
        })
        .catch((error) => {
          setError('Error uploading the file or receiving the prediction.');
          console.error('Error details:', error.response ? error.response.data : error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <Box display="flex" minHeight="100vh">
      <Box as="nav" bg="white" w="350px" borderRight="1px solid #ddd" p={4} zIndex="1000" height="100vh">
        <VStack align="flex-start" spacing={4}>
          <SidebarItem icon={FiDatabase} label="Livestock Disease Classification" />
          <SidebarItem icon={FiUpload} label="Upload Data" />
          <SidebarItem icon={FiFileText} label="Annotate" />
          <SidebarItem icon={FiBarChart2} label="Dataset" />
          <SidebarItem icon={FiLayers} label="Analytics" />
          <SidebarItem icon={FiPlayCircle} label="Generate" />
          <SidebarItem icon={FiRefreshCw} label="Deployments" />
          <SidebarItem icon={FiRefreshCw} label="Active Learning" />
        </VStack>
      </Box>

      <Box flex="1" display="flex" flexDirection="column" alignItems="center" textAlign="center" p={6} background="#f1f1f1">
        <Box
          {...getRootProps()}
          style={{
            border: '4px dashed #ccc',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f1f1f1',
            width: '80%',
            height: '300px',
            cursor: 'pointer',
            background: 'linear-gradient(to bottom, #2980b9, #2c3e50)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input {...getInputProps()} />
          <img
            src={require('../Images/dropdown_image_icon.jpeg')}
            alt="Upload Icon"
            style={{ width: '100px', marginBottom: '20px', borderRadius: '30px' }}
          />
          {isDragActive ? (
            <p style={{ fontSize: '18px', color: '#fff' }}>Drop the files here...</p>
          ) : (
            <p style={{ fontSize: '18px', color: '#fff' }}>Drag and drop or Click here to upload Image or Video.</p>
          )}
          <p style={{ fontSize: '14px', color: '#ddd' }}>
            Image and video size must be less than 5 MB.
          </p>
        </Box>

        {loading && <Text mt={4} fontSize="lg" color="teal.500">Processing...</Text>}

        {error && <Text mt={4} fontSize="lg" color="red.500">{error}</Text>}

        {(prediction || classification) && (
          <Box mt={6} p={4} borderRadius="md" bg="white" boxShadow="md" width="80%">
            {prediction && (
              <Box mb={4}>
                <Text fontSize="lg" fontWeight="bold" color="teal.500">
                  Predicted Disease:
                </Text>
                <Text fontSize="md" color="gray.700">
                  {prediction}
                </Text>
              </Box>
            )}
            {classification && (
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="teal.500">
                  Classification:
                </Text>
                <Text fontSize="md" color="gray.700">
                  {classification}
                </Text>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LiveStock;
