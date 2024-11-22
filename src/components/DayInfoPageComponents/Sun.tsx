import { ReactElement } from 'react';

export function Sun(): ReactElement {

  return (
    <div className='sun'>
      <Sunrise />
      <Sunset />
    </div>
  );
}


function Sunrise(): ReactElement {

  return (
    <div className="sunrise">
      <div className='svg-sunrise-div'>
        <svg width="75" height="30" viewBox="0 0 91 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73.7719 29C73.7719 42 46 31 46 31C46 31 16 43 16 29C16 12.4315 28.1741 0 44.4665 0C60.7589 0 73.7719 12.4315 73.7719 29Z" fill="#F2480F"/>
        <path d="M3 33.5126H88" stroke="#1A1F21" stroke-width="5" stroke-linecap="round"/>
        <path d="M45.7071 5.29289C45.3166 4.90237 44.6834 4.90237 44.2929 5.29289L37.9289 11.6569C37.5384 12.0474 37.5384 12.6805 37.9289 13.0711C38.3195 13.4616 38.9526 13.4616 39.3431 13.0711L45 7.41421L50.6569 13.0711C51.0474 13.4616 51.6805 13.4616 52.0711 13.0711C52.4616 12.6805 52.4616 12.0474 52.0711 11.6569L45.7071 5.29289ZM46 27V6H44V27H46Z" fill="black"/>
        </svg>
      </div>
      
      <div className="sunrise-text">
        <div className='sunrise-title'>
          Sunrise:
        </div>
        <div className='no-info'>no info</div>
      </div>
    </div>
  );
}

function Sunset(): ReactElement {
  return (
    <div className="sunset">
      <div className='svg-sunset-div'>
        <svg width="75" height="30" viewBox="0 0 91 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73.7719 29C73.7719 42 46 31 46 31C46 31 16 43 16 29C16 12.4315 28.1741 0 44.4665 0C60.7589 0 73.7719 12.4315 73.7719 29Z" fill="#F2480F"/>
        <path d="M3 33.5126H88" stroke="#1A1F21" stroke-width="5" stroke-linecap="round"/>
        <path d="M44.2929 27.7071C44.6834 28.0976 45.3166 28.0976 45.7071 27.7071L52.0711 21.3431C52.4616 20.9526 52.4616 20.3195 52.0711 19.9289C51.6805 19.5384 51.0474 19.5384 50.6569 19.9289L45 25.5858L39.3431 19.9289C38.9526 19.5384 38.3195 19.5384 37.9289 19.9289C37.5384 20.3195 37.5384 20.9526 37.9289 21.3431L44.2929 27.7071ZM44 6V27H46V6H44Z" fill="black"/>
        </svg>
      </div>
      <div className="sunset-text">
        <div className='sunset-title'>
          Sunset:
        </div>
        <div className='no-info'>no info</div>
      </div>
    </div>
  );
}