export const beforeCompilerMemoExample = `
interface ListProps {
  items: ListItem[]
}
export default function React.memo(List({ items }: ListProps) {
  const sortedList = React.useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  )
  return (
    <div>
      {sortedList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
})
`

export const afterCompilerMemoExample = `
interface ListProps {
  items: ListItem[]
}
export default function List({ items }: ListProps) {
  const sortedList = items.sort((a, b) => a.name.localeCompare(b.name))
  return (
    <div>
      {sortedList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
`

export const beforeUseCallbackExample = `
interface ListProps {
  items: ListItem[]
  sortByName: (names: ListItem[]) => ListItem[]
}
export default function Names({ items, sortByName }: ListProps) {
   const sortedNames = React.useMemo(
     () => sortByName(items),
     [items, sortByName]
   )
  return (
    <div>
      {sortedNames.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
// ================================================================
export default function UseCallbackUseMemo() {

  const [count, setCount] = React.useState(0)

  const onAdd = () => {
    setCount((c) => c + 1)
  }

   const sortByName = React.useCallback(() => {
     console.log('sortByName')
     return items.sort((a, b) => a.name.localeCompare(b.name))
   }, [])



  return (
      <div className="flex items-center gap-8">
        <Counter count={count} onAdd={onAdd} />
        <Names items={items} sortByName={sortByName} />
      </div>
  )
}
`

export const afterUseCallbackExample = `
interface ListProps {
  items: ListItem[]
  sortByName: (names: ListItem[]) => ListItem[]
}
export default function Names({ items, sortByName }: ListProps) {
  const sortedNames = sortByName(items)
  return (
    <div>
      {sortedNames.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
// ================================================================

export default function UseCallbackUseMemo() {

  const [count, setCount] = React.useState(0)

  const onAdd = () => {
    setCount((c) => c + 1)
  }
  
  const sortByName = () => {
    console.log('sortByName')
    return items.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
      <div className="flex items-center gap-8">
        <Counter count={count} onAdd={onAdd} />
        <Names items={items} sortByName={sortByName} />
      </div>
  )
}

`
