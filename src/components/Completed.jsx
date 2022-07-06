import React from 'react';
import Button from './Button';

export default function Completed() {
  return (
    <>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox"/>
          <label>See the Doctor</label>
          <input type="text" />
          
          <Button type={'delete'} text={'Delete'} />
          <Button type={'edit'} text={'Edit'} />
        </li>
      </ul>
    </>
  );
}
