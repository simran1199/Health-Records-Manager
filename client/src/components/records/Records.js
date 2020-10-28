import React, { Fragment, useContext } from 'react'
import RecordContext from '../../context/record/recordContext';
import RecordItem from './RecordItem';
import RecordState from '../../context/record/RecordState';

const Records = () => {
    const recordContext = useContext(RecordContext);

    const { records } = recordContext;

  return (
    <Fragment>
      {records.map(record => (
      <RecordItem key={record.id} record={record} />
      ))}
    </Fragment>
  )
}

export default Records
