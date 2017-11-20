module.exports = {
  apps: [
    {
      name: 'API',
      script: 'index.js',
      exec_mode: 'cluster',
      instances: 4,
      cwd: '/opt/kowak/app/pm2/api',
      instance_var: 'PM2_INSTANCE_ID',
    }
  ],
  deploy: {
    dev: {
      'host': '127.0.0.1',
      'ref': 'origin/master',
      'repo': 'https://github.com/bguerout/kowak.git',
      'path': '/opt/kowak/app',
      'env': {
        "NODE_ENV": "dev",
      },
      'ssh_options': [
        "HostName=127.0.0.1",
        "User=vagrant",
        "Port=2222",
        "UserKnownHostsFile=/dev/null",
        "StrictHostKeyChecking=no",
        "PasswordAuthentication=no",
        "IdentityFile=~/dev/github/kowak/.vagrant/machines/default/virtualbox/private_key",
        "IdentitiesOnly=yes",
        "LogLevel=FATAL",
      ],
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.json --env dev --update-env',
    }
  }
};
