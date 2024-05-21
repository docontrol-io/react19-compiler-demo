import {Button} from "@lemonsqueezy/wedges";

interface CounterProps {
  count: number
  onAdd: () => void
}
export default function Counter({ count, onAdd }: CounterProps) {
  return <Button onClick={onAdd}>Add ({count})</Button>
}
