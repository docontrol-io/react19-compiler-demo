import React, {useActionState} from 'react'
import {Alert, Button, Loading} from '@lemonsqueezy/wedges'

import 'shiki-magic-move/dist/style.css'

import {afterUseTransition, useActionStateExample} from 'routes/actions/code/code-examples.ts'
import {LucideTriangleAlert} from 'lucide-react'
import Highlighter, {useHighlighter} from 'components/Highlighter.tsx'
import {updateName} from "routes/actions/code/helpers.ts"; // function updateName(name: string) {

export default function ActionsUseActionState() {
  const [name, setName] = React.useState('')
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    afterUseTransition,
    useActionStateExample
  )

  const [error, submitAction, isPending] = useActionState(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    async (previousState: any, formData: any) => {
      console.log({ previousState })
      const error = await updateName(formData.get('name'))
      if (error) {
        return error
      }
      return null
    },
    null
  )

  return (
    <div>
      {highlighter && (
        <Highlighter
          highlighter={highlighter}
          code={code}
          isViewB={isViewB}
          switchView={switchView}
          beforeText="without useActionState"
          afterText="with useActionState"
        />
      )}

      <h2 className="text-3xl my-8">Example</h2>
      <div className="flex items-start flex-col gap-8 pb-12">
        <form action={submitAction} className="flex flex-col gap-4">
          {error && (
            <Alert
              color="error"
              title={error}
              before={<LucideTriangleAlert />}
              closable
            />
          )}

          <input
            className="p-4 border-1 border-neutral-200 rounded bg-slate-800"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit" disabled={isPending} isIconOnly={isPending}>
            {isPending ? <Loading size="xs" type="spinner" /> : 'Save'}
          </Button>
        </form>
      </div>
    </div>
  )
}
