module.exports = {
    apps: [
        {
            name: 'API',
            script: 'index.js',
            exec_mode: 'cluster',
            instances: 12,
            instance_var: 'PM2_INSTANCE_ID',
            env: {
                "NODE_ENV": "dev",
            },
        }
    ],
    deploy: {
        dev: {
            'host': '127.0.0.1',
            'ref': `origin/${process.env.APP_VERSION}`,
            'repo': 'https://github.com/bguerout/kowak.git',
            'path': '/home/vagrant/kowak',
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
            'post-deploy': `cd pm2/api && npm install && pm2 startOrRestart /opt/kowak/ecosystem.dev.config.js --env dev --update-env`,
        }
    }
};
