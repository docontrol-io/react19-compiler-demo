import React, {useActionState} from 'react'
import {Alert, Button, Loading} from '@lemonsqueezy/wedges'
import {useActionStateExample, useFormStatusExample} from 'routes/actions/code/code-examples.ts'
import {LucideTriangleAlert} from 'lucide-react'
import {updateName} from 'routes/actions/code/helpers.ts'
import Highlighter, {useHighlighter} from 'components/Highlighter.tsx' // function updateName(name: string) {
import 'shiki-magic-move/dist/style.css'
import {useFormStatus} from 'react-dom' // =========================================================

// =========================================================
function SharedButtonComponent() {
  const formStatus = useFormStatus()
  console.log({ formStatus })
  return (
    <Button
      type="submit"
      disabled={formStatus.pending}
      isIconOnly={formStatus.pending}
    >
      {formStatus.pending ? <Loading size="xs" type="spinner" /> : 'Save'}
    </Button>
  )
}
// ===========================================================
export default function ActionsUseFormStatus() {
  const [name, setName] = React.useState('')
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    useActionStateExample,
    useFormStatusExample
  )

  const [error, submitAction] = useActionState(
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
          beforeText="without useFormStatus"
          afterText="with useFormStatus"
        />
      )}

      <h2 className="text-3xl my-8">Example</h2>
      <div className="flex items-center gap-8 pb-12">
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
          {/*============================================*/}
          <SharedButtonComponent />
        </form>
      </div>
    </div>
  )
}
