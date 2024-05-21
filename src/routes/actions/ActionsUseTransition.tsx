import React from 'react'
import {Alert, Button, Loading} from '@lemonsqueezy/wedges'
import {LucideCheck, LucideTriangleAlert} from 'lucide-react'


import {afterUseTransition, beforeUseTranition} from 'routes/actions/code/code-examples.ts'
import {updateName} from 'routes/actions/code/helpers.ts'

import 'shiki-magic-move/dist/style.css'
import Highlighter, {useHighlighter} from "components/Highlighter.tsx";

export default function ActionsUseTransition() {
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()

  const { highlighter, switchView, code, isViewB } = useHighlighter(
    beforeUseTranition,
    afterUseTransition
  )

  const handleSubmit = () => {
    setError('')
    setSuccess(false)
    // ====================================================
    startTransition(async () => {
      const error = await updateName(name)
      if (error) {
        setError(error)
        return
      }
      setSuccess(true)
      // Success!
    })
    // ===================================================
  }

  return (
    <div>
      {highlighter && (
        <Highlighter
          highlighter={highlighter}
          code={code}
          isViewB={isViewB}
          switchView={switchView}
          beforeText="before useTransition"
          afterText="with useTransition"
        />
      )}

      <h2 className="text-3xl my-8">Example</h2>
      <div className="flex items-center gap-8 pb-12">
        {success && (
          <Alert
            color="success"
            title="Successfully uploaded!"
            before={<LucideCheck />}
            closable
          />
        )}

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
        <Button
          onClick={handleSubmit}
          disabled={isPending}
          isIconOnly={isPending}
        >
          {isPending ? <Loading size="xs" type="spinner" /> : 'Save'}
        </Button>
      </div>
    </div>
  )
}
