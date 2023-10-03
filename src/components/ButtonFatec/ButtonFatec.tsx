import { Button } from '@chakra-ui/button'

interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props) {

    return(
        <Button size='lg' colorScheme='red' type={type}>
            {label}

        </Button>

                 

    )
}

export default ButtonFatec