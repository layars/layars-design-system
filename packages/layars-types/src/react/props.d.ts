import type { ForwardRefExoticComponent, FC, PropsWithoutRef, RefAttributes } from 'react'

import type { Theme } from '@layars/tokens/light'

type LayarsTheme = Theme

type LayarsOverrideProps = 'as'

interface BaseProps {
    // Extended for styled-components
    // since it can render an entirely new component
    as?: React.ElementType
}

type OverrideTypes = string | number | symbol

type LayarsBaseProps<T, O extends OverrideTypes = ''> = Omit<
    Omit<React.HTMLProps<T>, LayarsOverrideProps> & BaseProps,
    O
>

interface LayarsToken extends LayarsTheme {}

interface LayarsForwardRef<P, R = HTMLDivElement>
    extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>> {
    layarsName?: string
}

interface LayarsFunctional<P> extends FC<P> {
    layarsName?: string
}

export type {
    LayarsForwardRef,
    LayarsFunctional,
    LayarsBaseProps,
    LayarsOverrideProps,
    LayarsToken,
}
