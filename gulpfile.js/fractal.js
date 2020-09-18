/**
 * Fractal instanceの設定
 * See https://fractal.build/guide/integration/build-tools.html#gulp
 */
const fractal = require('@frctl/fractal').create();
fractal.set('project.title', 'FooCorp Component Library'); // title for the project
fractal.web.set('builder.dest', 'build'); // destination for the static export
fractal.docs.set('path', `${__dirname}/stuleguide/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/stuleguide/components`); // location of the component directory.
// any other configuration or customisation here

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility
const fractalstart =  done => {
  const server = fractal.web.server({
      sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
      logger.success(`Fractal server is now running at ${server.url}`);
  });

  done();
};

exports.fractalstart = fractalstart

/*
* Run a static export of the project web UI.
*
* This task will report on progress using the 'progress' event emitted by the
* builder instance, and log any errors to the terminal.
*
* The build destination will be the directory specified in the 'builder.dest'
* configuration option set above.
*/

const fractalbuild = done => {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.start().then(() => {
      logger.success('Fractal build completed!');
  });
};

exports.fractalbuild = fractalbuild