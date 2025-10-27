import { defineConfig, presetTypography } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import { pxToRem } from './src/plugin/uno'

export default defineConfig({
    presets: [
        presetWind3(), // 默认原子化规则集
        presetAttributify(), // 支持属性写法（<div text="red">）
        presetIcons(), // 支持图标类名（如 i-heroicons-home）
        presetTypography(), // 支持更漂亮的 prose 样式
    ],

    theme: {
        colors: {
            brand: '#007aff',
        },
        spacing: {
            px: '1px',
            0: '0',
            ...pxToRem.theme.spacing,
        },
        fontSize: {
            ...pxToRem.theme.fontSize,
        },
    },
    shortcuts: [
        [
            'btn',
            'px-4 py-1 rounded inline-block bg-brand text-white cursor-pointer hover:bg-brand/80 transition',
        ],
    ],
    rules: [...pxToRem.rules],
    transformers: [...pxToRem.transformers],
})
