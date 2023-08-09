export default {
    base: '/lock-scroll/',
    build: {
        emptyOutDir: true,
        outDir: '../docs',
    },
    root: 'src-docs',
    test: {
        environment: 'happy-dom',
        globals: true,
        root: '.'
    }
};
