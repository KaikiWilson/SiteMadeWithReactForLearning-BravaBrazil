import { Layout } from "./Layout"
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from "./Main/Main"

export const Card = () => {
    return(
        <ChakraProvider>
            <Layout>
                <Main />
            </Layout>
        </ChakraProvider>
    )
}