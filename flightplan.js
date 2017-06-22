var plan = require('flightplan');

plan.target('staging', [
  {
    host: '104.236.123.168',
    agent: process.env.SSH_AUTH_SOCK,
    repo: 'react-boilerplate',
    username: 'deploy',
    passphrase: 'pipowakwa1258',
    repository: 'https://github.com/platinim/react-boilerplate.git',
    startFile: 'server'
  }
]);

plan.target('production', [
  {
    host: '138.68.93.25',
    agent: process.env.SSH_AUTH_SOCK,
    repo: 'production',
    username: 'production',
    repository: 'https://github.com/platinim/react-boilerplate.git',
    startFile: 'server'
  },
]);

// run commands on localhost
plan.local(function(local) {

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '~/repo');
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.hostname();

  remote.log('Delete current folder');
  remote.log('============================================================================================');
  remote.rm('-rf current', {user: remote.runtime.username});

  remote.log('Create current folder');
  remote.log('============================================================================================');
  remote.sudo('mkdir current', {user: remote.runtime.username});

  remote.log('Copy to .env');
  remote.log('============================================================================================');
  remote.sudo('cp -R .env current/', {user: remote.runtime.username});

  remote.log('Copy to current.');
  remote.log('============================================================================================');
  remote.sudo('cp -R repo/* current/', {user: remote.runtime.username});

  remote.log('Cd current folder');
  remote.log('============================================================================================');
  remote.with('cd current', {user: remote.runtime.username}, function() {
    remote.log('Install dependencies');
    remote.log('============================================================================================');
    remote.sudo('yarn --prod', {user: remote.runtime.username});
  });

  remote.log('Make versions folder.');
  remote.log('============================================================================================');
  remote.sudo('mkdir -p versions', {user: remote.runtime.username});

  remote.log('Create latest versions of deployment.');
  remote.log('============================================================================================');
  remote.sudo('mv repo '  + 'versions/' + remote.runtime.repo + '-$(date +%s%N)', {user: remote.runtime.username});

  remote.log('Reload application');
  remote.log('============================================================================================');
  remote.exec('pm2 stop all', {failsafe: true});
  remote.exec('pm2 start npm -- run start:prod');
});
