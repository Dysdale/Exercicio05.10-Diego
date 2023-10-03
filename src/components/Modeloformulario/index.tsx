import React, { useState } from 'react';
import { Box, Button,ButtonGroup,Checkbox,Flex, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react';


function Obrabo() {

return (      <>      
  <p>
   <FormControl>
       <Heading size='md'>Lista de Tarefas </Heading>
   <FormLabel><p>
       </p>Inserir Nova Tarefa</FormLabel>
   <Input placeholder='Digite o titulo da task' htmlSize={20} width='auto' />, 
   <Checkbox defaultChecked> Realizada?</Checkbox><>  </>, 
    <Button colorScheme='blue'>Inserir</Button>
   </FormControl>
   </p>
<>
<p>.</p>   
</>
   <Flex minWidth='max-content' alignItems='center' gap='20'>
   <Box p='5'>
   <Heading size='md'>Tarefa 1</Heading>
</Box>
   <ButtonGroup gap='2'>
       <Button colorScheme='red'>Pendente</Button>
       <Button colorScheme='red'>Excluir</Button>
   </ButtonGroup>
   </Flex>

<Flex minWidth='max-content' alignItems='center' gap='20
'>
   <Box p='5'>
   <Heading backgroundColor={2} size='md'>Tarefa 2</Heading>
</Box>
   <ButtonGroup gap='2'>
       <Button colorScheme='red'>Pendente</Button>
       <Button colorScheme='red'>Excluir</Button>
   </ButtonGroup>
   </Flex>

   <Flex minWidth='max-content' alignItems='center' gap='20
'>
   <Box p='5'>
   <Heading backgroundColor={""} size='md'>Tarefa 3</Heading>
</Box>
   <ButtonGroup gap='2'>
       <Button colorScheme='red'>Pendente</Button>
       <Button colorScheme='red'>Excluir</Button>
   </ButtonGroup>
   </Flex>

          </>
)}

export default Obrabo;