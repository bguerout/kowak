module.exports = {
    apps: [
        {
            name: 'API',
            script: 'index.js',
            exec_mode: 'cluster',
            instances: 2,
            cwd: 'pm2/api',
            instance_var: 'PM2_INSTANCE_ID',
        }
    ],
    deploy: {
        dev: {
            'host': '127.0.0.1',
            'ref': 'origin/master',
            'repo': 'https://github.com/bguerout/kowak.git',
            'path': '/home/vagrant/kowak',
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
                "IdentityFile=ansible/.vagrant/machines/kowak.dev/virtualbox/private_key",
                "IdentitiesOnly=yes",
                "LogLevel=FATAL",
            ],
            'post-deploy': 'npm install && pm2 startOrRestart /opt/kowak/ecosystem.config.js --env dev --update-env',
        }
    }
};
