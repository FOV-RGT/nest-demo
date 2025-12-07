/** @type {import('jest').Config} */
module.exports = {
    // ===== 基础配置 =====

    // 预设：使用 ts-jest 处理 TypeScript
    preset: 'ts-jest',

    // 测试环境：Node.js
    testEnvironment: 'node',

    // ===== 模块解析 =====

    // 模块名映射：自动移除导入中的 .js 扩展名
    // 这样生产代码可以保留 .js，测试时 Jest 会自动处理
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },

    // transform: {
    //     "^.+\\.(t|j)s$": "ts-jest"
    // },

    // ===== 测试文件配置 =====

    // 测试文件搜索根目录
    roots: ['<rootDir>/src'],

    // 测试文件匹配模式
    testMatch: ['**/*.spec.ts', '**/*.e2e-spec.ts'],

    // 模块扩展名解析顺序
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],

    // ===== 覆盖率配置 =====

    // 启用覆盖率收集
    collectCoverage: true,

    // 覆盖率报告输出目录
    coverageDirectory: '<rootDir>/coverage',

    coverageReporters: [process.env.CI === 'true' ? 'lcov' : 'text', 'text'],

    // 收集覆盖率的文件模式
    collectCoverageFrom: [
        'src/**/*.{ts,js}',
        '!src/**/*.spec.ts', // 排除测试文件
        '!src/**/*.e2e-spec.ts', // 排除 e2e 测试文件
        '!src/main.ts', // 排除入口文件
        '!src/app.controller.ts', // 排除 controller
        '!src/app.service.ts', // 排除 service
        '!src/app.module.ts', // 排除 module
    ],

    // 覆盖率阈值：必须达到 50%
    coverageThreshold: {
        global: {
            statements: 50, // 语句覆盖率
            branches: 50, // 分支覆盖率
            functions: 50, // 函数覆盖率
            lines: 50, // 行覆盖率
        },
    },
};
