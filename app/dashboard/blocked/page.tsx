import Table from '@/components/dashboard/Table'
import { blockedData } from '@/data/dashboard'
import React from 'react'

const Blocked = () => {
  return (
    <div className='w-full h-full'>
      <div className="flex items-center justify-center">
        <Table data={blockedData} blocked  />
      </div>
    </div>
  )
}

export default Blocked