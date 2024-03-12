import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

function SignIn() {
  return (
    <Box>
        <Text my={5} color={'grey'} fontSize={'large'} fontFamily={"Work Sans"}>Connect and Chat: Log in to Your Account</Text>
      <FormControl display={'flex'} flexDir={'column'} gap={'2'}>
        <FormLabel fontWeight={'600'}>
            Email :
        </FormLabel>
        <Input placeholder='Enter your Email'/>
        <FormLabel fontWeight={'600'}>
            Password :
        </FormLabel>
        <Input placeholder='Enter your password'/>
        <Button bg={'#494CF3'} color={'white'} _hover={''} mt={5} >Login</Button>
      </FormControl>
    </Box>
  )
}

export default SignIn