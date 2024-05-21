export default function Description() {
  return (
    <>
      <h1 className="text-2xl">What does the compiler do? </h1>
      <ul className="mt-8 list-disc list-inside flex flex-col gap-4 pr-4">
        <li>
          The compiler understands your code at a deep level through its
          understanding of plain JavaScript semantics and the{' '}
          <a
            href="https://react.dev/reference/rules"
            target="_blank"
            className="text-fuchsia-500"
          >
            Rules of React
          </a>
          .
        </li>
        <li>This allows it to add automatic optimizations to your code.</li>
        <li>
          {' '}
          You may be familiar today with manual memoization through{' '}
          <span className="text-fuchsia-500">useMemo</span>,
          <span className="text-fuchsia-500">useCallback</span>, and{' '}
          <span className="text-fuchsia-500">React.memo</span>. The compiler can
          automatically do this for you, if your code follows the Rules of
          React.
        </li>{' '}
        <li>
          {' '}
          If it detects breakages of the rules, it will automatically skip over
          just those components or hooks, and continue safely compiling other
          code.
        </li>
      </ul>
      <a
        className="mt-8 block underline text-xl text-center text-sky-500 hover:text-sky-300"
        href="https://playground.react.dev/"
        target="_blank"
      >
        Playground
      </a>
    </>
  )
}
