const http = require('http');
const httpProxy = require('http-proxy');

// 创建代理服务器，开启 WebSocket 支持（Astro 热更新需要）
const proxy = httpProxy.createProxyServer({ ws: true });

// 配置你的子域名和对应的本地端口
const routes = {
    'localhost': ' http://localhost:4321/',
    'project.localhost': ' http://localhost:4322/'
};

const server = http.createServer((req, res) => {
    const target = routes[req.headers.host];
    if (target) {
        proxy.web(req, res, { target });
    } else {
        res.writeHead(404);
        res.end('Proxy Route Not Found');
    }
});

// 处理 Astro 的热更新 (HMR) WebSocket 连接
server.on('upgrade', (req, socket, head) => {
    const target = routes[req.headers.host];
    if (target) {
        proxy.ws(req, socket, head, { target });
    }
});

// 监听 80 端口（去掉浏览器 URL 中端口号的关键）
server.listen(80, () => {
    console.log('🚀 代理服务器已启动!');
    console.log('访问 http://localhost -> 指向 4321 端口');
    console.log('访问 http://project.localhost -> 指向 4322 端口');
});