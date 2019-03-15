//import jquery
//<script src = "https://res.wx.qq.com/open/js/jweixin-1.0.0.js" > </script>


Share();

function Share() {
	$(function () {
		var uri = 'http://wxmpcommon.dwechat.com/api/WeixinJSSDKApi';
		$.getJSON(uri).done(function (data) {
			wx.config({
				debug: false,
				appId: data.AppId,
				timestamp: data.Timestamp,
				nonceStr: data.NonceStr,
				signature: data.Signature,
				jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage'
				]
			});
		});
		wx.error(function (res) {
			console.log(res);
		});
	});

	wx.ready(function () {
		wx.onMenuShareAppMessage({
			title: 'ShareTitleContent',
			desc: 'ShareDescription', // 分享描述
			link: window.href, // 分享链接
			imgUrl: 'http://www.digi-tiger.com/Theme/Tuesday/Ver0.1/images/dt-favicon.png', // 分享图标
		});
		wx.onMenuShareTimeline({
			title: 'ShareTitle', // 分享标题
			link: window.href, // 分享链接
			imgUrl: 'http://www.digi-tiger.com/Theme/Tuesday/Ver0.1/images/dt-favicon.png', // 分享图标
		});
	});
}

