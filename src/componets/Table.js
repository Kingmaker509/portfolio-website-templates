import React from 'react'

const Table = ({item}) => {
  return (
    <>
      <table>
        <tr>
          <td>Name :</td>
          <td className='text-secondary'>{item.name}</td>
        </tr>
        <tr>
          <td>Date of birth :</td>
          <td className='text-secondary'>{item.dateOfBirth}</td>
        </tr>
        <tr>
          <td>Address :</td>
          <td className='text-secondary'>{item.address}</td>
        </tr>
        <tr>
          <td>Email :</td>
          <td className='text-secondary'>{item.email}</td>
        </tr>
        <tr>
          <td>Phone :</td>
          <td className='text-secondary'>{item.mobile}</td>
        </tr>
      </table>
    </>
  );
}

export default Table