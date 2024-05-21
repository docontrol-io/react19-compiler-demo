import Highlighter, {useHighlighter} from 'components/Highlighter.tsx'
import {afterUseCallbackExample, beforeUseCallbackExample} from 'routes/compiler/code/code-examples.ts'
import React from 'react'
import {items} from "routes/compiler/data.mock.ts";
import Names from "routes/compiler/Names.tsx";
import Counter from "routes/compiler/Counter.tsx";

export default function UseCallbackUseMemo() {
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    beforeUseCallbackExample,
    afterUseCallbackExample
  )

  const [count, setCount] = React.useState(0)

  const onAdd = () => {
    setCount((c) => c + 1)
  }

  // ___ with useCallback ___
  // const sortByName = React.useCallback(() => {
  //   console.log('sortByName')
  //   return items.sort((a, b) => a.name.localeCompare(b.name))
  // }, [])

  // ___ without useCallback ___
  const sortByName = () => {
    console.log('sortByName')
    return items.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <>
      {highlighter && (
        <Highlighter
          highlighter={highlighter}
          code={code}
          isViewB={isViewB}
          switchView={switchView}
          beforeText="without React compiler"
          afterText="with React compiler"
        />
      )}

      <h2 className="text-3xl my-8">Example</h2>
      {/*==============================================*/}
      <div className="flex items-center gap-8">
        <Counter count={count} onAdd={onAdd} />
        <Names items={items} sortByName={sortByName} />
      </div>
    </>
  )
}
