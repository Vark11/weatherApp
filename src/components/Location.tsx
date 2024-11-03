import { ReactElement } from 'react';

interface LocationT {
  location: string;
  disabled: boolean;
}

export function Location({ location, disabled}: LocationT): ReactElement {
  
  return (
    <div className='location-div'>
      <label className='location-label'>Location name</label>
      <input className='location-input' disabled={disabled} defaultValue={location} placeholder='...'></input>
    </div>
  )
}