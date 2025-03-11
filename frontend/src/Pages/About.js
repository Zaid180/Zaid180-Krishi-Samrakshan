import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  CardHeader,
  CardFooter,
  Button,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div
      style={{
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        minHeight: "50vh", // Makes sure the background covers the entire height of the page
        padding: "20px", // Adds padding around the content
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px", // Adds space between the cards
      }}
    >
      <Card maxW="sm" shadow="md" borderRadius="lg">
        <CardBody>
          <Image
            src={require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/6183551_3053975.jpg")}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            {/* <Heading size="md">Living room Sofa</Heading> */}
            <Text style={{ fontWeight: "600", fontFamily: "revert" }}>
              At the Farmers Disease Diagnostic/Reporting Portal, our mission is
              to empower farmers with the tools and knowledge they need to
              safeguard the health of their crops and livestock. By leveraging
              the power of Artificial Intelligence (AI), we aim to revolutionize
              agricultural health management, making it more accessible,
              efficient, and effective for farmers everywhere.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>

      <Card maxW="sm" shadow="md" borderRadius="lg">
        <CardBody>
          <Image
            src={require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/WhatsApp Image 2024-08-31 at 13.11.02.jpeg")}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            {/* <Heading size="md">Living room Sofa</Heading> */}
            <Text style={{ fontWeight: "600", fontFamily: "revert" }}>
              We are a dedicated team of agricultural experts, technologists,
              and AI specialists committed to enhancing the productivity and
              sustainability of farms around the world. Our collective
              experience spans various fields, including agronomy, veterinary
              science, AI development, and rural development. Together, we are
              passionate about creating innovative solutions that address the
              unique challenges faced by farmers, particularly in remote or
              resource-limited areas.
            </Text>
            {/* <Text color="blue.600" fontSize="2xl">
              $450
            </Text> */}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>

      <Card maxW="sm" shadow="md" borderRadius="lg">
        <CardBody>
          <Image
            src={require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/why-choose-us-question-with-paper-lightbulb.jpg")}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            {/* <Heading size="md">Living room Sofa</Heading> */}
            <Text style={{ fontWeight: "600", fontFamily: "revert" }}>
            Our platform uses state-of-the-art AI algorithms to provide fast, accurate, and actionable insights, helping farmers make informed decisions.
             </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>

      <Card maxW="sm" shadow="md" borderRadius="lg">
        <CardBody>
          <Image
            src={require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/WhatsApp Image 2024-08-31 at 13.10.38.jpeg")}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            {/* <Heading size="md">Living room Sofa</Heading> */}
            <Text style={{ fontWeight: "600", fontFamily: "revert" }}>
              Our platform provides farmers with an AI-powered mobile portal
              designed to diagnose and report diseases affecting crops and
              livestock. Through this portal, farmers can:
              <ul>
                <li>Diagnose Diseases</li>
                <li>near healthcare</li>
              </ul>
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default About;
