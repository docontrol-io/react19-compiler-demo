import React, {useOptimistic} from 'react'
import {useOptimisticExample} from 'routes/actions/code/code-examples.ts'
import {updateName} from 'routes/actions/code/helpers.ts'
import Highlighter, {useHighlighter} from 'components/Highlighter.tsx' // function updateName(name: string) {
import 'shiki-magic-move/dist/style.css' // ===========================================================

// ===========================================================
interface ChangeNameProps {
  currentName: string
  onUpdateName: (name: string | null) => void
}
function ChangeName({ currentName, onUpdateName }: ChangeNameProps) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName)

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const submitAction = async (formData: any) => {
    const newName = formData.get('name')
    setOptimisticName(newName)
    const updatedName = await updateName(newName, 2000)
    onUpdateName(updatedName)
  }

  return (
    <form action={submitAction}>
      <p>
        (Optimistic) Your name is:{' '}
        <b className="text-fuchsia-600 text-xl">{optimisticName}</b>
      </p>
      <p className="mt-4">
        <label>Change Name:</label>
        <input
          className="p-4 border-1 border-neutral-200 rounded bg-slate-800"
          type="text"
          name="name"
        />
      </p>
    </form>
  )
}

// ===========================================================
export default function ActionsUseOptimistic() {
  const [name, setName] = React.useState('Ofer')
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    useOptimisticExample,
    useOptimisticExample
  )

  const onUpdateName = (name: string | null) => {
    setName(name ?? '')
  }
  return (
    <div>
      {highlighter && (
        <Highlighter
          highlighter={highlighter}
          code={code}
          isViewB={isViewB}
          switchView={switchView}
          hideButton
        />
      )}
      <h2 className="text-3xl my-8">Example</h2>
      <div className="flex items-start flex-col gap-8 pb-12">
        <div className="border border-amber-300 p-4">
          <div>
            <h3 className="text-amber-600">Parent</h3>
            <p>
              (Final result) Hi, My name is{' '}
              <b className="text-amber-600 text-xl">{name}</b>
            </p>
          </div>
          <div className="border border-fuchsia-400 p-4 my-4">
            <h3 className="text-fuchsia-600">Child</h3>
            <ChangeName currentName={name} onUpdateName={onUpdateName} />
          </div>
        </div>
      </div>
    </div>
  )
}
