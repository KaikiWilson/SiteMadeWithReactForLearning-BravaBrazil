import {  
    Box,
    Icon,
} from '@chakra-ui/react'
import { MoonIcon, BellIcon, PhoneIcon } from '@chakra-ui/icons'
import './Header.css'

// MoonIcon

export const Header = () => {
    return(

        <header className="boxMenu">
            
            <Box className="contentMenu" w='100%' bg='blackAlpha.900'>

                <Box className='boxSiteNameMenu' w='50%' h={'max-content'} padding={'10px'} borderRight={'1px solid lightgray'}>
                    <h1 className='siteNameMenu'>Brava Brazil<small><span className='siteNameMenuSpan'> S/A</span></small></h1>
                </Box>

                <Box className='boxLinksMenu' w='50%' padding={'10px'}>
                    <a className='linksMenu'>Products</a>
                    <a className='linksMenu'>About</a>
                    <a className='linksMenu'>Help</a>
                    
                </Box>
                
                <Box className='boxIconsMenu'>
                    <Box className='boxMoonIcon' padding={'5px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Icon as={BellIcon} color={'white'} />
                    </Box>

                    <Box className='boxMoonIcon' padding={'5px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Icon as={MoonIcon} color={'white'} />
                    </Box>

                    <Box className='boxMoonIcon' padding={'5px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Icon as={PhoneIcon} color={'white'} />
                    </Box>
                </Box>
                    
            </Box>
        
        </header>
    )
}