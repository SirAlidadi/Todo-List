import React from 'react';
import Button from './Button';

export default function Todo({ text, completed }) {
  const checked = completed ? 'checked' : '';

  return (
    <li>
      <input type="checkbox" defaultChecked={checked} />
      <label>{ text }</label>
      <input type="text" />
      
      <Button type={'delete'} text={'Delete'} />
      <Button type={'edit'} text={'Edit'} />
    </li>
  );
}
