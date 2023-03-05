console.log('Google Mirror JS');
console.log('Powered by Yunwu');
console.log('v0.2-alpha-k1-03051545');

const key = "GF3DA";

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.cookie.replace(/(?:(?:^|.*;\s*)key\s*\=\s*([^;]*).*$)|^.*$/, "$1") != key) {
        console.log("Check failed");
        event.preventDefault();
        document.write('<!DOCTYPE html><html><head>	<title>验证</title>	<style>		body {			background-color: #f2f2f2; 		}		.container {			display: flex;			flex-direction: column;			align-items: center;			justify-content: center;			height: 100vh;		}		.text-input {			padding: 10px;			border-radius: 5px;			border: none;			width: 300px;			font-size: 18px;			text-align: center;		}		.submit-btn {			margin-top: 20px;			padding: 10px 20px;			border-radius: 5px;			border: none;			background-color: #4CAF50;			color: #fff;			font-size: 16px;			cursor: pointer;			transition: background-color 0.3s;		}		.submit-btn:hover {			background-color: #3e8e41;		}		.footer {			background-color: #f2f2f2;			text-align: center;			font-size: 12px;			color: #888;			position: fixed;			bottom: 0;			width: 100%;			height: 40px;		}	</style></head><body>	<div class="container">		<h2>Yunwu Mirrors 问题验证</h2>		<p>一个主存的MAR有4位，则主存的存储体M中有几个存储单元？</p>		<input type="text" class="text-input" id="ans" placeholder="请输入答案">		<button type="submit" class="submit-btn" onclick="submit()">提交</button>	</div>	<script>		function submit() {			var ans = document.getElementById("ans").value;			if(ans != 16) {				alert("答案错误,请重试!");			} else {				document.cookie = "key=GF3DA; expires=Fri, 31 Dec 9999 23:59:59 GMT";				window.location.href = "https://gp.yunwuu.cn/";			}			return;            }	</script>	<footer class="footer">		Ver 0.1-alpha-b2 | Powered by Yunwu	</footer></body></html>');    
        return;
    } else {
        console.log("Check passed");
    }

    for (const dom of document.querySelectorAll('a[href]')) {
        let href = dom.href;
        for (const regex of [/\/\/([^.]+(?:\.m)?\.planet)\.wikimedia\.org/, /\/\/([^.]+(?:\.m)?\.(?:wiki(?:books|data|news|pedia|quote|source|versity|voyage)|wiktionary|mediawiki))\.org/, /\/\/(advisors(?:\.m)?|advisory(?:\.m)?|affcom|am(?:\.m)?|analytics|annual|api(?:\.m)?|ar(?:\.m)?|auditcom|bd(?:\.m)?|be(?:\.m)?|blog|board|boardgovcom|br(?:\.m)?|bugzilla|ca(?:\.m)?|chair|checkuser(?:\.m)?|cn(?:\.m)?|co(?:\.m)?|collab|(?:test-)?commons(?:\.m)?|config-master|cxserver|dbtree|design|developer|diff|dk(?:\.m)?|doc|ec(?:\.m)?|ee(?:\.m)?|electcom(?:\.m)?|etherpad|exec(?:\.m)?|fdc(?:\.m)?|fi(?:\.m)?|foundation(?:\.m)?|ge(?:\.m)?|gerrit|gitlab|gr(?:\.m)?|grafana|grants(?:\.m)?|graphite|hi(?:\.m)?|horizon|id(?:\.m)?|id-internal(?:\.m)?|idp|iegcom(?:\.m)?|il|incubator(?:\.m)?|intake-(?:analytics|logging)|integration|internal|labtestwikitech|legalteam(?:\.m)?|lists|login(?:\.m)?|logstash|mai(?:\.m)?|maps|meta(?:\.m)?|mk(?:\.m)?|movementroles|mx(?:\.m)?|ng(?:\.m)?|nl(?:\.m)?|no(?:\.m)?|noboard-chapters|noc|nyc(?:\.m)?|nz(?:\.m)?|office(?:\.m)?|ombuds(?:\.m)?|ombudsmen|ores|otrs-wiki(?:\.m)?|outreach(?:\.m)?|pa-us(?:\.m)?|people|pl(?:\.m)?|performance|phabricator|planet|policy|pt(?:\.m)?|projectcom|punjabi(?:\.m)?|quality(?:\.m)?|research|romd(?:\.m)?|rs(?:\.m)?|rt|ru(?:\.m)?|se(?:\.m)?|searchcom|schema|secure|spcom|species(?:\.m)?|static-bugzilla|steward(?:\.m)?|strategy(?:\.m)?|stream|svn|techblog|techconduct|ticket|tr(?:\.m)?|transitionteam(?:\.m)?|toolsadmin|transparency|ua(?:\.m)?|upload|usability|vote(?:\.m)?|vrt-wiki(?:\.m)?|wb(?:\.m)?|wikimania(?:200[5-9]|201[0-8]|wikitech-static|team)?(?:\.m)?|wikitech)\.wikimedia\.org/]) {
            href = href.replace(regex, `//$1.wikimirror.net`);
        };
        /[^.]+(?:\.m)?\.wikipedia\.wikimirror\.net/.test(href) && (href = href.replace('wikipedia', 'ruc'));
        dom.href = href;
        dom.rel= 'noreferrer';
    }
})