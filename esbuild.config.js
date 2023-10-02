import esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['src/index.ts'],
    format: 'esm',
    logLevel: 'info',
    minify: true,
    outfile: 'dist/index.mjs',
});

await esbuild.build({
    entryPoints: ['src/index.ts'],
    format: 'iife',
    globalName: 'js4y.scrolling',
    logLevel: 'info',
    minify: true,
    outfile: 'dist/index.js'
});
