   import { ChakraProvider } from '@chakra-ui/react';
   import { render } from '@testing-library/react';
   import FilterBar from '../components/FilterBar';
   test('renders FilterBar', () => {
     render(
       <ChakraProvider>
         <FilterBar />
       </ChakraProvider>
     );
   });