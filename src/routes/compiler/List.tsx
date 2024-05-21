import type {ListItem} from "routes/compiler/data.mock.ts";

interface ListProps {
  items: ListItem[]
}
export default function List({ items }: ListProps) {
  const sortedList = items.sort((a, b) => a.name.localeCompare(b.name))
  console.log(sortedList)
  return (
    <div>
      {sortedList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
