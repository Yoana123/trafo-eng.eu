import React from 'react'

export default function useOnClickAway(
  refs: React.RefObject<HTMLElement | undefined>[],
  onClickAway?: () => void
): void {
  React.useEffect(() => {
    const onClick = ({ target }: MouseEvent): void => {
      if (target instanceof HTMLElement || target instanceof SVGElement) {
        const isOneRefClicked = refs.some(
          (ref: React.RefObject<HTMLElement | undefined>): boolean =>
            ref.current instanceof HTMLElement && ref.current.contains(target)
        )

        if (!isOneRefClicked && onClickAway) {
          onClickAway()
        }
      }
    }

    window.addEventListener('click', onClick, false)

    return (): void => window.removeEventListener('click', onClick)
  }, [refs, onClickAway])
}
