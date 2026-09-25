/**
 * 首页运行时入口。
 *
 * 页面本身保持纯静态：先完成首屏渲染，再在浏览器空闲时加载首页唯一
 * 需要的外部 RAG 小组件，避免外部网络请求和脚本执行抢占首屏资源。
 */
(function loadRagWidgetWhenIdle() {
  var widgetUrl =
    "https://rag.luckynwa.top/widget.js?api_key=579e7e975dc52e2be8db96aa2241f0d9&base_url=https%3A%2F%2Frag.luckynwa.top";

  function loadWidget() {
    var widgetScript = document.createElement("script");

    widgetScript.src = widgetUrl;
    widgetScript.async = true;
    widgetScript.dataset.source = "lucky-index";
    document.body.appendChild(widgetScript);
  }

  function scheduleWidget() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadWidget, { timeout: 2000 });
    } else {
      window.setTimeout(loadWidget, 1200);
    }
  }

  if (document.readyState === "complete") {
    scheduleWidget();
  } else {
    window.addEventListener("load", scheduleWidget, { once: true });
  }
})();
