import type { UserConfig } from 'unocss'

function defineConfig<T extends UserConfig<object>>(config: T) {
    return config
}

const ptr = (size: number) => `${size / 16}rem`

export const pxToRem = defineConfig({
    theme: {
        spacing: {
            1: ptr(4),
            2: ptr(8),
            3: ptr(12),
            4: ptr(16),
            5: ptr(20),
            6: ptr(24),
            8: ptr(32),
            10: ptr(40),
            12: ptr(48),
            16: ptr(64),
            20: ptr(80),
            24: ptr(96),
            32: ptr(128),
            40: ptr(160),
            48: ptr(192),
            56: ptr(224),
            64: ptr(256),
        },
        fontSize: {
            xs: [ptr(12), ptr(16)],
            sm: [ptr(14), ptr(20)],
            base: [ptr(16), ptr(24)],
            lg: [ptr(18), ptr(28)],
            xl: [ptr(20), ptr(28)],
            '2xl': [ptr(24), ptr(32)],
            '3xl': [ptr(30), ptr(36)],
            '4xl': [ptr(36), ptr(40)],
            '5xl': [ptr(48), ptr(1)],
            '6xl': [ptr(60), ptr(1)],
            '7xl': [ptr(72), ptr(1)],
            '8xl': [ptr(96), ptr(1)],
            '9xl': [ptr(128), ptr(1)],
        },
    },
    transformers: [
        {
            name: 'px-to-rem',
            enforce: 'pre',
            transform(code) {
                const s = code.toString()
                const replaced = s.replace(/(\d+)px/g, (match, px) => {
                    const pxValue = parseInt(px)
                    if (pxValue >= 1 && pxValue <= 100) {
                        return ptr(pxValue)
                    }
                    return match
                })
                code.overwrite(0, s.length, replaced)
            },
        },
    ],
    rules: [
        [/^p-(\d+)px$/, ([, d]) => ({ padding: ptr(parseInt(d)) })],
        [/^m-(\d+)px$/, ([, d]) => ({ margin: ptr(parseInt(d)) })],
        [/^w-(\d+)px$/, ([, d]) => ({ width: ptr(parseInt(d)) })],
        [/^h-(\d+)px$/, ([, d]) => ({ height: ptr(parseInt(d)) })],
        [/^text-(\d+)px$/, ([, d]) => ({ 'font-size': ptr(parseInt(d)) })],
        [/^leading-(\d+)px$/, ([, d]) => ({ 'line-height': ptr(parseInt(d)) })],
    ],
})
