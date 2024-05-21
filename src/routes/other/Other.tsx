import Highlighter, {useHighlighter} from 'components/Highlighter.tsx' // function updateName(name: string) {
import 'shiki-magic-move/dist/style.css'
import {refAsPropExample, serverComponents} from "routes/other/code/code-examples.ts";


// ===========================================================
export default function Other() {
  const { highlighter, switchView, code, isViewB } = useHighlighter(
    refAsPropExample,
    serverComponents
  )

  return (
    <div>
      {highlighter && (
        <Highlighter
          highlighter={highlighter}
          code={code}
          isViewB={isViewB}
          switchView={switchView}
          beforeText="Ref as prop"
          afterText="Server components"
        />
      )}
    </div>
  )
}
