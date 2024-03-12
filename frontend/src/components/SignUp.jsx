import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

function SignUp() {
  return (
    <Box>
    <Text my={1} color={'grey'} fontSize={'x-large'} fontFamily={"Work Sans"}>Join the Conversation!</Text>
  <FormControl display={'flex'} flexDir={'column'} gap={'1'}>
    <FormLabel fontWeight={'600'}>
        Name :
    </FormLabel>
    <Input placeholder='Enter your Name'/>
    <FormLabel fontWeight={'600'}>
        Email :
    </FormLabel>
    <Input placeholder='Enter your Email'/>
    <FormLabel fontWeight={'600'}>
        Password :
    </FormLabel>
    <Input placeholder='Enter your password'/>
    <FormLabel fontWeight={'600'}>
        Confirm Password :
    </FormLabel>
    <Input placeholder='Confirm password'/>
    <FormLabel fontWeight={'600'}>
        Upload Avatar :
    </FormLabel>
    <Input type='file' p={'1'}/>
    <Button bg={'#494CF3'} color={'white'} _hover={''} mt={5} >SignUp</Button>
  </FormControl>
    </Box>
  )
}

export default SignUp