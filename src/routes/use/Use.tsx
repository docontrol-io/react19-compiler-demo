import Highlighter, {useHighlighter} from 'components/Highlighter.tsx' // function updateName(name: string) {
import 'shiki-magic-move/dist/style.css'
import {useWithContextExample, useWithPromiseExample} from 'routes/use/code/code-examples.ts'
import React from 'react'

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}
// ===========================================================
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function Users({ usersPromise }: { usersPromise: Promise<any> }) {
  // `use` will suspend until the promise resolves.
  const users = React.use(usersPromise)

  return (
    <ul>
      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// ===========================================================
export default function Use() {
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    useWithPromiseExample,
    useWithContextExample
  )
  // ======================================================
  const usersPromise = fetchUsers()

  return (
    <div>
      {highlighter && (
        <Highlighter
          highlighter={highlighter}
          code={code}
          isViewB={isViewB}
          switchView={switchView}
          beforeText="use with promise"
          afterText="use with context"
        />
      )}

      <h2 className="text-3xl my-8">Example</h2>
      <div className="flex items-center gap-8 pb-12">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Users usersPromise={usersPromise} />
        </React.Suspense>
      </div>
    </div>
  )
}
