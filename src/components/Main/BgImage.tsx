import bgImage from './wine-glas.png'
import merlotImage from './merlot.svg'
import './Main.css'

export const BackgroundImagePrincipal = () => <img className='imgSettingsPrincipal' src={bgImage} alt="Vinho como fundo do conteúdo principal" width='300px' />

export const BackgroundImageMerlot = () => <img className='imgSettingsMerlot' src={merlotImage} alt="Vinho merlot content" width='400px' />