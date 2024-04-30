import { Box, Flex, Input, Button, Text, Badge, VStack, HStack, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const developers = [
  { id: 1, name: 'Alice Johnson', location: 'New York', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Bob Smith', location: 'San Francisco', technologies: ['Angular', 'Python'] },
  { id: 3, name: 'Carol White', location: 'Toronto', technologies: ['Vue', 'PHP'] }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Particles Marketplace</Text>
      <Text mb={4}>Discover top software talent specialized in web technologies.</Text>
      <Input
        placeholder="Search by name, location, or technology..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <VStack align="stretch" spacing={4}>
        {filteredDevelopers.map(dev => (
          <Link to={`/developer/${dev.id}`} key={dev.id} style={{ textDecoration: 'none' }}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <HStack>
                <Text fontWeight="bold">{dev.name}</Text>
                <Spacer />
                <Text>{dev.location}</Text>
              </HStack>
              <HStack spacing={2} mt={2}>
                {dev.technologies.map(tech => (
                  <Badge key={tech} colorScheme="green">{tech}</Badge>
                ))}
              </HStack>
              <Button colorScheme="blue" mt={3}>Message</Button>
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;