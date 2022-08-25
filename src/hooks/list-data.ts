import { useEffect, useState } from 'react'

const mockListData = [
  {
    title: 'title 1',
    desc: 'title 1 description',
  },
  {
    title: 'title 2',
    desc: 'title 2 description',
  },
  {
    title: 'title 3',
    desc: 'title 3 description',
  },
  {
    title: 'title 4',
    desc: 'title 4 description',
  },
  {
    title: 'title 5',
    desc: 'title 5 description',
  },
  {
    title: 'title 6',
    desc: 'title 6 description',
  },
]

export const useListData = () => {
  const [data, setData] = useState([...mockListData])
  useEffect(() => {
    console.log('data changed')
  }, [data])

  function addData(title: string, desc: string) {
    setData([...data, { title, desc }])
  }

  function resetData() {
    setData(mockListData)
  }

  return { data, setData, addData, resetData } as const
}
