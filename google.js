'use strict';
console.log('Google Mirror JS');
console.log('v0.2-alpha-k1-030620');
console.log('Powered by Yunwu');

// 外部变量
const KEY = 'GF3DA';
const FORBID_WORD_LIST = ['JUU2JTk2JTg3JUU5JTlEJUE5', 'JUU0JUI5JUEwJUU4JUJGJTkxJUU1JUI5JUIz'];

// 公共函数
const getCookie = (name) => `; ${decodeURIComponent(document.cookie)}`.split(`; ${name}=`).pop().split(';').shift();
const getQueryVariable = (name) => {
	const query = new URLSearchParams(location.search).get(name);
	if (query) return decodeURIComponent(query);
	return null;
};
const verifyWords = (name) => {
	const bname = btoa(encodeURIComponent(name));
	return FORBID_WORD_LIST.includes(bname);
};


(() => {
	// 屏蔽词过滤
	if (location.pathname === '/search' && verifyWords(getQueryVariable('q'))) {
		console.log('Not allowed');
		location.href = 'https://gp.yunwuu.cn/';
	}
	console.log('Check passed');
	// 链接替换
	document.addEventListener('DOMContentLoaded', () => {
		// 问题验证
		if (getCookie('key') !== KEY) {
			console.log('Check failed');
			document.documentElement.innerHTML = `<!DOCTYPE html><html lang="zh-Hans-CN"><head><title>问题验证</title><style>.container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}.text-input{padding:10px;border-radius:5px;border:none;width:300px;font-size:18px;text-align:center}.submit-btn{margin-top:20px;padding:10px 20px;border-radius:5px;border:none;background-color:#4caf50;color:#fff;font-size:16px;cursor:pointer;transition:background-color .3s}.submit-btn:hover{background-color:#3e8e41}.footer{background-color:#f2f2f2;text-align:center;font-size:12px;color:#888;position:fixed;bottom:0;width:100%;height:40px}</style></head><body><div class="container"><h2>Yunwu Mirror问题验证</h2><p>一个主存的MAR有4位，则主存的存储体M中有几个存储单元？</p><input type="number" class="text-input" id="ans" placeholder="请输入答案" required><button type="submit" class="submit-btn" onclick="submit()">提交</button></div><script>window.submit=()=>{const ans=document.getElementById('ans').value;if(ans!=='16'){alert('答案错误,请重试!')}else{document.cookie='key=GF3DA;expires=Fri, 31 Dec 9999 23:59:59 GMT';location.href='https://gp.yunwuu.cn/'}}</script><footer class="footer">Ver 0.1-alpha-b2 | Powered by Yunwu</footer></body></html>`;
			return;
		}
		for (const dom of document.querySelectorAll('a[href]')) {
			let href = dom.href;
			for (const regex of [/\/\/([^.]+(?:\.m)?\.planet)\.wikimedia\.org/, /\/\/([^.]+(?:\.m)?\.(?:wiki(?:books|data|news|pedia|quote|source|versity|voyage)|wiktionary|mediawiki))\.org/, /\/\/(advisors(?:\.m)?|advisory(?:\.m)?|affcom|am(?:\.m)?|analytics|annual|api(?:\.m)?|ar(?:\.m)?|auditcom|bd(?:\.m)?|be(?:\.m)?|blog|board|boardgovcom|br(?:\.m)?|bugzilla|ca(?:\.m)?|chair|checkuser(?:\.m)?|cn(?:\.m)?|co(?:\.m)?|collab|(?:test-)?commons(?:\.m)?|config-master|cxserver|dbtree|design|developer|diff|dk(?:\.m)?|doc|ec(?:\.m)?|ee(?:\.m)?|electcom(?:\.m)?|etherpad|exec(?:\.m)?|fdc(?:\.m)?|fi(?:\.m)?|foundation(?:\.m)?|ge(?:\.m)?|gerrit|gitlab|gr(?:\.m)?|grafana|grants(?:\.m)?|graphite|hi(?:\.m)?|horizon|id(?:\.m)?|id-internal(?:\.m)?|idp|iegcom(?:\.m)?|il|incubator(?:\.m)?|intake-(?:analytics|logging)|integration|internal|labtestwikitech|legalteam(?:\.m)?|lists|login(?:\.m)?|logstash|mai(?:\.m)?|maps|meta(?:\.m)?|mk(?:\.m)?|movementroles|mx(?:\.m)?|ng(?:\.m)?|nl(?:\.m)?|no(?:\.m)?|noboard-chapters|noc|nyc(?:\.m)?|nz(?:\.m)?|office(?:\.m)?|ombuds(?:\.m)?|ombudsmen|ores|otrs-wiki(?:\.m)?|outreach(?:\.m)?|pa-us(?:\.m)?|people|pl(?:\.m)?|performance|phabricator|planet|policy|pt(?:\.m)?|projectcom|punjabi(?:\.m)?|quality(?:\.m)?|research|romd(?:\.m)?|rs(?:\.m)?|rt|ru(?:\.m)?|se(?:\.m)?|searchcom|schema|secure|spcom|species(?:\.m)?|static-bugzilla|steward(?:\.m)?|strategy(?:\.m)?|stream|svn|techblog|techconduct|ticket|tr(?:\.m)?|transitionteam(?:\.m)?|toolsadmin|transparency|ua(?:\.m)?|upload|usability|vote(?:\.m)?|vrt-wiki(?:\.m)?|wb(?:\.m)?|wikimania(?:200[5-9]|201[0-8]|wikitech-static|team)?(?:\.m)?|wikitech)\.wikimedia\.org/]) {
				href = href.replace(regex, `//$1.wikimirror.net`);
			}
			/[^.]+(?:\.m)?\.wikipedia\.wikimirror\.net/.test(href) && (href = href.replace('wikipedia', 'bnu'));
			dom.href = href;
			dom.rel = 'noreferrer';
			delete dom.dataset.jsarwt;
		}
	});
})();
