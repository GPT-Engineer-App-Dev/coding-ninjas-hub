import { Box, Text, Button, Badge, VStack, HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const developers = [
  { id: 1, name: 'Alice Johnson', location: 'New York', technologies: ['React', 'Node.js'], bio: 'Experienced Frontend Developer with a demonstrated history of working in the internet industry.' },
  { id: 2, name: 'Bob Smith', location: 'San Francisco', technologies: ['Angular', 'Python'], bio: 'Full Stack Developer skilled in both frontend and backend technologies.' },
  { id: 3, name: 'Carol White', location: 'Toronto', technologies: ['Vue', 'PHP'], bio: 'Dedicated and efficient full stack developer with experience in application layers, presentation layers, and databases.' }
];

const DeveloperDetails = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    const foundDeveloper = developers.find(dev => dev.id.toString() === id);
    setDeveloper(foundDeveloper);
  }, [id]);

  if (!developer) {
    return <Box p={5}><Text>No developer found.</Text></Box>;
  }

  return (
    <Box p={5}>
      <VStack align="stretch" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">{developer.name}</Text>
        <Text>{developer.location}</Text>
        <Text>{developer.bio}</Text>
        <HStack spacing={2}>
          {developer.technologies.map(tech => (
            <Badge key={tech} colorScheme="green">{tech}</Badge>
          ))}
        </HStack>
        <Button colorScheme="blue" mt={3}>Send Message</Button>
      </VStack>
    </Box>
  );
};

export default DeveloperDetails;