import type { ListItem } from 'routes/compiler/data.mock.ts'
// import React from "react";
// import React from 'react'

interface ListProps {
  items: ListItem[]
  sortByName: (names: ListItem[]) => ListItem[]
}
export default function Names({ items, sortByName }: ListProps) {
  // ___ with useMemo ___
  // const sortedNames = React.useMemo(
  //   () => sortByName(items),
  //   [items, sortByName]
  // )

  // ___ without useMemo ___
  const sortedNames = sortByName(items)
  return (
    <div>
      {sortedNames.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
