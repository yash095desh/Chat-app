import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
function Home() {
  return (
  <Box  h={'100vh'} w={'100%'}  display={'flex'} justifyContent={{base:'center',md:'space-between'}} alignItems={'center'} fontFamily={'Poppins'} >
    <Box w={{base:'90%',md:'50%'}} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Box bg={'#f3f3f3'}  borderRadius={'12px'} w={'100%'} maxW={'500px'} p={3}>
    <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab width={'50%'} fontSize={'x-large'} fontWeight={600}>Login</Tab>
      <Tab width={'50%'}fontSize={'x-large'} fontWeight={600}>SignUp</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <SignIn/>
      </TabPanel>
      <TabPanel>
        <SignUp/>
      </TabPanel>
    </TabPanels>
  </Tabs>
    </Box>
    </Box>
   <Box h={'100vh'} w={'45%'} display={{base:'none',lg:'flex'}}  alignItems={'center'} justifyContent={'center'}>
   <img src="./login.jpg" alt="image" width={'100%'} height={'100%'}/>
   </Box>
  </Box>
  )
}

export default Home