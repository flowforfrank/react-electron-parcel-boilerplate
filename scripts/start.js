const Bundler = require('parcel-bundler');

const entry = './public/index.html';
const options = {
    outDir: './build',
    publicUrl: './',
    sourceMaps: false,
    autoInstall: false,
    hmr: false,
    target: 'electron'
};

let electronStarted = false;

(async () => {
    const bundler = new Bundler(entry, options);

    bundler.on('bundled', bundle => {
        if (!electronStarted) {
            electronStarted = true;

            require('child_process').spawn('npm', ['run', 'electron'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });
        }
    });

    bundler.bundle();
})();