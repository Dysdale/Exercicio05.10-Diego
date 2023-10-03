import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import ButtonFatec from "../../components/ButtonFatec/ButtonFatec";
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Heading, Spacer, Textarea } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'
  import { Badge } from '@chakra-ui/react'
  import { Container } from '@chakra-ui/react'
import Obrabo from "../../components/Modeloformulario";

export default function Tarefas(){
    return(
        <>    <Layout>
             <Obrabo/>
             </Layout>  
                   </>
        
    ) 

}