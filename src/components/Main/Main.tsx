import {  
    Box, Button
} from '@chakra-ui/react'
import '../Main/Main.css'
import { BackgroundImagePrincipal, BackgroundImageMerlot } from './BgImage'

export const Main = () => {
    return(
        <>
            <Box className="mainPrincipal" bg='blackAlpha.800'>
                
                <Box className="main" bg='blackAlpha.800'>
                    <Box className='boxContent'>
                        <h1>Venha comprar com os <br /><span className='spanContent'>MELHORES</span> do mercado</h1>
                    </Box>

                    <Box className='boxImage'>
                        <BackgroundImagePrincipal />  
                    </Box>
                </Box>

                <Box className='mainMerlot' bg={'blackAlpha.300'}>
                    <Box className='boxImageMerlot'>
                        <BackgroundImageMerlot />  
                    </Box>

                    <Box className='boxContentMerlot'>
                        <h1>Variedade de vinhos <span className='spanContent'>IMPORTADOS</span><br /> e de <span className='spanContent'>QUALIDADE</span> do mercado</h1>
                    </Box>
                </Box>
            
            </Box>



            <Box padding={'0'} margin={'20px 0px 20px'} w={'100%'}>
                
                <Box w={'100vw'} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} textAlign={'center'} color={'#fff'}>
                    
                    <Box w={'25vw'} h={'30rem'} backgroundColor={'gray'} border={'1px solid #000'} borderRadius={'14px'}>
                        <h1>Brava Brazil - Matriz</h1>
                        <Button>
                            Acessar
                        </Button>
                    </Box>

                    <Box w={'25vw'} h={'30rem'} backgroundColor={'gray'} border={'1px solid #000'} borderRadius={'14px'}>
                        <h1>Brava Brazil - Aldeota</h1>
                        <Button>
                            Acessar
                        </Button>
                    </Box>

                    <Box w={'25vw'} h={'30rem'} backgroundColor={'gray'} border={'1px solid #000'} borderRadius={'14px'}>
                        <h1>Brava Brazil - Iguatemi</h1>
                        <Button>
                            Acessar
                        </Button>
                    </Box>
                
                </Box>
            
            </Box>
        </>
    )
}