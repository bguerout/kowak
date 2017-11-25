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
            'host': 'localhost',
            'ref': 'origin/master',
            'repo': 'https://github.com/bguerout/kowak.git',
            'path': '/opt/kowak/app',
            'env': {
                "NODE_ENV": "dev",
            },
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.json --env dev --update-env',
        }
    }
};
