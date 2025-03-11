import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", backgroundColor: "#E6F4F1" }}>
      <Card maxW="sm" bg="white" p={6} borderRadius="30px" boxShadow="md" width={"700px"}>
        <CardBody>
          <Stack spacing={4}>
            <Heading size="lg" textAlign="center" color="teal.600">
              Contact Us
            </Heading>

            <FormControl>
              <Input
                placeholder="Your Name"
                bg="teal.50"
                borderColor="teal.100"
                focusBorderColor="teal.300"
              />
            </FormControl>

            <FormControl>
              <Input
                placeholder="Email Id"
                type="email"
                bg="teal.50"
                borderColor="teal.100"
                focusBorderColor="teal.300"
              />
            </FormControl>

            <FormControl>
              <Input
                placeholder="Phone no."
                type="tel"
                bg="teal.50"
                borderColor="teal.100"
                focusBorderColor="teal.300"
              />
            </FormControl>

            <FormControl>
              <Textarea
                placeholder="How can we help?"
                bg="teal.50"
                borderColor="teal.100"
                focusBorderColor="teal.300"
                resize="none"
              />
            </FormControl>
          </Stack>
        </CardBody>
        <CardFooter justifyContent="center">
          <Button width="100%" colorScheme="teal">
            Send
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactUs;
