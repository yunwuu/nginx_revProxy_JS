console.log('Google Mirror JS');
console.log('Powered by Yunwu');


const key = "GF3DA";

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.cookie.replace(/(?:(?:^|.*;\s*)key\s*\=\s*([^;]*).*$)|^.*$/, "$1") != key) {
        console.log("Check failed");
        event.preventDefault();
        document.write('<!DOCTYPE html><html><head>	<title>验证</title>	<style>		body {			background-color: #f2f2f2; 		}		.container {			display: flex;			flex-direction: column;			align-items: center;			justify-content: center;			height: 100vh;		}		.text-input {			padding: 10px;			border-radius: 5px;			border: none;			width: 300px;			font-size: 18px;			text-align: center;		}		.submit-btn {			margin-top: 20px;			padding: 10px 20px;			border-radius: 5px;			border: none;			background-color: #4CAF50;			color: #fff;			font-size: 16px;			cursor: pointer;			transition: background-color 0.3s;		}		.submit-btn:hover {			background-color: #3e8e41;		}		.footer {			background-color: #f2f2f2;			text-align: center;			font-size: 12px;			color: #888;			position: fixed;			bottom: 0;			width: 100%;			height: 40px;		}	</style></head><body>	<div class="container">		<h2>Yunwu Mirrors 问题验证</h2>		<p>一个主存的MAR有4位，则主存的存储体M中有几个存储单元？</p>		<input type="text" class="text-input" id="ans" placeholder="请输入答案">		<button type="submit" class="submit-btn" onclick="submit()">提交</button>	</div>	<script>		function submit() {			var ans = document.getElementById("ans").value;			if(ans != 16) {				alert("答案错误,请重试!");			} else {				document.cookie = "key=GF3DA; expires=Fri, 31 Dec 9999 23:59:59 GMT";				window.location.href = "https://gp.yunwuu.cn/";			}			return;            }	</script>	<footer class="footer">		Ver 0.1-alpha-b2 | Powered by Yunwu	</footer></body></html>');    
    } else {
        console.log("Check passed");
    }
})
