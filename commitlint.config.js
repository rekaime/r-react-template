export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix']],

        'type-empty': [2, 'never'],

        'subject-empty': [2, 'never'],

        'type-case': [2, 'always', 'lower-case'],

        // subject 不能以句号结尾
        'subject-full-stop': [2, 'never', '.'],

        // subject 最大长度
        'subject-max-length': [2, 'always', 100],

        'subject-case': [0, 'never'],
    },
}
