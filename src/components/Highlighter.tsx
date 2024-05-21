import { Button } from '@lemonsqueezy/wedges'
import { ShikiMagicMove } from 'shiki-magic-move/react'
import { getHighlighter, type HighlighterCore } from 'shiki'
import React from 'react'

interface HighlighterProps {
  highlighter: HighlighterCore
  switchView: () => void
  code: string
  isViewB: boolean
  beforeText?: string
  afterText?: string
  hideButton?: boolean
}
export default function Highlighter({
  highlighter,
  switchView,
  code,
  isViewB,
  beforeText = 'Before',
  afterText = 'After',
  hideButton = false
}: HighlighterProps) {
  return (
    <>
      {!hideButton && (
        <div className="mb-4 flex justify-end">
          <Button onClick={switchView} className="ml-auto" variant="outline">
            Show {isViewB ? beforeText : afterText}
          </Button>
        </div>
      )}
      <ShikiMagicMove
        lang="tsx"
        theme="ayu-dark"
        highlighter={highlighter}
        code={code}
        options={{ duration: 800, stagger: 0.3, lineNumbers: true }}
        className="rounded-lg p-4 shadow-xl"
      />
    </>
  )
}

export function useHighlighter(a: string, b: string) {
  const [code, setCode] = React.useState(a)
  const [isViewB, setIsViewB] = React.useState(false)
  const [highlighter, setHighlighter] = React.useState<HighlighterCore>()

  const switchView = () => {
    const code = isViewB ? a : b
    setCode(code)
    setIsViewB((p: boolean) => !p)
  }

  React.useEffect(() => {
    async function initializeHighlighter() {
      const highlighter = await getHighlighter({
        themes: ['ayu-dark'],
        langs: ['typescript', 'tsx', 'ts']
      })
      setHighlighter(highlighter)
    }
    initializeHighlighter()
  }, [])

  return { highlighter, switchView, code, isViewB }
}
