import Highlighter, { useHighlighter } from 'components/Highlighter.tsx'
import List from 'routes/compiler/List.tsx'
import { items } from 'routes/compiler/data.mock.ts'
import Counter from 'routes/compiler/Counter.tsx'
import {
  afterCompilerMemoExample,
  beforeCompilerMemoExample
} from 'routes/compiler/code/code-examples.ts'
import React from 'react'

export default function Memo() {
  const [count, setCount] = React.useState(0)
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    beforeCompilerMemoExample,
    afterCompilerMemoExample
  )

  const add = () => {
    setCount((p) => p + 1)
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
        <List items={items} />
        <Counter count={count} onAdd={add} />
      </div>
    </>
  )
}
