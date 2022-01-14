import React from 'react';
import { Box, Image, Text, Badge, Stack } from '@chakra-ui/react';
// import { Container } from './styles';

function PokemonCard(props) {
    return (
        <Stack bg='#E8D4D0' maxW='sm' p='1rem' color='white' alignContent='center' alignItems='center'>
            <Box alignContent='center' alignItems='center'>
                <Image src={props.imageUrl} borderRadius='10px' />
                <Badge>{props.tipo}</Badge>
                <Text>{props.nome}</Text>

            </Box>
        </Stack>
    )
}

export default PokemonCard;