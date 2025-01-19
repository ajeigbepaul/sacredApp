"use client"
import Table from '@/components/dashboard/Table'
// import { blockedData } from '@/data/dashboard'
import { getActivities } from '@/services/api/activity';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const Blocked = () => {
  const type = "blocked"; // Example type
  const { data, isLoading } = useQuery({
    queryKey: ["fetchActivities", type], // Unique key for caching
    queryFn: () => getActivities(type),
    enabled: !!type, // Ensures query only runs when type is available
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
  });
  console.log(data?.data,"Blocked DATA")
  return (
    <div className='w-full h-full'>
      <div className="flex items-center justify-center">
        <Table data={data?.data} loading={isLoading} blocked tabletitle='Blocked Request list'  />
      </div>
    </div>
  )
}

export default Blocked